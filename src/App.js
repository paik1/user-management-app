import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm addUser={addUser} />} />
        <Route path="/users" element={<UserList users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;
