import './Intro.scss'

function Intro({ title, copy, nextSteps }) {
    return (
        <div className='intro'>
            <h2 className='intro__title'>{title}</h2>
            <p className='intro__copy'>{copy}</p>
            {!nextSteps
                ? ''
                : <p className='intro__next-steps'>{nextSteps}</p>
            }
        </div>
    );
}

export default Intro;