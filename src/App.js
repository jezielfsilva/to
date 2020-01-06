import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageSignup from './components/createAccount';
import PageLoggin from './components/loggin';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        telaRenderizada: <PageSignup
       backLogin = {this.changeScreen} />
    }
}

changeScreen = (event) => {
  event.preventDefault()
  this.setState ({
    telaRenderizada: <PageLoggin
    backCreateAcc = {this.mudarScreen} />
  })
}

mudarScreen = (event) => {
  event.preventDefault()
  this.setState ({
    telaRenderizada: <PageSignup
    backLogin = {this.changeScreen} />
  })
}

  render () {

    return (
      <div className="App">
        {/* <PageSignup */}
        {/* backLogin = {this.changeScreen}/> */}
        {/* <PageLoggin */}
        {/* backCreateAcc = {this.mudarScreen}/> */}
        {this.state.telaRenderizada}
      </div>
    );
  }
}

export default App;
