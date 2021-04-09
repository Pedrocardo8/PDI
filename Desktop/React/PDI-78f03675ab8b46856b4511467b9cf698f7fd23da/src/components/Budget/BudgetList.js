import React , { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import BudgetLine from './BudgetLine';

export const BudgetList = () => {
    const { budgets } = useContext(GlobalContext)

    return(
        <div>
            <h2>Budgets</h2>
            {budgets.map(budget => (<BudgetLine key={budget.id} budget={budget} />))}
        </div>
    )
}


export default BudgetList;
