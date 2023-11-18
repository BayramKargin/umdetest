import React, { useEffect, useState } from 'react'
//import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((data) => setUsers(data))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            <h1>users</h1>

            <ul>
                {loading && <div>Yükleniyorr...</div>}
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users