import './InvalidInput.scss'
import errorIcon from '../../assets/icons/error.svg';

function InvalidInput({isValid, message}) {
    return ( 
        <div className={isValid ? 'error-message--hidden' : 'error-message'}>
            <img className='error-message__icon' src={errorIcon} alt='' />
            <p className='error-message__message'>{message}</p>
        </div>
     );
}

export default InvalidInput;