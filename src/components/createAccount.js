import React from 'react';

class PageSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
            senha2: '',

            modOpen: false,
        }
    }

    userData = (event) => {
        event.preventDefault()
        // this.setState({
            // nome: document.getElementById('Nome').value,
            // email: document.getElementById('Email').value,
            // senha: document.getElementById('Senha').value,
            // senha2: document.getElementById('Senha2').value,
        // })
        // this.props.AccountData(document.getElementById('Email').value, document.getElementById('Senha').value)

        if (document.getElementById('Senha').value === document.getElementById('Senha2').value) {
            this.props.AccountData(this.state.nome, this.state.email, this.state.senha);
            this.setState({
                modOpen: true,
            });  
        }
        else {
            this.setState({erro: 'confirmação de senha incorreta!!'});
        }
    }

    renderModal = () => (
        <div className='overlay' onClick={() => this.setState({modOpen: false})}>
            <div className="box-modal">
                <p>Conta criada com sucesso</p>
                <button onClick={() => this.props.changeScreen('loggin')}>Fazer login
                </button>
            </div>
        </div>
    )

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
                    <p className='text-error'>{this.state.erro}</p>
                    <p className='text'>Se você já possui uma conta faça <a onClick={this.props.backLogin} href='*' >login.</a></p>
                </form>
                {this.state.modOpen ? this.renderModal() : null}
            </div>
        )
    }
}

export default PageSignup;