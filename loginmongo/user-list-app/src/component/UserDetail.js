import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UserDetail({ activeUserId }) {

    const [userDetail, setuserDetail] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
            .then(res => setuserDetail(res.data))
            .finally(setLoading(false))
    }, [activeUserId])
    return (
        <div>
            <h1>Detaylar</h1>


            {loading && <div>Yükleniyor... </div>}

            {
                !loading && <pre>{JSON.stringify(userDetail, null, 2)}</pre>
            }

        </div>
    )
}

export default UserDetail