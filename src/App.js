import React, { startTransition } from 'react'
import './App.css';
import Navbar from './Components/Navbar'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from './Components/Dashboard'; 
import Newdash from './Components/Newdash';
import Flights from './Components/Flights';
import Reports from './Components/Reports';
import Tickets from './Components/Tickets';
import Statistics from './Components/Statistics';
import Graphs from './Components/Graphs';
import Graphs1 from './Components/Graphs1';
import Overview from './Components/Overview';
import Graphs2 from './Components/Graphs2';
import Graphs3 from './Components/Graphs3';
import Icon from './Components/Icon';
function App() {
  return (
    <>
    <Router>
        <Row>
            <Col sm={2}><Navbar /></Col>
            <Col sm={10}>
                <Routes>
                 <Route path='/react' exact Component={Dashboard}/>
                  <Route path ='/Flights' exact Component={Flights}/>
                  <Route path ='/Reports' exact Component={Reports}/>
                  <Route path ='/Graphs' exact Component={Graphs}/>
                  <Route path ='/Graphs1' exact Component={Graphs1}/>
                  <Route path ='/Graphs2' exact Component={Graphs2}/>
                  <Route path ='/Graphs3' exact Component={Graphs3}/>
                  <Route path ='/Icon' exact Component={Icon}/>
                  <Route path ='/Tickets' exact Component={Tickets}/>
                  <Route path ='/Statistics' exact Component={Statistics}/>
                 <Route path ='/Overview' exact Component={Overview}/>
                  
                </Routes>
                </Col>
        </Row>
    </Router>
    </>
    
      


  )
}

export default App