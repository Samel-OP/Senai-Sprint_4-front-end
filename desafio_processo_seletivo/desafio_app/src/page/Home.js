import './Home.css';
import { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRepository: []
    };
  };

  limparCampos = () => {
    this.setState({
      titulo: '',
      idTipoEventoAlterado: 0
    })
    console.log('Os states foram resetados!')
  };

  buscarListRepository = () => {
    console.log("Agora vamos fazer a chamada para a API")
    var inputR = document.getElementById("inputId")

    console.log(inputR.value)
    fetch(`https://api.github.com/users/${inputR.value}/repos?per_page=10&sort=author-date-desc`)
      .then(resposta => resposta.json())
      .then(dados => this.setState({ listaRepository: dados }))
      .catch(erro => console.log(erro))
  }

  /* JSX */
  render() {
    return (
      <div>
        <main>
          <section>
            <input id="inputId" type="text" placeholder="Escreva aqui o nome do usuário" />
            <button onClick={this.buscarListRepository}>Buscar</button>
            <h2>Lista de repositórios</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome do repositório</th>
                  <th>Descrição</th>
                  <th>Criado em</th>
                  <th>Tamanho do repositório</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.listaRepository.map((repository) => {
                    return (
                      <tr key={repository.id}>
                        <td>{repository.id}</td>
                        <td>{repository.name}</td>
                        <td>{repository.description}</td>
                        <td>{repository.created_at}</td>
                        <td>{repository.size} Kb</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )
  }
}

export default Home;
