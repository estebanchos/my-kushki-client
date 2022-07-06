import './ArticlePage.scss';
import { articlesContentLibrary } from '../../assets/staticdata/articlesContent';
import { budgetBasics } from '../../assets/staticdata/articlesBasics';

function ArticlePage(props) {
    const id = props.match.params.articleId
    let articleFound = articlesContentLibrary.find(article => article.id === id) || articlesContentLibrary[0]

    //  ### TODO - structure for when we populate the article dynamically
    // const [articleContent, setArticleContent] = useState(null)
    // useEffect(() => {
    //     if (articleFound) setArticleContent(articleFound)
    // }, [])
    // if (!articleContent) {
    //     return <></>
    // }

    return (
        <div className='ap-container'>
            <main className='ap-main'>
                <h1 className='ap-main__title'>{articleFound.title}</h1>
                <div className='ap-main__container'>
                    {articleFound.intro.split('\n').map(paragraph => {
                        return <p className='ap-main__intro'>{paragraph}</p>
                    })}
                    <h2 className='ap-main__subtitle'>{articleFound.subheader}</h2>
                    {articleFound.copy.split('\n').map(paragraph => {
                        return <p className='ap-main__copy'>{paragraph}</p>
                    })}
                </div>
            </main>
            <aside className='ap-aside'>
                <h3 className='ap-aside__title'>Recommended Articles</h3>
                {budgetBasics.map((article, index) => {
                    return (
                        <article key={index} className={`ap-aside__card aside-card card-color-${index}`}>
                            <a
                                className='aside-card__link'
                                href={article.url}
                                target='_blank'
                                rel="noopener noreferrer"
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