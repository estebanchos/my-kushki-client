import './MenuOption.scss';

function MenuOption({ title, copy, enableOpen, enableNew, startNew, openExisting }) {

    return (
        <article className='menu-option'>
            <div className='menu-option__container'>
                <h2 className='menu-option__title'>{title}</h2>
                <p className='menu-option__copy'>{copy}</p>
                <div className='menu-option__actions'>
                    <button
                        className={`menu-option__button-open ${enableOpen ? '' : 'button-disabled'}`}
                        onClick={openExisting}
                    >Open</button>
                    <button
                        className={`menu-option__button-new  ${enableNew ? '' : 'button-disabled'}`}
                        onClick={startNew}
                    >Start New</button>
                </div>
            </div>
        </article>
    );
}

export default MenuOption;