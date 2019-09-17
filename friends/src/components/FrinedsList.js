import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friends from './Friends'
import AddFriends from './AddFriends';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div>
            <AddFriends />
      
        {friends.map(person => (
            <Friends key={person.name} friends={friends}/>
         ))}
        </div>
    ) }

export default FriendsList