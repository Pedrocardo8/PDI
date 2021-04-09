import React from 'react';


function TableRow({transaction} ){
    return(
        <tr className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <td>{transaction.category}</td>
            <td>{transaction.amount}€</td>
            <td>{transaction.description}</td>
        </tr>
    );
}
/*
const TableRow = ({ 
    category,
    amount, 
    description
    }) => {
        return (
            <tr className={amount < 0 ? 'minus' : 'plus'}>
                <td>{category}</td>
                <td>{amount}€</td>
                <td>{description}</td>
            </tr>

          );
        };
        */

export default TableRow;