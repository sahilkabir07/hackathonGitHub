import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/baseUrl';

const InterFaceData = () => {
    const [users, setUsers] = useState([]);
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN




    useEffect(() => {
        fetch(`${BASE_URL}/users`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        })
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className='container flex flex-wrap mx-auto justify-center item-center'>
            {users.map((user) => (
                <div key={user.id} className="p-4  items-center justify-center flex-col  m-2 shadow-md  min-w-64">
                    <img src={user.avatar_url} alt={user.login} width={50} className="rounded-full" />
                    <p>{user.login}</p>
                </div>
            ))}
        </div>
    );
};

export default InterFaceData;
