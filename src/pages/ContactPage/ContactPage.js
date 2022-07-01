import './ContactPage.scss';
import { useState } from 'react';
import Chat from '../../components/Chat/Chat';

function ContactPage({ isAuth }) {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [showChat, setShowChat] = useState(false)

    const joinRoom = (e) => {
        e.preventDefault()
        setShowChat(true)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleRoomChange = (e) => {
        setRoom(e.target.value)
    }

    if (!isAuth) {
        return <div>Sign in please</div>
    }

    return (
        <>
            <h3>Join Chat</h3>
            <form onSubmit={joinRoom}>
                <input type='text' name='username' placeholder='Name' value={username} onChange={handleUsernameChange} />
                <input type='text' name='room' placeholder='Room' value={room} onChange={handleRoomChange} />
                <button
                    disabled={(!username || !room) ? true : false}
                    type='submit'>
                    Join Now
                </button>
            </form>
            <Chat showChat={showChat} username={username} room={room} />
        </>
    );
}

export default ContactPage;