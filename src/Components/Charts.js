import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Link } from 'react-router-dom';
function Charts() {
    return (
        <div className='parent'>
            <Row>
                <Col sm={8}>
            <Table striped bordered hover pie className='child'>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@jcbt</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>John Doe</td>
                        <td>@john</td>
                    </tr>
                </tbody>
            </Table>
            </Col>
            <Col sm={4} className='child2'>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={600}
                height={250}
            />
            </Col>
            </Row>

            <div className='child1'>
                <Row className='mt-4'>
                    <Col sm={6}>
                        <h2>Flights Share</h2>
                    <Link to ='/Graphs'><PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={250}
    />
    </Link>
                    </Col>
                    <Col sm={6} className='parent1'>
                        <h2>Flights Schedule</h2>
                    <Link to ='/Graphs1'><LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={400}
      height={250}
    />
    </Link>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Charts