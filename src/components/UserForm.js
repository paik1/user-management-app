import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserForm.css';  // Import CSS

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, photo };
    addUser(newUser);
    navigate('/users');
  };

  return (
    <div className="user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Photo:
          <input
            type="file"
            onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
