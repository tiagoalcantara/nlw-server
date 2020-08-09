import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject;
        const time = filters.time;
        const week_day = filters.week_day;

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('class_schedule.class_id = classes.id')
                    .modify(async function (queryBuilder){
                        if(time) {
                            const timeInMinutes = convertHourToMinutes(time as string);

                            await queryBuilder
                            .whereRaw('class_schedule.from <= ??', [timeInMinutes])
                            .whereRaw('class_schedule.to > ??', [timeInMinutes])
                        }

                        if(week_day){
                            await queryBuilder.whereRaw('class_schedule.week_day = ??', [Number(week_day)]);
                        }
                    })
            })
            .modify(async function (queryBuilder){
                if(subject){
                    await queryBuilder.where('classes.subject', '=', subject as string);
                }
            })
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.status(200).json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            }).returning('id');
       
            const user_id = insertedUsersIds[0];
       
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            }).returning('id');
       
            const class_id = insertedClassesIds[0];
       
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id,
                };
            });
       
           await trx('class_schedule').insert(classSchedule)
       
           await trx.commit();
       
           return response.status(201).send();
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class.'
            })
        }
    }
}