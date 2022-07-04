import './MenuOption.scss';

function MenuOption({ title, copy, startNew, cta }) {

    return (
        <article className='menu-option'>
            <div className='menu-option__container'>
                <h2 className='menu-option__title'>{title}</h2>
                <p className='menu-option__copy'>{copy}</p>
                <div className='menu-option__actions'>
                    <button
                        className={`menu-option__button-new`}
                        onClick={startNew}
                    >{cta}</button>
                </div>
            </div>
        </article>
    );
}

export default MenuOption;