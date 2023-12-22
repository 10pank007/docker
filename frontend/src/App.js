import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            <h1>React from Docker!!!</h1>
            {users.map(value => <div key={value.id}>{value.name}</div>)}
        </div>
    );
};

export {App};