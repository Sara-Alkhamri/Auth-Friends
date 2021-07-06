import React from 'react';

// const Friends = props => {
//     return (
//         <>
//         {props.friends.map(friends => {
//             return (
//         <div className="card">
//             <h1>{friends.name}</h1>
//             <h3>{friends.age}</h3>
//             <h3>{friends.email}</h3>
//         </div> 
//             )
//         })}
//        </>
//     )
// }
const Friends = props => {
    const {name, age, email} = props.item;
    return (
    <div className="card">
        <h1>{name}</h1>
        <h3>{age}</h3>
        <h3>{email}</h3>
    </div> 
            
       )
}

export default Friends;