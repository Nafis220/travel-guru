import React, { useContext } from 'react';
import { placeContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import './Home.css'
const Home = () => {
  const [place,setPlace] = useContext(placeContext)
  
    return (
      <>
   
    
        <Slider></Slider>
        </>
    );
};

export default Home;