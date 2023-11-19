import axios from 'axios'
import React, { useState, useEffect } from 'react'

function UserList({setActiveUserId}) {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .finally(setLoading(false))
    },[])

  return (
    <div>
        <h1>Kullanıcılar</h1>
        {loading && <div>Yükleniyor...</div> }
        <ul className='user-list'>
            {
                users.map((user)=>(
                  <li key={user.id} onClick={() => {setActiveUserId(user.id)}}>{user.name}</li>  
                ))
            }

        </ul>
    </div>


  )
}

export default UserList