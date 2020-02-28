import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      
      const getUsers = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        setUsers(users);
      };

    getUsers();
  }, []);

  return users.map(user => {
    return (
      <div key={user.id} className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.className}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <Link to={`/${user.id}/details`} className="card-link">Learn More</Link>
        </div>
      </div>
    );
  });
}
