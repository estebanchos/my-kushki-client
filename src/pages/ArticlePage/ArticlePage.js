import './ArticlePage.scss';
import { articlesContentLibrary } from '../../assets/staticdata/articlesContent';
import { useEffect, useState } from 'react';
import { budgetBasics } from '../../assets/staticdata/articlesBasics';

function ArticlePage(props) {
    const id = props.match.params.articleId
    const [articleContent, setArticleContent] = useState(null)
    let articleFound

    useEffect(() => {
        articleFound = articlesContentLibrary.find(article => article.id === id)
        if (articleFound) setArticleContent(articleFound)
    }, [])

    if (!articleContent) {
        return <></>
    }

    return (
        <div className='ap-container'>
            <main className='ap-main'>
                <h1 className='ap-main__title'>{articleContent.title}</h1>
                <div className='ap-main__container'>
                    <p className='ap-main__intro'>{articleContent.intro}</p>
                    <h2 className='ap-main__subtitle'>{articleContent.subheader}</h2>
                    <p className='ap-main__copy'>{articleContent.copy}</p>
                </div>
            </main>
            <aside className='ap-aside'>
                <h3 className='ap-aside__title'>Recommended Articles</h3>
                {budgetBasics.map((article, index) => {
                    return (
                        <article key={index} className='ap-aside__card aside-card'>
                            <a
                                className='aside-card__link'
                                href={article.url}
                                target='_blank'
                            >
                                <h3 className='aside-card__title'>{article.title}</h3>
                                <div className='aside-card__img-container'>
                                    <img
                                        className='aside-card__image'
                                        src={article.logo}
                                        alt={`logo of ${article.source}`}
                                    />
                                </div>
                            </a>
                        </article>
                    )
                })}

            </aside>
        </div>
    );
}

export default ArticlePage;