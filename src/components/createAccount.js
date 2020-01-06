import React from 'react';

class PageSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
        }
    }
    
    userData = (event) => {
        event.preventDefault()
        this.setState ({
            nome: document.getElementById('Nome').value,
            email: document.getElementById('Email').value,
            senha: document.getElementById('Senha').value
    })
    console.log(this.state.nome)
    }

    render () {
        return (
            <div className='box-login'>
                <form onSubmit={this.userData}>
                    <label>nome:
                        <input id = "Nome" type="text" placeholder="seu nome aqui" />
                    </label>
                    <label>email:
                        <input id = "Email" type="email" placeholder="seu email aqui" />
                    </label>
                    <label>senha:
                        <input id = "Senha" type="password" placeholder="sua senha aqui" />
                    </label>
                    <label>confirme sua senha:
                        <input type="password" placeholder="sua senha aqui" />
                    </label>
                    <button>Signup</button>
                </form>
                <p>Se você já possui uma conta faça <a onClick={this.props.backLogin} href='*' >login</a></p>
            </div>
        )
    }
}

export default PageSignup;