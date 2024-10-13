import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserForm.css'; // Import CSS

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('photo', photo); // Photo file object, not URL

    // Send POST request to the backend API
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: formData, // Send FormData with the request
      });

      if (!response.ok) {
        throw new Error('Error creating user');
      }

      // Redirect to /users if the request was successful
      navigate('/users');
    } catch (error) {
      console.error('Error:', error);
    }
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
            onChange={(e) => setPhoto(e.target.files[0])} // Directly set file object
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
