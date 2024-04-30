import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BarChart } from '@mui/x-charts/BarChart';
import Cards from './Charts';

function Dashboard() {
  return (
    <>
   <Row>
        <Container className='abcd'>
        <Col sm={2}>
            <h1>Spicejet</h1>
            <p>₹54k</p>
            </Col>
            <Col sm={2}>
           <img src={'https://i.pinimg.com/564x/66/b2/be/66b2be6d5d2a32cbb5868afdf924f600.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample'>
        <Col sm={2}>
            <h1>Indigo</h1>
            <p>₹70k</p>
            </Col>
            <Col sm={2}>
           <img className='demo1' src={'https://i.pinimg.com/564x/66/b2/be/66b2be6d5d2a32cbb5868afdf924f600.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample1'>
        <Col sm={2}>
            <h4>Total Flights</h4>
            <p>750</p>
            </Col>
            <Col sm={2}>
           <img className='demo' src={'https://i.pinimg.com/736x/09/85/43/09854378b0a72b45b3c3bad93922a463.jpg'}/>
        </Col>

       <Cards/>
        </Container>
   </Row>
   </>
   
  )
}

export default Dashboard