import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UserFunction() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchUsers();
      }, []);

  return (
    <div className='wrap'>
         {users.map((user, index) => (
        <div className="user-carrd" key={index}>
          <p className="user-name">Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      
    </div>
  )
}

export default UserFunction
