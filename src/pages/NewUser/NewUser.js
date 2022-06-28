import './NewUser.scss';
import axios from 'axios';
import { useState } from 'react';
import { apiUrl } from '../../utils/api'

function NewUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        const newUser = {
            name,
            email,
            password
        }
        axios.post(`${apiUrl}/users/newUser`, newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <h1>Register</h1>
            <div>
                <input placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                <input placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={createUser}>Register</button>
            </div>
        </>
    );
}

export default NewUser;