import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
        {user.name} - {user.email} - {user.username} - {user.address.city}
        </li>
      ))}
    </ul> 
  );
};

export default UserList;
