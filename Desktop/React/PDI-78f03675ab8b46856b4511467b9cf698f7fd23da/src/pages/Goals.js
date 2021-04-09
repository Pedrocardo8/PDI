import React from 'react'
import {
    Container,
    Button,
    Row
  } from "react-bootstrap"
import '../App.css';
import { Doughnut } from 'react-chartjs-2';
import teste from '../teste.jpg'



function Goals() {
    const data = {
        labels: [
            'Pago',
            'Por pagar',
        ],
        datasets: [{
            data: [300, 50],
            backgroundColor: [
            '#32CD32',
            '#FF0000'
            ],
            hoverBorderWidth: [
                8,
                8
            ]
        }],
    };

    return (
        <div className='dash'>
            <Container>
                <Button variant="outline-primary mt-5" className="add-goal">Add Goal</Button>
                <Container>
                    <Row className="justify-content-md-center">
                        <div className="col-12 col-lg-5 border border-secondary rounded m-3">
                            <h2 className="text-center">Título da despesa</h2>
                                <Row>
                                    <div className="col-3 align-self-center">
                                        <img src={teste} alt="teste de foto" className="img-fluid teste-img"/>
                                    </div>
                                    <div className="col-9 align-self-center">
                                        <Doughnut data={data} />
                                    </div>
                                </Row>
                                <Button variant="outline-secondary mt-2" className="add-goal">Add Income</Button>
                        </div>
                        <div className="col-12 col-lg-5 border border-secondary rounded m-3">
                            <h2 className="text-center">Título da despesa</h2>
                                <Row>
                                    <div className="col-3 align-self-center">
                                        <img src={teste} alt="teste de foto" className="img-fluid teste-img"/>
                                    </div>
                                    <div className="col-9 align-self-center">
                                        <Doughnut data={data} />
                                    </div>
                                </Row>
                                <Button variant="outline-secondary mt-2" className="add-goal">Add Income</Button>
                        </div>
                        <div className="col-12 col-lg-5 border border-secondary rounded m-3">
                            <h2 className="text-center">Título da despesa</h2>
                                <Row>
                                    <div className="col-3 align-self-center">
                                        <img src={teste} alt="teste de foto" className="img-fluid teste-img"/>
                                    </div>
                                    <div className="col-9 align-self-center">
                                        <Doughnut data={data} />
                                    </div>
                                </Row>
                                <Button variant="outline-secondary mt-2" className="add-goal">Add Income</Button>
                        </div>
                        <div className="col-12 col-lg-5 border border-secondary rounded m-3">
                            <h2 className="text-center">Título da despesa</h2>
                                <Row>
                                    <div className="col-3 align-self-center">
                                        <img src={teste} alt="teste de foto" className="img-fluid teste-img"/>
                                    </div>
                                    <div className="col-9 align-self-center">
                                        <Doughnut data={data} />
                                    </div>
                                </Row>
                                <Button variant="outline-secondary mt-2" className="add-goal">Add Income</Button>
                        </div>
                    </Row>
                </Container>
                    
            </Container>
        </div>
    )
}

export default Goals
