import './DropdownMenu.scss'

function DropdownMenu( {options, value, onChange} ) {
    return (
        <div className='dropdown-container'>
            <select
                className='dropdown-container__dropdown'
                name='category'
                id='category'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value='' disabled hidden>Select Category</option>
                {options.map((category, index) => {
                    return (
                        <option key={index} value={category}>{category}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DropdownMenu;