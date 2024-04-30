import React from 'react'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
function Tables() {
  return (
    <div>
            <Row>
                <Col sm={12}>
                    <h4 className='mt-3'>RESULTS</h4>
     <Table bordered hover pie className='mytab'>

      <tbody>
        <tr>
          <td><img className='img1' src={'https://i.pinimg.com/564x/e4/02/84/e4028438fa0e5152cd97f7faa812353b.jpg'}/></td>
          <td>EMIRATES</td>
          <td>NYK<br/>TO<br/>BOM</td>
          <td>11H 20M</td>
          <td>$1572<br/>
            <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img2' src={'https://i.pinimg.com/564x/b4/59/da/b459da8df5ce916b17280a16f51840fe.jpg'}/></td>
          <td>QATAR</td>
          <td>JHK<br/>TO<br/>BOM</td>
          <td>12H 50M</td>
          <td>$2500<br/>
          <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img3' src={'https://i.pinimg.com/736x/ba/20/e1/ba20e12046190ea196c88c4a088cce1d.jpg'}/></td>
          <td>SINGAPORE AIRLINES</td>
          <td>BOM<br/>TO<br/>DUBAI</td>
          <td>15H 40M</td>
          <td>$3000<br/>
          <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/91/37/09/913709c8027990ce9831efa1dd44f07c.jpg'}/></td>
          <td>ETHIHAD</td>
          <td>DEL<br/>TO<br/>NYK</td>
          <td>13H 10M</td>
          <td>$1400<br/>
          <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/69/97/80/699780710235c0ee61a913328abf928e.jpg'}/></td>
          <td>AIR INDIA</td>
          <td>ERP<br/>TO<br/>BOM</td>
          <td>09H 10M</td>
          <td>$1000<br/>
          <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/31/2a/df/312adf156ee49b4ab52a4c257693495d.jpg'}/></td>
          <td>LUTHAFSNA</td>
          <td>TKY<br/>TO<br/>DEL</td>
          <td>20H 10M</td>
          <td>$2500<br/>
          <Link to='/Tickets'><button className='btn btn-outline-success'>BOOK NOW</button></Link></td>
        </tr>
        
      </tbody>
    </Table>
    </Col>
  
  
 
    </Row>
    </div>
  )
}

export default Tables
