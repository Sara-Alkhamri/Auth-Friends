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
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
            console.log(res.data)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div className="list">
            <AddFriends  />
            {/* <Friends friends={friends}/> */}
            {/* <button onClick={getData}>Add Friends</button>  */}
            {friends.map(item => <Friends key={item.name} item={item}/>)}
        
        </div>
    ) }

export default FriendsList;