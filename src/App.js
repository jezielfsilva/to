import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageSignup from './components/createAccount';
import PageLoggin from './components/loggin';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        telaRenderizada: 'createAccount',
       userData: {
         email: '',
         senha: ''
       }
    }
}

changeScreen = (event) => {
  event.preventDefault()
  this.setState ({
    telaRenderizada: 'loggin'
  })
}

mudarScreen = (event) => {
  event.preventDefault()
  this.setState ({
    telaRenderizada: 'createAccount'
  })
}

AccountData = (email, senha) => {
  this.setState ({
    userData: {
      email: email,
      senha: senha,
    },
    telaRenderizada: 'loggin'
  })
}

userLogin = (email, senha) => {
  console.log(email, senha)
  if (email === this.state.userData.email && senha === this.state.userData.senha) {
      console.log('passei e saí correndo!!')
      }
  else {
      this.setState ({
          logText: 'email ou senha inválidos',
      })
  }
}

screenRender = () => {
  switch (this.state.telaRenderizada) {
    case 'createAccount':
      return <PageSignup backLogin = {this.changeScreen} AccountData={this.AccountData}/>;
    case 'loggin':
      return <PageLoggin backCreateAcc = {this.mudarScreen} userLogin={this.userLogin}/>;
  }
}

  render () {
    return (
      <div className="App">
        {this.screenRender()}
      </div>
    );
  }
}

export default App;
