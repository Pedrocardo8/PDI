import React from 'react';
import {
    ProgressBar
} from 'react-bootstrap';

function BudgetLine( { budget } )  {
    return (
        <div>
            <h3>{budget.category}</h3>
            <ProgressBar variant="success" now={budget.progress} />
        </div>
    )
}

export default BudgetLine;
