import React from 'react';
import './Navbar.css'
import navIcon from '../../Image/Logo.png'
const Navbar = () => {
    return (
        <div className="mb-5">
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
        <a className="nav-link " href="#"><button className="btn btn-yellow my-1 my-sm-0" type="submit">Login</button></a>
      </li>
    </ul>
  </div>
   
  </div>
</nav>
        </div>
    );
};

export default Navbar;