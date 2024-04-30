import React from 'react'
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Link } from 'react-router-dom';
const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 450,
    height: 250,
  };


function Statistics() {
  return (
    <div>
       <Row>
        <div className='main1'>
        <Card className='mycard'>
        <h3>Total Flights</h3>
        <center><h5>500</h5></center>
        </Card>
        <Card className='mycard'>
        <h3>AVG Duration</h3>
        <center><h5>4.5H</h5></center>
        </Card>
        <Card className='mycard'>
        <h3>Total Passengers</h3>
        <center><h5>700</h5></center>
        </Card>
        <Card className='mycard'>
        <h3>AVG Ticket price</h3>
        <center><h5>₹30k</h5></center>
        </Card>
        <Card className='mycard'>
        <h5 style={{padding:10}}>NO.Of BOOKINGS</h5>
        <center><h5>450</h5></center>
        </Card>
        </div>
       </Row>
       <div className='main2'>
       <Row>
        <Col sm={8}>
        
            <h3>FLights by Year,Month</h3>
        <Link to ='/Graphs1'><BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: '2021' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: '2022' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: '2023' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: '2024' },
        
      ]}
      width={600}
      height={250}
    />
    </Link>
        
    
        </Col>
        <Col sm={4}>
     
            <h3>Total FLights</h3>
       <Link to ='/Graphs3'><PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
    </Link> 
   
   
        </Col>
        </Row>
       </div>
       <div className='main2'>
       <Row>
        <Col sm={12}>
    
            <h3>Fare Tax By Year</h3>
       
            <Link to ='/Graphs2'><LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={250}
      width={1100}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
    </Link>
   
        </Col>
   
        
        </Row>
       </div>
       </div>
       
  )
}

export default Statistics
