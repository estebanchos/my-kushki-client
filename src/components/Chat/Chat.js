import './Chat.scss';
import { useEffect, useState } from 'react';
import { currentTime } from '../../utils/date'
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';

// const ENDPOINT = 'localhost:8080'
// const socket = io.connect(ENDPOINT)

function Chat({ showChat, username, room }) {
    const [currentMessage, setCurrentMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    // const sendMessage = () => {
    //     if (currentMessage !== '') {
    //         const data = {
    //             room: room,
    //             author: username,
    //             message: currentMessage,
    //             time: currentTime()
    //         }
    //         socket.emit('send_message', data)
    //         setCurrentMessage('')
    //         setMessageList([...messageList, data])
    //     }
    // }

    // useEffect(() => {
    //     socket.on('receive_message', (data) => {
    //         setMessageList([...messageList, data])
    //     })
    // },[socket, messageList])

    // useEffect(() => {
    //     socket.on('join', {username, room})
    // }, [])

    return (
        <div className={`chat${showChat ? '' : '--hidden'}`}>
            <div className='chat__header'>
                <p className='chat__header-title'>Live Chat</p>
            </div>
            <div className='chat__body'>
                <ScrollToBottom className='chat__container'>
                    {messageList.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={`chat__message ${message.author === username ? 'chat__message--me' : 'chat__message--other'}`}
                            >
                                <div className={`message ${message.author === username ? 'message--me' : 'message--other'}`}>
                                    <div className={`message__content ${message.author === username ? '' : 'message__content--other'}`}>
                                        <p
                                            className={`message__text`}
                                        >
                                            {message.message}
                                        </p>
                                    </div>
                                    <div className='message__meta'>
                                        <p
                                            className={`message__time ${message.author === username ? '' : 'message__time--other'}`}
                                        >
                                            {message.time}
                                        </p>
                                        <p
                                            className={`message__author ${message.author === username ? '' : 'message_author--other'}`}
                                        >
                                            {message.author === username ? 'Me' : message.author}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </ScrollToBottom>
            </div >
            <div className='chat__footer'>
                {/* <input
                    className='chat__input'
                    value={currentMessage}
                    placeholder='Enter message...'
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                />
                <button onClick={sendMessage}>&#9658;</button> */}
            </div>
        </div >
    );
}

export default Chat;