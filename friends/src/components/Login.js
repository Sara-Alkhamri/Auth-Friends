import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            crednetials: {
                username: '',
                password: '',
            }
        }
    }
    handelChange = e => {
        this.setState({
            crednetials: {
                ...this.state.crednetials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.crednetials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <h2>Hello Friends!</h2>
                <form onSubmit={this.login}>
                <input 
                type='text'
                name="username"
                value={this.state.crednetials.name}
                onChange={this.handelChange}
                />
                <input 
                type="text"
                name="password"
                value={this.state.crednetials.password}
                onChange={this.handelChange}
                />
                <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;