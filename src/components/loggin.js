import React from 'react';

class PageLoggin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'listadetarefas@gmail.com',
            senha: '345687',

            logText: '',
        }
    }

    userLogin = (event) => {
        event.preventDefault()
        if ((document.getElementById('Email').value === this.state.email) && 
            (document.getElementById('Senha').value === this.state.senha)) {

            }
        else {
            this.setState ({
                logText: 'email ou senha inválidos',
            })
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.userLogin}>
                    <label>email:
                        <input id = "Email" type="email" placeholder="seu email" />
                    </label>
                    <label>senha:
                        <input id = "Senha" type="password" placeholder="sua senha" />
                    </label>
                    <button>login</button>
                </form>
                <p>{this.state.logText}</p>
                <p>Caso você ainda não tenha cadrastro faça agora mesmo <a onClick={this.props.backCreateAcc} href = '*'>aqui</a></p>
            </div>
        )
    }
}

export default PageLoggin;