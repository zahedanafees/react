import  Row  from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

function Tickets() {
  const[count,setCount]=useState(14);
  const[Count1,setCount1]=useState(20);
  const[Count2,setCount2]=useState(10);
  const[Count3,setCount3]=useState(15);
  const[Count4,setCount4]=useState(18);
  const[Count5,setCount5]=useState(0);
  return (
    <div>
      <h1 style={{paddingLeft:380,color:'blue'}}>BOOKINGS</h1>
      <Row>
        <Col sm={12}>
          <Table hover>
          <thead className='parent1'>
                    <tr>
                        <th>S.NO</th>
                        <th>FLIGHTS</th>
                        <th>TRAVEL TO</th>
                        <th>FARE TYPE</th>
                        <th>NO.OF TICKETS</th>
                        <th>PRICE</th>
                    </tr>
                    </thead>
                      <tbody>
                        <tr>
                        <td>1</td>
                        <td>EMIRATES</td>
                        <td>NYK-LON</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount(count+1)}>+</Button>
                        <h1 className='myh1'>{count}</h1>
                        <Button onClick={()=>setCount(count-1)}>-</Button></td>
                        <td>₹59k</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>AIR INDIA</td>
                        <td>HYD-BOM</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount1(Count1+1)}>+</Button>
                        <h1 className='myh1'>{Count1}</h1>
                        <Button onClick={()=>setCount1(Count1-1)}>-</Button></td>
                        <td>₹40k</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>SPICEJET</td>
                        <td>DEL-BOM</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount2(Count2+1)}>+</Button>
                        <h1 className='myh1'>{Count2}</h1>
                        <Button onClick={()=>setCount2(Count2-1)}>-</Button></td>
                        <td>₹30k</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>QATAR</td>
                        <td>DUB-ABD</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount3(Count3+1)}>+</Button>
                        <h1 className='myh1'>{Count3}</h1>
                        <Button onClick={()=>setCount3(Count3-1)}>-</Button></td>
                        <td>₹65k</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>INDIGO</td>
                        <td>DEL-BNG</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount4(Count4+1)}>+</Button>
                        <h1 className='myh1'>{Count4}</h1>
                        <Button onClick={()=>setCount4(setCount4-1)}>-</Button></td>
                        <td>₹20k</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>UNITED</td>
                        <td>PUN-GJT</td>
                        <td>Refundable</td>
                        <td>
                        <Button onClick={()=>setCount5(Count5+1)}>+</Button>
                        <h1 className='myh1'>{Count5}</h1>
                        <Button onClick={()=>setCount5(Count5-1)}>-</Button></td>
                        <td>₹70k</td>
                      </tr>
                      </tbody>
                    
          </Table>
        </Col>
      </Row>
      <table>

      </table>
      


    </div>
  )
}

export default Tickets