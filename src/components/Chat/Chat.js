//  ### for implementing if enough extra time

// import './Chat.scss';
// import { useEffect, useState } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
// // import { apiUrl } from '../../utils/api';

// // '/contactus/chat' 

// function Chat({ socket, room, name }) {
//     const [currentMessage, setCurrentMessage] = useState('')
//     const [messageList, setMessageList] = useState([])

//     const sendMessage = async () => {
//         if (currentMessage !== '') {
//             const messageData = {
//                 room: room,
//                 author: name,
//                 message: currentMessage,
//             }

//            await socket.emit('send_message', messageData)
//             setMessageList((list) => [...list, messageData]);
//             setCurrentMessage('')
//         }
//     }

//     useEffect(() => {
//         socket.on('receive_message', (data) => {
//             console.log(data)
//             setMessageList((list) => [...list, data]);
//         });
//     }, [socket]);

//     return (
//         <div className={`chat`}>
//             <div className='chat__header'>
//                 <p className='chat__header-title'>Live Chat</p>
//             </div>
//             <div className='chat__body'>
//                 <ScrollToBottom className='chat__container'>
//                     {messageList.map((message, index) => {
//                         return (
//                             <div
//                                 key={index}
//                                 className={`chat__message ${message.author === name ? 'chat__message--me' : 'chat__message--other'}`}
//                             >
//                                 <div className={`message ${message.author === name ? 'message--me' : 'message--other'}`}>
//                                     <div className={`message__content ${message.author === name ? '' : 'message__content--other'}`}>
//                                         <p className={`message__text`}>
//                                             {message.message}
//                                         </p>
//                                     </div>
//                                     <div className='message__meta'>
//                                         <p className={`message__time ${message.author === name ? '' : 'message__time--other'}`}>
//                                             {message.time}
//                                         </p>
//                                         <p className={`message__author ${message.author === name ? '' : 'message_author--other'}`}>
//                                             {message.author === name ? 'Me' : message.author}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </ScrollToBottom>
//             </div >
//             <div className='chat__footer'>
//                 <input
//                     className='chat__input'
//                     value={currentMessage}
//                     placeholder='Enter message...'
//                     onChange={(e) => setCurrentMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
//                 />
//                 <button onClick={sendMessage}>&#9658;</button>
//             </div>
//         </div >
//     );
// }

// export default Chat;