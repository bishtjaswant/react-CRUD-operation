import React from 'react';
import './UserList.css';


const UserList = props => {
    const {users,removeuserfromlist,turnOnEditMode}=props;

    return (
        <>
            <table>
            <thead>

          
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>action</th>
                </tr>
                
                  </thead>
                <tbody>

                { users.length>0  ?
                   users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td className="actions">
                            <button onClick={(e)=>turnOnEditMode(user)} className="btn btn-edit">edit</button>
                            <button onClick={(e)=>removeuserfromlist(user.id)} className="btn btn-delete">delete</button>
                        </td>
                    </tr>
                   ))
                  :
                    <tr >
                        <td corspan={3}>no users</td>
                    </tr>
                
                }
                   
                </tbody>
            </table>
        </>
    );
};

export default UserList;