import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlightIcon from '@mui/icons-material/Flight';
import ReportIcon from '@mui/icons-material/Report';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from 'react-router-dom';
import Icon from './Icon';
function Navbar() {
  return (
    <div className='Sidebar'>
        <h1>EXPLORE</h1>
        <Icon/>
      <ul className='myul'>
        <li><DashboardIcon/><Link to='/'><p className='test'>Dashboard</p></Link></li>
        <li><FlightIcon/><Link to='/Flights'><p className='test'>Flights</p></Link></li>
        <li><ReportIcon/><Link to ='/Reports'><p className='test'>Reports</p></Link></li>
        <li><AssessmentIcon/><Link to ='/Statistics'><p className='test'>Statistics</p></Link></li>
        <li><PageviewIcon/><Link to ='/Overview'><p className='test'>Overview</p></Link></li>
      </ul>
      </div>
  )
}

export default Navbar