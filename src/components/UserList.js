import React, { useEffect, useState } from 'react';
import '../styles/UserList.css'; // Import CSS

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Set the user data from the API
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  // If there's an error, display it
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // If data is still loading, display a loading message
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.photo && <img src={user.photo} alt={`${user.name}'s photo`} />}
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
