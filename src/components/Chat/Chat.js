import { useEffect, useState } from 'react';
import './Chat.scss';
import { currentTime } from '../../utils/date'
import ScrollToBottom from 'react-scroll-to-bottom';

function Chat({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: currentTime()
            }
            await socket.emit('send_message', messageData)
            setMessageList((list) => [...list, messageData])
            setCurrentMessage('')
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <p>Live Chat</p>
            </div>
            <div className='chat__body'>
                <ScrollToBottom className='chat__container'>
                    {messageList.map((message, index) => {
                        return (
                            <div
                                key={index}
                                className={`chat__message ${message.author === username ? 'chat__message--me' : 'chat__message--other'}`}
                            >
                                <div className='message'>
                                    <div className='message__content'>
                                        <p>{message.message}</p>
                                    </div>
                                    <div className='message__meta'>
                                        <p>{message.time}</p>
                                        <p>{message.author}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </ScrollToBottom>
            </div>
            <div className='chat__footer'>
                <input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => {
                        e.key === 'Enter' && sendMessage()
                    }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Chat;