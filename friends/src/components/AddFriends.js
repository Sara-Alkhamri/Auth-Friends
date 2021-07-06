import React, { useState } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddFriends = ({friends, setFriends}) => {
    const [name, setName] = useState({name: '', age: '', email: ''});
    const handleChange = e => {
        e.preventDefault();
        setName({...name, [e.target.name]: e.target.value});
        console.log(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setFriends([...friends, name])
        // axiosWithAuth()
        // .post('http://localhost:5000/api/friends', name)
        // .then(res => {
        //     console.log(res.data)
        //     // localStorage.setItem('token', res.data.payload);
        //     // props.history.push('/protected');
        //     setName({
        //         name:'', age:'', email:''
        //     })
        // })
        // .catch(err => console.log(err.response));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>  
                <input 
                type="text"
                name="name"
                placeholder="name"
                value={name.name}
                onChange={handleChange}
                />
                 <input 
                type="text"
                name="age"
                placeholder="age"
                value={name.age}
                onChange={handleChange}
                />
                 <input 
                type="text"
                name="email"
                placeholder="email"
                value={name.email}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddFriends;
