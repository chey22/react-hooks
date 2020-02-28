import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

export default function SingleUser() {
    const [user, setUser] = useState({});
    let { id } = useParams();

    useEffect(() => {

          const getUser = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let users = await res.json();
            setUser(users);
          };
    
        getUser();
      }, [id]);

    return (
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-text">{user.phone}</p>
          <p className="card-text">{user.website}</p>
        </div>
      </div>
    )
}