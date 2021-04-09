import React , { useState, useContext } from 'react';
import {
    Form,
    Button    
} from "react-bootstrap";
import { GlobalContext } from '../../context/GlobalState';


const AddBudget = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
     

    const { addBudget } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newBudget = {
            id: Math.floor(Math.random() * 100000),
            category,
            amount
        }

        addBudget(newBudget);
    }
    return (
        <div>
                <Form onSubmit={onSubmit}>
                <h2>Create Budget</h2>
                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>-</option>
                <option>Food</option>
                <option>Shopping</option>
                <option>House</option>
                <option>Salary</option>
                <option>Investment</option>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" block>Add Budget</Button>                                        
            </Form>
        </div>
    )
}

export default AddBudget;
