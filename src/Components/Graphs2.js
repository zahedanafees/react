import React from 'react'
import { Table } from 'react-bootstrap'
function Graphs2() {
  return (
    <div>
        <h3>REPORTS AND INFORMATION</h3>
        <Table>
            <thead>
                <tr>
                <th>S.NO</th>
                <th>AIRWAYS</th>
                <th>GROWTH%</th>
                <th>SCHEDULE</th>
                <th>WIND SPEED</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>AIR INDIA</td>
                    <td>+30%</td>
                    <td>BOM-DEL</td>
                    <td>15km/h</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>EMIRATES</td>
                    <td>+50%</td>
                    <td>DUB-ABD </td>
                    <td>17km/h</td>
                   
                </tr>
                <tr>
                    <td>03</td>
                    <td>ETHIHAD</td>
                    <td>+10%</td>
                    <td>NYK-LON</td>
                    <td>19km/h</td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>INDIGO</td>
                    <td>-05%</td>
                    <td>HYD-BOM</td>
                    <td>14km/h</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>QATAR</td>
                    <td>+25%</td>
                    <td>TUR-ERP</td>
                    <td>20km/h</td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>UNITED</td>
                    <td>+70%</td>
                    <td>SPN-PRS</td>
                    <td>16km/h</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>DELTA</td>
                    <td>+60%</td>
                    <td>LON-DEL</td>
                    <td>23km/h</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Graphs2