import React from 'react'
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Graphs3() {
  return (
    <div>
      <div>
        <h3>NO.OF FLIGHTS</h3>
        <Card>
        <Table hover>
            <thead>
                <tr>
                <th>S.NO</th>
                <th>AIRWAYS</th>
                <th>TOTAL FLIGHTS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>AIR INDIA</td>
                    <td>08</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>EMIRATES</td>
                    <td>10</td>
                   
                </tr>
                <tr>
                    <td>03</td>
                    <td>ETHIHAD</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>INDIGO</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>QATAR</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>UNITED</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>DELTA</td>
                    <td>35</td>
                </tr>
                <tr>
                    <td>08</td>
                    <td>VISTRA</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>09</td>
                    <td>SINGAPORE AIRLINES</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>AKASA</td>
                    <td>20</td>
                </tr>
            </tbody>
        </Table>
        </Card>
    </div>
    </div>
  )
}

export default Graphs3
