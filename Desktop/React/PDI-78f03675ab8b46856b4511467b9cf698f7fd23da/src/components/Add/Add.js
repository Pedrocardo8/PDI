import React , { useState, useContext } from 'react';
import {
    Form,
    Button    
} from "react-bootstrap"
import { GlobalContext } from '../../context/GlobalState';

const Add = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');    

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            category,
            amount: +amount,
            description
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <h2>Add new Income/Expense</h2>
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
                <Form.Label >Amount</Form.Label>
                <Form.Control type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={2} value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" block  >Add</Button>                                        
            </Form>
        </div>
    )
}

export default Add;


