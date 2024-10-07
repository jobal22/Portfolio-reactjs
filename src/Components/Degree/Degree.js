import React from 'react'
import "./Degree.css"

export default function Degree () {
  
  return (

    <div className="degContainer">
      <div className="degItem d1">
        <p className='diTi'>PhD</p>
        {/* <div className="line"/> */}
        <p className='diSu'>Evangelism & Church Revitalization</p>
      </div>
      <div className="degItem d2">
        <p className='diTi'>MDiv</p>
        <p className='diSu'>International Church Planting</p>
      </div>
      <div className="degItem d3">
        <p className='diTi'>BS</p>
        <p className='diSu'>Toxicology</p>
        </div>
      <div className="degItem d4">
        <p className='diTi'>Cert</p>
        <p className='diSu'>Full Stack Developer</p>
        </div>    
    </div>
  )
}