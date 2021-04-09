import React from 'react'
import {
    Container
  } from "react-bootstrap"
import LastAddedTable from '../components/LastAdded/LastAddedTable';

function Expenses() {
    return (
        <div className='dash'>
            <Container>
                <h1>All Transactions</h1>
                <LastAddedTable />

            </Container>
           
                                   
        </div>
    )
}

export default Expenses
