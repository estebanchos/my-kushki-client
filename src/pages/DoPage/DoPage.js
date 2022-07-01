import { useState } from 'react';
import './DoPage.scss';

function DoPage({ isAuth }) {
    
    // const [isAuth, setIsAuth] = useState(false)

    const token = sessionStorage.getItem('token')
    // if (token) setIsAuth(true)
    
    if (!isAuth) {
        return <div>Sign in please</div>
    }
    return ( 
        <div>DoPage</div>
     );
}

export default DoPage;