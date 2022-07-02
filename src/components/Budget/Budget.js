import NumberFormat from 'react-number-format';
import './Budget.scss'

function Budget({ budget }) {
    const budgetAmountArray = budget.map(item => item.amount)
    let budgetTotal = 0
    if (budgetAmountArray.length > 0) {
        budgetTotal = budgetAmountArray?.reduce((a, b) => a + b)
    }
    return (
        <section className='budget'>
            <article className='budget__container'>
                <h2 className='budget__title'>Your Budget</h2>
                <ul className='budget__table'>
                    <li className='budget__labels'>
                        <ul className='labels'>
                            <li className='labels__label'>Category</li>
                            <li className='labels__label'>Amount</li>
                        </ul>
                    </li>
                    {budget?.map((item, index) => {
                        return (
                            <li key={index} className='budget__item'>
                                <ul className='item'>
                                    <li className='item__value'>{item.category}</li>
                                    <li className='item__value'>
                                        <NumberFormat
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            value={item.amount}
                                        />
                                    </li>

                                </ul>
                            </li>
                        )
                    })}
                    <li className='budget__total'>
                        <ul className='total'>
                            <li className='total__text'>Total</li>
                            <li className='total__value'>
                                <NumberFormat
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    value={budgetTotal}
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Budget;