import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import PartOne from '../../Controllers/PartOne'
import PartModules from '../../Controllers/PartModules';
import Footer from '../../Controllers/Footer';

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <PartOne />
        <PartModules />
        <Footer />
    </div>
  )
}

export default Home