import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './componentes/Clock';
//import App from './App';
//import Comment from './componentes/Comment';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Menor Exemplo de react
// ReactDOM.render(
//   <h1>Olá, Maria!</h1>,
//   document.getElementById('root')
// );


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//EXPRESSÕES EM JSX

//1° - Expressão;
// const name = 'Maria Joaquina';
// const element = <h1>Olá, {name}</h1>;


//2° - Expressão;
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Creuza',
//   lastName: ''
// };

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element = (
//   <h1>
//     {getGreeting(user)}
//   </h1>
// );

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Function relogio - Modelo de renderização de Elementos
// const element = <h1>Olá, Mundão</h1>;

// function tick() {
//   const element = (
//     <div>
//       <h1>Olá, Kaylane!</h1>
//       <h2>Horário {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// Modelo de função renderizada e encapsulada 
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//RENDERIZANDO COMPONENTES


// Comopnente de Função
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// Comopnentes de classe ES6
// class Welcome extends React.Component {
  
// render() {
//    return <h1>Hello, {this.props.name}</h1>;
//   }
// }


// const element = <Comment avatarUrl= 'https://avatars.githubusercontent.com/u/90467046?s=40&v=4'
// name= 'Stephanie Paiva'
// text= 'lorem ipsum dolor set amment'
// date= '2001-06-30'/>;


