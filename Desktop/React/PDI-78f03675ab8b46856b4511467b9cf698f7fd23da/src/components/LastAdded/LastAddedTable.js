import React , { useEffect, useContext } from 'react';
import {Col,Table} from 'react-bootstrap';
import TableRow from './TableRow';
import { GlobalContext } from '../../context/GlobalState';



export const LastAddedTable = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
      
    }, []);

    return(
        <Col>
            <h2>Last Added</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>                  
                    {transactions.map(transaction => (<TableRow key={transaction.id} transaction={transaction} />))}
                </tbody>
            </Table>            
        </Col>
    );
}

export default LastAddedTable;