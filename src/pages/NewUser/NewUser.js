import './NewUser.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function NewUser() {
    const [usersList, setUsersList] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/getUsers')
            .then(res => {
                setUsersList(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    const createUser = () => {
        const newUser = {
            name,
            email,
            password
        }
        axios.post('http://localhost:8080/newUser', newUser)
            .then(_res => {
                setUsersList([...usersList, newUser])
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <h1>Register</h1>
            <div className='users-list'>
                {usersList.map(user => {
                    return (
                        <p key={user._id}>{user.name}, email: {user.email}</p>
                    )
                })}
            </div>

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