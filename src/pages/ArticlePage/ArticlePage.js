import './ArticlePage.scss';
import { articlesContentInfo } from '../../assets/staticdata/articlesContent';

function ArticlePage(props) {
    const id = props.match.params.articleId
    return ( 
        <div>
            Article Page
        </div>
     );
}

export default ArticlePage;