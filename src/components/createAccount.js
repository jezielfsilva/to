import React from 'react';

class PageSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
            senha2: '',
        }
    }

    userData = (event) => {
        event.preventDefault()
        this.setState({
            nome: document.getElementById('Nome').value,
            email: document.getElementById('Email').value,
            senha: document.getElementById('Senha').value,
            senha2: document.getElementById('Senha2').value,
        })
        this.props.AccountData(document.getElementById('Email').value, document.getElementById('Senha').value)
    }

    render() {
        return (
            <div className='box-signup'>
                <form className='box-form' onSubmit={this.userData}>
                    <label className='box-Nome'>nome
                        <input id="Nome" type="text" placeholder="seu nome aqui" />
                    </label>
                    <label className='box-Email'>email
                        <input id="Email" type="email" placeholder="seu email aqui" />
                    </label>
                    <label className='box-Senha'>senha
                        <input id="Senha" type="password" placeholder="sua senha aqui" />
                    </label>
                    <label className='box-Senha2'>confirmação da senha
                        <input id="Senha2" type="password" placeholder="confirmar a senha" />
                    </label>
                    <button className='click'>Signup</button>
                    <p className='text'>Se você já possui uma conta faça <a onClick={this.props.backLogin} href='*' >login.</a></p>
                </form>
            </div>
        )
    }
}

export default PageSignup;