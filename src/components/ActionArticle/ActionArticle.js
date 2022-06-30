import { Link } from 'react-router-dom';
import './ActionArticle.scss';

function ActionArticle({ title, copy, link, cta }) {
    return ( 
        <article className='action-article'>
            <h3 className='action-article__title'>{title}</h3>
            <p className='action-article__copy'>{copy}</p>
            <div className='action-article__container'>
                <Link className='action-article__link' to={link}>{cta}</Link>
            </div>
        </article>
     );
}

export default ActionArticle;