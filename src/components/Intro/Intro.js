import './Intro.scss'

function Intro({ title, copy }) {
    return ( 
        <div className='intro'>
            <h2 className='intro__title'>{title}</h2>
            <p className='intro__copy'>{copy}</p>
        </div>
     );
}

export default Intro;