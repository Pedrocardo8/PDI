import React,{useContext} from 'react';
import { Container,Row } from 'react-bootstrap';
import TopCard from './TopCard';
import { GlobalContext } from '../../context/GlobalState';

export const Top = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0 ).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return(
        <div>
            <Container>
                <Row className='mt-5'>
                    <TopCard titulo="Total Balance" balanco={total} />
                    <TopCard titulo="Monthly Income" balanco={income}/>
                    <TopCard titulo="Monthly Expenses" balanco={expense}/>
                    <TopCard titulo="Budget Progress" balanco="-"/>              
                </Row>
            </Container>
         </div>

    );
}

export default Top;