import React, { useEffect } from 'react'
import './App.css';
import { Button } from "react-bootstrap"
import { Routes, Route, Link } from 'react-router-dom';
import UserCard from './Components/UserCard';
import AddUser from './Components/AddUser';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './JS/actions/actionUser';
import EditUser from './Components/EditUser';

function App() {

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <Link to='/Users_List'>
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to='/Add_user' >
        <Button variant="primary button">Add User</Button>
      </Link>

      <Routes>
        <Route path='/Users_List' element={<div className="contact-list">
          {users.map(el => <UserCard user={el} key={el._id} />)}
        </div>} />
        <Route path='/Add_user' element={<AddUser />} />
        <Route path='/Edit_user' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
