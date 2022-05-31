import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Home = () => {
  return (
    <div className='main-div'>
      <div style={{ height: '20%', width: '30%', overflow: 'scroll', position: 'relative' ,justifyContent:'space-between',display:'flex', alignItems:'center'}}>
        <Link to="/task1"><Button size='lg' className='home-btn'>Task 1 Page</Button></Link>
        <Link to="/task2"><Button size='lg' className='home-btn'>Task 2 Page</Button></Link>
        <Link to="/task3"><Button size='lg' className='home-btn'>Task 3 Page</Button></Link>
      </div>
    </div>
  )
}

export default Home