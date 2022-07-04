import './Intro.scss'

function Intro({ title, copy, nextSteps, introImg }) {
    return (
        <div className='intro'>
            {!introImg
                ? ''
                : <img className='intro__image' src={introImg} alt='money plant' />
            }
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