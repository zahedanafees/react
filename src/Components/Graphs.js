import React from 'react'
import { Table } from 'react-bootstrap';
function Graphs() {
  return (
    <div>
       <center><h2>FLIGHTS SHARE & PERFORMANCE</h2></center>
       <Table hover>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>AIRLINES</th>
                <th>MARKET SHARE</th>
                <th>AVG PRICE</th>
                <th>PASSEENGERS</th>
                <th>ON TIME PERFORMANCE</th>
                <th>DELAY PERFORMANCE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>01</td>
            <td>AIR INDIA</td>
            <td>250</td>
            <td>₹5k</td>
            <td>100</td>
            <td>80%</td>
            <td>20%</td>
            </tr>
            <tr>
            <td>02</td>
            <td>EMIRATES</td>
            <td>300</td>
            <td>₹7k</td>
            <td>150</td>
            <td>70%</td>
            <td>30%</td>
            </tr>
            <tr>
            <td>03</td>
            <td>QATAR</td>
            <td>200</td>
            <td>₹6k</td>
            <td>180</td>
            <td>63%</td>
            <td>37%</td>
            </tr>
            <tr>
            <td>04</td>
            <td>SPICEJET</td>
            <td>230</td>
            <td>₹3k</td>
            <td>120</td>
            <td>56%</td>
            <td>44%</td>
            </tr>
            <tr>
            <td>05</td>
            <td>INDIGO</td>
            <td>150</td>
            <td>₹2k</td>
            <td>80</td>
            <td>88%</td>
            <td>12%</td>
            </tr>
        </tbody>
       </Table>
    </div>
  )
}

export default Graphs
