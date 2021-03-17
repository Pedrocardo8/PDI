import React from 'react'
import { Card, Button, Container, Row,Col } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {
    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col className="total">
                        <h3>Total</h3>
                        <p>2000€</p>
                    </Col>

                    <Col>
                        <h3>Expenses</h3>
                        <p>2000€</p>
                    </Col> 

                    <Col>
                        <h3>Earned Money</h3>
                        <p>2000€</p>
                    </Col>

                    <Col>
                        <h3>Budget</h3>
                        <p>2000€</p>
                    </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Dashboard
