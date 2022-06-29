import './ContactPage.scss';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import { apiUrl, devUrl } from '../../utils/api';

const socket = io.connect(apiUrl+':8081')

function ContactPage() {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    // const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            socket.emit('join_room', room)
            // setShowChat(true)
        }
    }

    return (
        <>
            <h3>Join Chat</h3>
            <input placeholder='John...' onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='Room ID...' onChange={(e) => setRoom(e.target.value)} />
            <button onClick={joinRoom}>Join Now</button>
            <Chat socket={socket} username={username} room={room} />
        </>
    );
}

export default ContactPage;