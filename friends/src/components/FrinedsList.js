import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friends from './Friends'
import AddFriends from './AddFriends';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data);
            console.log(res.data)
        })
        .catch(err => console.log(err.response))
    }
    
    return (
        <div className="list">
            <AddFriends  friends={friends} setFriends={setFriends}/>
            {/* <Friends friends={friends}/> */}
            {friends.map(item => <Friends key={item.name} item={item}/>)}
            <button onClick={getData}>See New Friend Now</button> 
        </div>
    ) }

export default FriendsList;