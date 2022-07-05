import { useState } from 'react';
import Login from '../../components/LogIn/Login';
import './ChatPage.scss';

function ChatPage({ isAuth, userLoggedIn }) {
    const [showChat, setShowChat] = useState(false)
    
    const joinRoom = (e) => {
        setShowChat(true)
    }

    if (!isAuth) {
        return (
            <div className='main-unauth-dp'>
                <div className='main-unauth-dp__container'>
                    <h1 className='main-unauth-dp__title'>Chat with us</h1>
                    <span className='main-unauth-dp__copy'>Please sign in to chat with us</span>
                </div>
                <Login userLoggedIn={userLoggedIn} />
            </div>
        )
    }

    return (
        <main className='main-chat'>
            <h1 className='main-chat__title'>Chat with us</h1>
            <div
                className={!showChat ? 'main-chat__join-container' : 'main-chat__join-container--hidden'}
            >
                <button
                    className='main-chat__join-button'
                    onClick={joinRoom}
                >
                    Join now
                </button>
            </div>
        </main>
    );
}

export default ChatPage;