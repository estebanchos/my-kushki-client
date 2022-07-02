import './NewBudget.scss'
import { budgetCategories } from '../../utils/budgetCategories';
import { useState } from 'react';
import InvalidInput from '../InvalidInput/InvalidInput';
import addIcon from '../../assets/icons/add_box.svg';
import NumberFormat from 'react-number-format';
import DropdownMenu from '../DropdownMenu/DropdownMenu';


function NewBudget() {
    let categoriesList = budgetCategories
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryAmount, setCategoryAmount] = useState(null)
    const [budget, setBudget] = useState([])
    const [isValidAmount, setValidAmount] = useState(true)

    const handleSubmit = () => {

    }

    return (
        <section className='new-budget'>
            <h2 className='new-budget__title'>Create your Budget</h2>
            <ul className='new-budget__list'>
                <li className='new-budget__list-item'>Look at your expenses</li>
                <li className='new-budget__list-item'>Estimate future expenses</li>
                <li className='new-budget__list-item'>Learn more about creating your budget on "some link"</li>
            </ul>
            <div className='budget-inputs'>
                <div className='budget-inputs__inputs'>
                    <div className='budget-inputs__inputs-container'>
                    <DropdownMenu
                        options={categoriesList}
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <div className='budget-inputs__amount-container'>
                        <NumberFormat
                            className='budget-inputs__amount'
                            placeholder='Amount...'
                            displayType={'input'}
                            prefix={'$'}
                            thousandSeparator={true}
                            value={categoryAmount}
                            onValueChange={(values) => {
                                const { formattedValue, value } = values
                                console.log(formattedValue)
                                console.log(value)
                                setCategoryAmount(value)
                            }}
                        />
                        <InvalidInput isValid={isValidAmount} message='Please enter a valid number' />
                    </div>
                    </div>
                    <div className='budget-inputs__action-container'>
                        <img className='budget-inputs__icon' src={addIcon} alt='add item icon' />
                        <span className='budget-inputs__cta'>Add</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default NewBudget;