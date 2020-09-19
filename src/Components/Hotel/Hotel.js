import React, { useContext } from 'react';
import './Hotel.css'
import navIcon from '../../Image/Logo.png';
import { Link } from 'react-router-dom';
import img5 from '../../Image/Rectangle 26.png';
import img4 from '../../Image/Rectangle 27.png';
import img3 from '../../Image/Rectangle 28.png';
import App from './GoogleMap/Map';

const Hotel = (props) => {
  const { isChoosen ,name} = props.place
  
  
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-primary">
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
<p>252 stays April 12-20 7 people stays</p> 
     { isChoosen ? (<h2>Stay In {name}</h2> ) : ( <div><h2>Choose your Destination</h2>
     <Link to='/home'><button className='btn btn-info'>Home</button></Link> </div> ) }

<div className="row">
    <div className="col-md-6"> 
    
    <div className='d-flex p-5'> 
         <img className="w-50" src={img3} alt=""/>
        <div className='p-5'>
         <h4>Light Bright Airy stylish apt and peaceful stay </h4>
         <p>4 guests , 2 Bed 2 Bath</p>
         <p>Air conditioning Kitchen</p>
         <p>Cancellation flexibility available</p>
          <p>  <i className="fas fa-star text-secondary"></i> 4.9(10) $44/night</p>    </div>
     </div>
    <div className='d-flex p-5'> 
        <img className="w-50" src={img4} alt=""/> 
         <div className='p-5'>
         <h4>Light Bright Airy stylish apt and peaceful stay </h4>
         <p>4 guests , 2 Bed 2 Bath</p>
         <p>Air conditioning Kitchen</p>
         <p>Cancellation flexibility available</p>
         <p> <i className="fas fa-star text-secondary"></i>4.9(10) $44/night</p>  
         </div>
    </div>
    <div className='d-flex p-5'>
         <img className="w-50" src={img5} alt=""/>
       <div className='p-5'>
         <h4>Light Bright Airy stylish apt and peaceful stay </h4>
         <p>4 guests , 2 Bed 2 Bath</p>
         <p>Air conditioning Kitchen</p>
         <p>Cancellation flexibility available</p>
         <p> <i className="fas fa-star text-secondary"></i> 4.9(10) $44/night</p>  
         </div>
     </div>
    
    
    </div>
    { isChoosen && <div className="col-md-5"><App></App></div>}
    
</div>


        </div>      
    );
};

export default Hotel;      