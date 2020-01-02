import React from 'react';

class PageSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: null,
        }
    }

    getname = (event) => {
        this.setState({
            nome: event.target.value,
        })
    }

    getemail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    getpassword = (event) => {
        this.setState({
            senha: event.target.value,
        })
    }

    render () {
        return (
            <div className='box-login'>
                <form>
                    <label>nome:
                        <input onChange={this.getname} type="text" placeholder="seu nome aqui" />
                    </label>
                    <p>{this.state.nome}</p>
                    <label>email:
                        <input onChange={this.getemail} type="email" placeholder="seu email aqui" />
                    </label>
                    <p>{this.state.email}</p>
                    <label>senha:
                        <input onChange={this.getpassword} type="password" placeholder="sua senha aqui" />
                    </label>
                    <p>{this.state.senha}</p>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default PageSignup;