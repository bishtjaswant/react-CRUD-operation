import React from 'react';
import { useState } from 'react';
import './AddUser.css';


const AddUser = (props) => {

    let initialState = { id: null, name: '', username: '' };
    const [form, setForm] = useState(initialState);


    let initialUpddateFormState = { id: null, name: '', username: '' };
    const [updateForm, setUpdateForm] = useState(initialUpddateFormState);


    const onSubmit = (e) => {
        e.preventDefault()
        if (form.name == '', form.username == '') {
            return false
        }
        props.addusertolist(form);
        setForm(initialState)
    }

    const onChange = (e) => {
        console.log('new handler', e.target.name);

        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }


    const onChangeHandler = (e) => {
        setUpdateForm(
            {
                ...updateForm,
                name: e.target.newUpdateName,
                username: e.target.newUpdateUsername
            });

    }

    const updateHandler = (e) => {
        e.preventDefault()
        props.updateUser(props.userSelectedData.id, form);
        props.cancelUpdate()
    }


    return (   
        <> 
        
           {
               props.editing   ?
               <form onSubmit={updateHandler } className="frm">
                <input type="text"  value={ props.userSelectedData.name} onChange={ onChangeHandler } placeholder='input name' name="newUpdateName" id="" />
                <input type="text"  value={props.userSelectedData.username} onChange={onChangeHandler} placeholder='input username' name="newUpdateUsername" id="" />
                <input type="submit"  value="Update user"/>
                <input type="button" onClick={()=>props.cancelUpdate()} value="cancel"/>
                
            </form>
               :
               <form onSubmit={  onSubmit} className="frm">
                <input type="text"  value={form.name} onChange={onChange} placeholder='input name' name="name" id="" />
                <input type="text"  value={form.username} onChange={onChange} placeholder='input username' name="username" id="" />
                <input type="submit"  value="Add user"/>
            </form>
           }
        </>
    );



};

export default AddUser;