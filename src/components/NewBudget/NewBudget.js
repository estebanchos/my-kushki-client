import './NewBudget.scss'
import { budgetCategories } from '../../utils/budgetCategories';
import { useState } from 'react';
import InvalidInput from '../InvalidInput/InvalidInput';
import addIcon from '../../assets/icons/add_box_light.svg';
import NumberFormat from 'react-number-format';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import axios from 'axios';
import { apiUrl } from '../../utils/api'


function NewBudget({ budget, setBudget, authHeader, showNewBudget }) {

    let categoriesList = budgetCategories
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryAmount, setCategoryAmount] = useState(null)
    // const [budget, setBudget] = useState([])
    const [isValidAmount, setValidAmount] = useState(true)

    const handleSubmit = () => {
        if (selectedCategory && categoryAmount) {
            const newBudgetItem = {
                category: selectedCategory,
                amount: categoryAmount
            }
            axios.post(apiUrl + '/users/newBudget', newBudgetItem, { headers: authHeader })
                .then(res => {
                    setBudget([...budget, newBudgetItem])
                    let deleteIndex = categoriesList.indexOf(selectedCategory)
                    categoriesList.splice(deleteIndex, 1)
                    setSelectedCategory('')
                    setCategoryAmount(null)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <section className={`new-budget ${showNewBudget ? '' : 'new-budget--hidden'}`}>
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
                                    setCategoryAmount(value)
                                }}
                            />
                            <InvalidInput isValid={isValidAmount} message='Please enter a valid number' />
                        </div>
                    </div>
                    <div className='budget-inputs__action-container' onClick={handleSubmit}>
                        <img className='budget-inputs__icon' src={addIcon} alt='add item icon' />
                        <span className='budget-inputs__cta'>Add</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default NewBudget;