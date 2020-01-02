import React from 'react';

class PageLoggin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: null,
        }
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
            <div>
                <form>
                    <label>email:
                        <input onChange={this.getemail} type="email" placeholder="seu email" />
                    </label>
                    <p>{this.state.email}</p>
                    <label>senha:
                        <input onChange={this.getpassword} type="password" placeholder="sua senha" />
                    </label>
                    <p>{this.state.senha}</p>
                    <button>login</button>
                </form>
            </div>
        )
    }
}

export default PageLoggin;