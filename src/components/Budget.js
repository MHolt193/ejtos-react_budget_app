import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        console.log(totalExpenses)
        if (event.target.value <= 20000 && event.target.value > totalExpenses) {
            setNewBudget(event.target.value);
            dispatch({
                type: "SET_BUDGET",
                payload: event.target.value
            })
        } else if (event.target.value > 20000) {
            alert("The budget value cannot exceed 20000")
        } else {
            alert("You cannot reduce the budget value lower than the spending")
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget