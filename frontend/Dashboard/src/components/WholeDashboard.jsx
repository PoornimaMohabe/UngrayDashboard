import React from 'react'
import "./Wholeboard.css"
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import Products from './Products'
import Score from './Score'
import Feedback from './Feedback'
import Comparison from './Comparison'
import Device from './Device'
function WholeDashboard() {
    return (
        <div className='mainDiv'>
            {/*left sidebar left hand */}
            <div className='common first1'> <SideBar/></div>

            {/* Dashboard  mid */}
            <div className='common first2' > <Dashboard/></div>
            <div className='common first3'><Comparison/></div>
            <div className='common first4'> <Products/></div>

            {/* right sidebar  right hand*/}
            <div className='common first5' ><Score/></div>
            <div className='common first6'><Device/></div>
            <div className='common first7'><Feedback/></div>
        </div>
    )
}



export default WholeDashboard
