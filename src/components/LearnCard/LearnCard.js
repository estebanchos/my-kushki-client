import './LearnCard.scss'

function LearnCard({index, title, description}) {
    return ( 
        <article className={`topic-card topic-card--${index}`}>
            <h4 className='topic-card__title'>{title}</h4>
            <p className='topic-card__description'>{description}</p>
        </article>
     );
}

export default LearnCard;