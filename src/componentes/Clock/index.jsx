import React from "react";

// Exemplo utilizando função
// function Clock(props) {
//     return (
//       <div>
//         <h1>Olá, Teste Clock com função!</h1>
//         <h2>Horário {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }

//1. Criando um classe e estendendo React.component 
class Clock extends React.Component {
  // Foi adicionado um construtor que atribui a data inicial do state e por isso componentes de classes
  // devem sempre chamar o construtor com props.
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM.
  // Dentro dele, o componente Clock pede ao navegador para configurar um temporizador para chamar o 
  // método tick() do componente uma vez por segundo.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Vamos derrubar o temporizador no método do ciclo de vida componentWillUnmount()
  // Para que o temporizador seja interrompido.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Ele usará this.setState() para agendar atualizações para o estado local do componente
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 2. Adicionar um único método vazio chamado render()
  render() {

    // 3. Mova o corpo da função para o método render()
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        {/* 4. Substitua props por this.props no corpo de render().*/}
        {/* Foi realizada a Troca do this.props.date para this.state.date e dessa forma adicionamos o estado */}
        <h2>Hora {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;