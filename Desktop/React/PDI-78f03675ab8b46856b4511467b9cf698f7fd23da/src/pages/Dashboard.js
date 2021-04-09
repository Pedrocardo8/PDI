import React , { useState, useHistory } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Top from '../components/TopRow/Top';
import LastAddedTable from '../components/LastAdded/LastAddedTable';
import Add from '../components/Add/Add';
import { useAuth } from "../context/AuthContext";


const data = [
    {
      week: "Week 1",
      income: 400,
      expense: 2400,
      total: 2400
    },
    {
      week: "Week 2",
      income: 3000,
      expense: 1398,
      total: 2210
    },
    {
      week: "Week 3",
      income: 2000,
      expense: 9800,
      total: 2290
    },
    {
        week: "Week 4",
        income: 2000,
        expense: 9800,
        total: 2290
      },
  ];

function Dashboard() { 

  return ( 
        <div className='dash'>
            <Container>
                <Top />

                <br/>
                <Row>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#2ecc71"
                        activeDot={{ r: 8 }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="expense" 
                        stroke="#c0392b" 
                    />
                </LineChart>
                </Row>
                <Row>
                   <LastAddedTable/>
                    <Col>
                        <Add/>
                     </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Dashboard;