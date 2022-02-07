import React from 'react';

//Componente de função
function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

function App() {

  //Renderizando componente
  return (
    <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
    </div>
  );
}

export default App;
