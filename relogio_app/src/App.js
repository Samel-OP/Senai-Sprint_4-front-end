import React from 'react';
import './App.css';


function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

// Componente de classe
// Define a classe Clock que será chamada dentro da renderização do componente App
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define a propriedade date pegando a data e hora atual
      date: new Date()
      // 1 - 19/10/2021 15:14:35
      // 2 - 19/10/2021 15:14:36
      // 3 - 19/10/2021 15:14:37
    };
  };

  // Define a função thick() que atualiza a propriedade date com a data e hora atual
  // toda vez que a função for invocada
  thick() {
    this.setState({
      date: new Date()
    })
  };

  // Pausa usando a função Pause(), e assim limpando e parando o relógio com suas atualizações constantes. E também enviando uma mensagem pelo console informando o estado do relógio (Relógio foi pausado)
  Pause(){
    this.componentWillUnmount()
    console.log(`Relógio ${this.timerID} foi pausado`);
  }

  // Retoma usando a função Resume(), e assim voltando ao normal as atualizações constantes por conta que foi invocado o thick() do Clock com setInterval. E também enviando uma mensagem pelo console informando o estado do relógio (Relógio foi retomado)
  Resume(){
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000)
    console.log('Relógio foi retomado!')
    console.log(`Agora eu sou o relógio ${this.timerID}!`);
  }

  // Ciclo de vida que ocorre quando o componente Clock é inserido na árvore DOM
  // ou seja, o ciclo de vida de montagem/nascimento
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);

    // Exibe no console o ID de cada relógio
    console.log(`Eu sou o relógio ${this.timerID}!`);
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da árvore DOM
  // ou seja, o ciclo de vida da desmontagem/morte
  // Quando isso ocorre, a função clearInterval limpa o relógio criado pela função
  // setInterval
  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  // Renderiza o conteúdo do retorno na tela
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />

        {/* Botões de pausar e retomar */}
        <div className="btnBox">
          <button className="btnParar" onClick={ () => this.Pause()}>Pausar</button>
          <button className="btnContinuar" onClick={ () => this.Resume()}>Retomar</button>
        </div>
      </div>
    )
  }

}

// Componente funcional
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
