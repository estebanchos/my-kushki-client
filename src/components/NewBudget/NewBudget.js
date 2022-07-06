import './NewBudget.scss'
import { budgetCategories } from '../../utils/budgetCategories';
import { useState } from 'react';
import addIcon from '../../assets/icons/add_box_light.svg';
import NumberFormat from 'react-number-format';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import axios from 'axios';
import { apiUrl } from '../../utils/api'
import { Popover } from 'antd';


const budgetTips = (
    <div>
        <p><b>Housing:</b> rent, mortgage, property taxes, security deposit, insurance</p>
        <p><b>Transport:</b> car payments, car insurance, car maintenance, gas, parking, public transport</p>
        <p><b>Groceries</b></p>
        <p><b>Health:</b> medicines, expenses not covered by provincial health, gym</p>
        <p><b>Utilities:</b> hydro, water, home internet, mobile phone, home supplies</p>
        <p><b>Entertainment:</b> eating out, going out</p>
        <p><b>Subscriptions:</b> netflix, disney+, magazines, newspapers, apps</p>
        <p><b>Saving:</b> monthly auto-deposit to savings or investments account</p>
        <p><b>Emergency Fund:</b> unexpected expenses</p>
        <p><b>Others:</b> daycare, petfood</p>
    </div>
)

function NewBudget({ budget, setBudget, authHeader }) {

    let categoriesList = budgetCategories
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categoryAmount, setCategoryAmount] = useState(null)

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
                    setCategoryAmount(0)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <section className='new-budget'>
            <h2 className='new-budget__title'>Create your budget</h2>

            <ul className='new-budget__list'>
                <li className='new-budget__list-item'>Review your current monthly expenses</li>
                <li className='new-budget__list-item'>Plan your monthly amount for each category bucket</li>
                <li className='new-budget__list-item'>Review our <a className='new-budget__list-link' href='/learn/articles/basics-budget' target='_blank'>Budget Basics</a> article for tips on creating your budget
                </li>
                <li className='new-budget__list-item'>Or have a quick look at some of our tips: <Popover title='Calculate your income after tax and group your expenses in buckets. For example:' content={budgetTips} trigger='click'><span className='new-budget__list-link'>Quick Tips</span>
                    </Popover>
                </li>
            </ul>
            <div className='new-budget__container'>
                <h3 className='new-budget__header'>New Budget</h3>
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
                                        const { value } = values
                                        setCategoryAmount(value)
                                    }}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                />
                            </div>
                        </div>
                        <div className='budget-inputs__action-container' onClick={handleSubmit}>
                            <img className='budget-inputs__icon' src={addIcon} alt='add item icon' />
                            <span className='budget-inputs__cta'>Add</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default NewBudget;