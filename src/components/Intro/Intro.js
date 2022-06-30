import './Intro.scss'

function Intro({ title, copy }) {
    return ( 
        <div className='intro'>
            <h3 className='intro__title'>{title}</h3>
            <p className='intro__copy'>{copy}</p>
        </div>
     );
}

export default Intro;