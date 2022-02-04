import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

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
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Creuza',
  lastName: 'Raimundo'
};

const element = (
  <h1>
    Olá, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);