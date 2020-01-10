import React from 'react';

class PageLoggin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logText: '',
        }
    }

    userLogin = (event) => {
        event.preventDefault()
        this.props.userLogin(document.getElementById('Email').value, document.getElementById('Senha').value)
    }

    render () {
        return (
            <div className='box-login'>
                <form className='box-form2' onSubmit={this.userLogin}>
                    <label className='box-Email'>email
                        <input id = "Email" type="email" placeholder="seu email" />
                    </label>
                    <label className='box-Senha'>senha
                        <input id = "Senha" type="password" placeholder="sua senha" />
                    </label>
                    <button className='click2'>login</button>
                    <p className='text2'>{this.state.logText}</p>
                    <p className='text3'>Caso você ainda não tenha cadrastro faça agora mesmo <a onClick={this.props.backCreateAcc} href = '*'>aqui.</a></p>
                </form>
               
            </div>
        )
    }
}

export default PageLoggin;