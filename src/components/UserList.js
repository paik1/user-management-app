import React from 'react';
import '../styles/UserList.css';  // Import CSS

const UserList = ({ users }) => {
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
