# 🚀 Next Level Week - Backend

> Aplicação em NodeJS desenvolvida durante a Next Level Week #2 da [Rocketseat](http://rocketseat.com.br/).
> O curso acabou, mas os estudos continuam! Devo continuar a implementar funções conforme tiver tempo. 😃
> 
> Você pode ver como está ficando o frontend clicando [**aqui**](https://tiagoalcantara-proffy.netlify.app/).

## Sobre

A aplicação proposta pelo curso se chama "Proffy", e é uma plataforma para que professores possam cadastrar seus dados de contato para alunos que buscam aulas particulares remotas.

<p align="center">
  <image height="600px" src="./docs/home.png">
</p>

## Tecnologias e repositórios

> Além da aplicação web, o curso também aborda o backend e mobile!

* [Frontend web](https://github.com/tiagoalcantara/nlw-web)  - [ReactJS](https://pt-br.reactjs.org/)
* [Frontend mobile](https://github.com/tiagoalcantara/nlw-mobile)   - [React Native](https://reactnative.dev/)
* Backend (Repositório atual) - [NodeJS](https://nodejs.org/en/) com [ExpressJS](https://expressjs.com/pt-br/) e [KnexJS](http://knexjs.org/)

Todos os projetos foram desenvolvidos usando [TypeScript](https://www.typescriptlang.org/).

## Extras

> O que foi feito além do apresentado no curso?
>
> Essa seção será atualizada ao longo do tempo conforme meus estudos. 📒

### Componente "Loader"

Um componente para mostrar ao usuário que os dados estão sendo carregados. Animação feita no css utilizando as propriedades de [_animation_](https://www.w3schools.com/css/css3_animations.asp) e [_stroke_](https://www.w3schools.com/graphics/svg_stroking.asp).

<p align="center">
  <image src="./docs/loader.gif">
</p>

### Componente "Empty State"

Um componente simples para informar o usuário caso a busca não retorne resultados.

<p align="center">
  <image src="./docs/empty_state.png">
</p>
  
### Mudanças na filtragem

Durante o curso, para buscar professores era obrigatório informar três parâmetros (dia da semana, matéria e horário). Alterei o frontend e o backend para que os parâmetros se tornem opcionais. Dessa forma, caso nada seja informado todos os professores são retornados e a filtragem se torna mais flexível.

<p align="center">
  <image src="./docs/busca.png">
</p>
  
### Tela de Login

Como parte dos desafios ao final do curso, comecei a implementar essa tela. Ainda sem funcionalidade.
(Não está acessível na prévia devido a problemas com o Netlify e o React Router que ainda não corrigi)

<p align="center">
  <image src="./docs/tela_login.png">
</p>
