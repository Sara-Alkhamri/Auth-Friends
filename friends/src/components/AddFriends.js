import React, { useState } from 'react';
import axios from 'axios';


const AddFriends = props => {
    const [name, setName] = useState({name: '', age: '', email: ''});

    const changeHandle = e => {
        e.preventDefault();
        setName({...name, [e.target.name]: e.target.value});
    }
    const newFriends = e => {
        axios
        .post('http://localhost:5000/api/friends', name)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err => console.error(err.response));
    }
    return (
        <div>
            <form>
                <input 
                type="text"
                name="name"
                placeholder="name"
                value={name.name}
                onChange={changeHandle}
                />
                 <input 
                type="text"
                name="age"
                placeholder="age"
                value={name.age}
                onChange={changeHandle}
                />
                 <input 
                type="text"
                name="email"
                placeholder="email"
                value={name.email}
                onChange={changeHandle}
                />
                <button onClick={newFriends}>Submit</button>
            </form>
        </div>
    )
}

export default AddFriends;
