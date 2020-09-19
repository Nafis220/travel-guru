import React, { useContext, useState } from 'react';
import sundarban from '../../Image/sundorbon.png';
import coxsbazar from '../../Image/Rectangle 1.png';
import srimongol from '../../Image/Sreemongol.png' ;
import navIcon from '../../Image/Logo.png'
import './Slider.css'
import { placeContext } from '../../App';
import { Link } from 'react-router-dom';
const Slider = () => {

  const [place,setPlace] = useContext(placeContext)


  const handleBooking = place =>{
if(place === 'coxs'){
  let place = {name :"Cox's Bazar", description : 'Cox"s Bazar  is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee Lorem ipsum dolor sit. camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.', picture :"https://i.ibb.co/Df3sxz8/Rectangle-1.png",isChoosen:true,latitude:21.427229, longitude:92.005806}
  setPlace(place)
  
}
if(place === 'sundarban'){
 let place = {name:'Sundarban', description:' Madhobpur Lake is one of the main tourist attractions in the area,[3][4][5] and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh.[6] The Baikka beel is also a nearby body of water and home to the Large-billed reed warbler.[7] Sreemangal has been nicknamed the tea capital of Bangladesh.', picture:"https://i.ibb.co/nz3prYV/sundorbon.png", isChoosen:true, latitude:	21.949727,
longitude:89.18333};

 setPlace(place)
}
if(place === 'sreemongol'){
  let place = {name : "Sreemongol", description:' Sreemangal is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills and Roof of Rangamati. Lorem ipsum dolor sit amet. ', picture:'https://i.ibb.co/7khvQHM/Sreemongol.png', isChoosen:true,latitude:24.3065193,longitude:91.72955030000003}
  
  setPlace(place)
}

  }
    return (
        <div className="background">
          
          <div className="blur">
          <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand " href="#"> 
  <img className="w-25" src={navIcon} alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
  <div> 
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      
    </form>
  </div>
  <div> 
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">News<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Destination</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <Link to="/login"> 
        
        <a className="nav-link " href="#"><button className="btn btn-yellow my-1 my-sm-0" type="submit">Login</button></a>

        </Link>
      </li>
    </ul>
  </div>
   
  </div>
</nav>
             {/* <!--Carousel Wrapper--> */}
<div id="multi-item-example" className="carousel slide carousel-multi-item text-white" data-ride="carousel">

  
{/* <!--Indicators--> */}
<ol className="carousel-indicators">
  <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
  <li data-target="#multi-item-example" data-slide-to="1"></li>
  <li data-target="#multi-item-example" data-slide-to="2"></li>
</ol>
{/* <!--/.Indicators--> */}

{/* <!--Slides--> */}
<div className="carousel-inner " role="listbox">

  {/* <!--First slide--> */}
  <div className="carousel-item active carousel-1 ">
 <div className = 'd-flex justify-content-around row height: 50%'>
    <div className="col-md-4 ">
      <h1> Cox's Bazar</h1>
      <p> 
      Cox's Bazar  is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee Lorem ipsum dolor sit. camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.  
      </p>
      <Link to='/booking'> 
      <button onClick={() => handleBooking('coxs')} className="btn btn-yellow my-1 my-sm-0" type="submit">Booking -{'>'}</button>
      </Link>
    </div>

    <div className="col-md-6 ">
    <div className='row'> 

    <div className='col-md-4 '> 
    <Link to ='/booking'> 
      <img  onClick={() => handleBooking('coxs')} className="card-img-top card-img"
       src={coxsbazar} alt="Card image cap"/>
       </Link>
    </div>
    <div className='col-md-4'>
      
      <img   className="card-img-top w-75"
       src={srimongol} alt="Card image cap"/>
      
    </div>
    <div className='col-md-4'>
      <img className="card-img-top"
      src={sundarban} alt="Card image cap"/>
    </div>
    </div>
    </div>

  
  </div>
  </div>
  {/* <!--/.First slide--> */}

  {/* <!--Second slide--> */}
  <div className="carousel-item">
<div className = "row justify-content-around d-flex height: 50%">
    <div className="col-md-4">
      <h1> Sreemangal</h1>
      <p> 
      Sreemangal is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills and Roof of Rangamati. Lorem ipsum dolor sit amet. 
      </p>
      <Link to='/booking'>  
      <button  onClick={() => handleBooking('sreemongol')} className="btn btn-yellow my-1 my-sm-0" type="submit">Booking -{'>'}</button>
      </Link>
    </div>

    <div className="col-md-6">
    <div className='row'> 

            <div className='col-md-4'> 
            <img className="card-img-top"
            src={coxsbazar} alt="Card image cap"/>
            </div>
            <div className='col-md-4'>
            <Link to='/booking'>  
            <img  onClick={() => handleBooking('sreemongol')} className="card-img-top w-75 card-img"
            src={srimongol} alt="Card image cap"/>
               </Link>
            </div>
            <div className='col-md-4'>
            <img className="card-img-top"
            src={sundarban} alt="Card image cap"/>
            </div>
            </div>
    </div>

   
    </div>
  </div>
  {/* <!--/.Second slide--> */}

  {/* <!--Third slide--> */}
  <div className="carousel-item">
   <div className='row d-flex justify-content-around height: 50% '>
    <div className="col-md-4">
     <h1> Sundarban</h1>
     <p> 
     Madhobpur Lake is one of the main tourist attractions in the area,[3][4][5] and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh.[6] The Baikka beel is also a nearby body of water and home to the Large-billed reed warbler.[7] Sreemangal has been nicknamed the tea capital of Bangladesh.
     </p>
    <Link to='/booking'>  
    
    <button onClick={() => handleBooking('sundarban')} className="btn btn-yellow my-1 my-sm-0" type="submit">Booking -{'>'}</button>
    
    </Link>
    </div>

    <div className="col-md-6">
      <div className=" mb-2 ">
      <div className='row'> 

        <div className='col-md-4'> 
        <img className="card-img-top"
        src={coxsbazar} alt="Card image cap"/>
        </div>
        <div className='col-md-4'>
        <img  className="card-img-top w-75 "
        src={srimongol} alt="Card image cap"/>
        </div>
        <div className='col-md-4'>
        <Link to='/booking'>  
        <img onClick={() => handleBooking('sundarban')} className="card-img-top card-img"
        src={sundarban} alt="Card image cap"/>
        </Link>
        </div>
        </div>
       
      </div>
    </div>

  
   </div>
  </div>
  {/* <!--/.Third slide--> */}

</div>
{/* <!--/.Slides--> */}

</div>
{/* <!--/.Carousel Wrapper--></div> */}
{/* <!--Controls--> */}
  <div class="controls-top d-flex justify-content-center">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  {/* <!--/.Controls--> */}

        </div>
        
        </div>
    );
};

export default Slider;