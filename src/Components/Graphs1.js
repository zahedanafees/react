import React from 'react'
import { Table } from 'react-bootstrap'
function Graphs1() {
  return (
    <div>
        <h3>AVG OF MONTHLY BOOKINGS GROWTH & SCHEDULE</h3>
        <Table>
            <thead>
                <tr>
                <th>S.NO</th>
                <th>AIRWAYS</th>
                <th>MONTHLY</th>
                <th>GROWTH%</th>
                <th>SCHEDULE</th>
                <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>AIR INDIA</td>
                    <td>JAN-FEB</td>
                    <td>+30%</td>
                    <td>BOM-DEL</td>
                    <td>04-05-2024</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>EMIRATES</td>
                    <td>MAR-APR</td>
                    <td>+50%</td>
                    <td>DUB-ABD </td>
                    <td>16-05-2024</td>
                   
                </tr>
                <tr>
                    <td>03</td>
                    <td>ETHIHAD</td>
                    <td>APR-MAY</td>
                    <td>+10%</td>
                    <td>NYK-LON</td>
                    <td>29-05-2024</td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>INDIGO</td>
                    <td>JUN-JULY</td>
                    <td>-05%</td>
                    <td>HYD-BOM</td>
                    <td>02-06-2024</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>QATAR</td>
                    <td>AUG-SEP</td>
                    <td>+25%</td>
                    <td>TUR-ERP</td>
                    <td>10-06-2024</td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>UNITED</td>
                    <td>OCT-NOV</td>
                    <td>+70%</td>
                    <td>SPN-PRS</td>
                    <td>25-06-2024</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>DELTA</td>
                    <td>DECEMBER</td>
                    <td>+60%</td>
                    <td>LON-DEL</td>
                    <td>01-07-2024</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Graphs1