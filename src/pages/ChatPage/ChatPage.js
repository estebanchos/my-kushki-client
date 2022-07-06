import { useEffect, useState } from 'react';
import Chat from '../../components/Chat/Chat';
import Login from '../../components/LogIn/Login';
import './ChatPage.scss';
import io from 'socket.io-client';
import { apiUrl } from '../../utils/api';
import axios from 'axios';

const socket = io.connect(apiUrl)

function ChatPage({ isAuth, userLoggedIn }) {
    const [showChat, setShowChat] = useState(false)
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const joinRoom = (e) => {
        setShowChat(true)
    }

    useEffect(() => {
        let authorizedToken = sessionStorage.getItem('token')
        if (authorizedToken) {
            setRoom('kushki')
            const authHeader = { Authorization: 'Bearer ' + authorizedToken }
            axios.get(apiUrl + '/users/userInfo', { headers: authHeader })
                .then(res => {
                    let name = res.data
                    setName(res.data)
                    socket.emit('join', room)
                })
                .catch(err => console.error(err))
        }
    }, [])

    if (!isAuth) {
        return (
            <div className='main-unauth-dp'>
                <div className='main-unauth-dp__container'>
                    <h1 className='main-unauth-dp__title'>Chat with us</h1>
                    <span className='main-unauth-dp__copy'>Please sign in to chat with us</span>
                </div>
                <Login userLoggedIn={userLoggedIn} link='/contactus' />
            </div>
        )
    }

    return (
        <main className='main-chat'>
            <h1 className='main-chat__title'>Chat with us</h1>
            <div className={!showChat ? 'main-chat__join-container' : 'main-chat__join-container--hidden'}>
                <button
                    className='main-chat__join-button'
                    onClick={joinRoom}
                >
                    Join now
                </button>
            </div>
            <div className={!showChat ? 'main-chat__placeholder' : 'main-chat__placeholder--hidden'}></div>
            <div className={showChat ? 'main-chat__messages-container' : 'main-chat__messages-container--hidden'}>
                <Chat socket={socket} room={room} name={name} />
            </div>
        </main>
    );
}

export default ChatPage;