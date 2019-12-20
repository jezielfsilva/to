import React from 'react';

class PageSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    nome: '',
                    email: '',
                    senha: ''
                }
            ]
        }
    }

    

    render () {
        return (
            <div className='box-login'>
                <form>
                    <label>escreva seu nome:
                        <input className="name" type="text" placeholder="seu nome aqui" />
                    </label>
                    <label>escreva seu e-mail:
                        <input type="email" placeholder="seu email aqui" />
                    </label>
                    <label>criar uma senha:
                        <input type="password" placeholder="sua senha aqui" />
                    </label>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default PageSignup;