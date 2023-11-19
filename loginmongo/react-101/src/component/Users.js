import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const {data : users} =await axios ("https://jsonplaceholder.typicode.com/users")
                const {data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
                setLoading(false)
                setUsers(users);
                setPosts(posts)
            } catch (error) {
                console.log("Error", error)
            }
        }) ()
        /*axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
                .then(
                    (res) => {setPosts(res.data)}
                )
            })
            .catch((error) =>{
                console.log("Error" , error)
            })
            .finally(() => setLoading(false))*/
            //getData()
    }, [])
    /*const getData = async () => {
        try {
            const {data : users} =await axios ("https://jsonplaceholder.typicode.com/users")
            const {data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
            setLoading(false)
            setUsers(users);
            setPosts(posts)
        } catch (error) {
            console.log("Error", error)
        }
    }*/
    return (
        <div>
            <h1>users</h1>

            <ul>
                {loading && <div>Yükleniyorr...</div>}
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>

        </div>
    )
}

export default Users