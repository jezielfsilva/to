import React from 'react';

class MainPage extends React.Component {

    render () {
        return (
            <div className='box-page'>
                <header className='box-form'>
                    <form className='box-input'>
                        <input type="text" placeholder="em que você está trabalhando?"/>
                    </form>
                    <div></div>
                </header>
                <main className='page-content'></main>
            </div>
        )
    }
}

export default MainPage;