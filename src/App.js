import React, { useState } from 'react';
import './App.css';
import UserList from './components/users/UserList';
import AddUser from './components/users/AddUser';





const App = () => {
    const usersData = [  { id: 1, name: 'Tania', username: 'floppydiskette' } ]
    const [users,setUsers]=useState(usersData);
    
    
    //edit mode on or off 
    const [editing,setEditing]=useState(false);
   
    const initialEditingForm={id:null,name:'',username:''};
    const [currentUser,setCurrentUser]=useState(initialEditingForm);



    // turn on edit mode whenever user click on edit btn with data
    const turnOnEditMode = (user) => {
        const {id,name,username}=user;
        setCurrentUser({id:id,name:name,username:username});        
        // turn on edit mode
        setEditing(true);
    }

    const updateUser = (id,updateUser) => {
        console.log('id',id);
        console.log('update',updateUser); 
        setEditing(false);
        setUsers(users.map((user)=>  (  user.id ==  id ? updateUser: user  )  ));
    }


    function addusertolist(data) {
        data.id=  users.length+1
        setUsers([...users,data]);
        console.log([...users,data]);
        
    }

    function removeuserfromlist(id) {
        setUsers(  users.filter( user=>( user.id !==id)   )   );
        setEditing(false);
    }

    const cancelUpdate = () => {
        setEditing(false);
    }
 
    return (
       <> 
       <h1 className="heading">react crud operation</h1>
            <div className="container">
            <div className="dashboard">
               <div className="adduser">
                   {editing?<h5>Update user</h5>:<h5>add user</h5>}
                   <AddUser updateUser={updateUser} cancelUpdate={cancelUpdate} userSelectedData={currentUser} editing={editing} addusertolist={addusertolist}/>
               </div>
               <div className="viewuser">
                   <h5>view user</h5>
                   <UserList turnOnEditMode={turnOnEditMode} removeuserfromlist={removeuserfromlist} users={users} />
               </div>
            </div>
        </div>
       </>
    );
};

export default App;