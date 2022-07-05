import './ContactPage.scss';
import { useState } from 'react';
import Chat from '../../components/Chat/Chat';
import { Tooltip } from 'antd';
import 'antd/dist/antd.min.css';


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

    return (
        <>
            <main className='contactus'>
                <h1 className='contactus__title'>Contact Us</h1>
                <span className='contactus__intro'>If you're interested in building your financial health, we recommend checking out our Learning page.</span>
                <div className='contactus__actions-container'>
                    <article className='contactus__action'>
                        <p className='contactus__email-text'>If you have any recommendation or thoughts that would help us improve, let us know by sending us an email.</p>
                        <a className="contactus__link" href="mailto:charlie@carlosocampo.ca">Send us an email</a>
                    </article>
                    <article className='contactus__action'>
                        <p className='contactus__chat-text'>If you're done learning and have more questions, shoot us a message.</p>
                        {!isAuth
                            ? <Tooltip title='To chat with us you must be logged in'>
                                <span className='contactus__disabled-button'>Chat with us</span>
                            </Tooltip>
                            : <button className='contactus__button'>Chat with us</button>
                        }
                    </article>
                </div>
            </main>
            {/* <h3>Join Chat</h3>
            <form onSubmit={joinRoom}>
                <input type='text' name='username' placeholder='Name' value={username} onChange={handleUsernameChange} />
                <input type='text' name='room' placeholder='Room' value={room} onChange={handleRoomChange} />
                <button
                    disabled={(!username || !room) ? true : false}
                    type='submit'>
                    Join Now
                </button>
            </form>
            <Chat showChat={showChat} username={username} room={room} /> */}
        </>
    );
}

export default ContactPage;