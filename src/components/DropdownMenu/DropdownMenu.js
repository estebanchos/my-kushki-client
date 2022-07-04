import './DropdownMenu.scss'

function DropdownMenu( {options, value, onChange, expenseClassName} ) {
    return (
        <div className='dropdown-container'>
            <select
                className={`${!expenseClassName ? 'dropdown-container__dropdown' : 'dropdown-container__dropdown' + expenseClassName}`}
                name='category'
                id='category'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value='' disabled hidden>Select Category</option>
                {options.map((category, index) => {
                    return (
                        <option className='dropdown-container__option' key={index} value={category}>{category}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DropdownMenu;