import './NewUser.scss';
import axios from 'axios';
import { useState } from 'react';
import { apiUrl, devUrl } from '../../utils/api'
import { Link } from 'react-router-dom';
import InvalidInput from '../InvalidInput/InvalidInput';
import hideIcon from '../../assets/icons/hide.svg'
import showIcon from '../../assets/icons/show.svg'

function NewUser(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isValidName, setValidName] = useState(true)
    const [isValidEmail, setValidEmail] = useState(true)
    const [isValidPassword, setValidPassword] = useState(true)
    const [isRegistered, setRegistered] = useState(false)

    const handleSubmit = () => {
        if (isSignupValid()) {
            const newUser = {
                name,
                email,
                password
            }
            axios.post(`${devUrl}/users/newUser`, newUser)
                .then(res => {
                    setName('')
                    setEmail('')
                    setPassword('')
                    setRegistered(res.data.successSignUp)
                    setTimeout(() => redirectToLogin(), 2000)
                })
                .catch(err => console.error(err))
        }
    }

    const redirectToLogin = () => props.history.push('/login')

    const isSignupValid = () => {
        let isValid = true
        if (name.length < 3) {
            setValidName(false)
            isValid = false
        } else {
            setValidName(true)
        }

        if (!emailIsValid(email)) {
            setValidEmail(false)
            isValid = false
        } else {
            setValidEmail(true)
        }

        if (password.length < 5) {
            setValidPassword(false)
            isValid = false
        } else {
            setValidPassword(true)
        }
        return isValid
    }

    const emailIsValid = (input) => {
        const mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (mailformat.test(input)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <main className='register'>
            <h1 className='register__title'>Get Started</h1>
            <p className='register__copy'>Signing up gives you access to our tools and chat.</p>
            <div className='register__container'>
                <input
                    className='register__input'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InvalidInput isValid={isValidName} message='Name must have at least 3 characters' />
                <input
                    className='register__input'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InvalidInput isValid={isValidEmail} message='Please enter a valid email' />
                <input
                    className='register__input'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='show-password'>
                    <img
                        className={`show-password__icon${!showPassword ? '--active' : '--hide'}`}
                        src={showIcon}
                        alt='show password icon'
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    <img
                        className={`show-password__icon${showPassword ? '--active' : '--hide'}`}
                        src={hideIcon}
                        alt='hide password icon'
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <InvalidInput isValid={isValidPassword} message='Password must have at least 5 characters' />
                <p className={`success-message${isRegistered ? '--active' : '--hidden'}`}>Successful Sign Up! Redirecting to login!</p>
                <button
                    className='register__button'
                    onClick={handleSubmit}>
                    Sign Up
                </button>
            </div>
            <div className='login-redirect'>
                <p className='login-redirect__copy'>Already have an account?</p>
                <Link className='login-redirect__link' to='/login'>Sign In</Link>
            </div>
        </main>
    );
}

export default NewUser;