import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { placeContext } from '../../App';
import navIcon from '../../Image/Logo.png';
import { useForm } from "react-hook-form";



// Material ui style
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 100,
    },
  }));
  // Material ui style
  export default function Booking() {
    const classes = useStyles();
    const place = useContext(placeContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const myStyle = {
       
        backgroundImage: `url(${place[0].picture})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        height: "auto",
        width: "100%",
        minHeight: "100%",
        minWidth: "1024px",

        }
        const formStyle = { 
            boxShadow:'2px 2px 8px lightGray'
        }
        const  blur ={
            background:  'rgba(255, 255, 255, 0.2)',
           backdropFilter: 'blur(4px)'
        }
        const {isChoosen,description,name} = place[0];
       
    return (
        <div style={myStyle}>
            <div style={blur}>
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
        <div className='row'> 
        { isChoosen ? <div className='container text-white col-md-6'>
        <h1> {place[0].name}</h1>
        <h4> {place[0].description}</h4>
        </div> : <h1 className='p-5 text-danger'>   Choose Your Destination First -_-</h1>  }
        <div style={formStyle} className='col-md-3 m-5 p-4 bg-white border rounded d-flex flex-column align-items-center'> 
        <from onSubmit={handleSubmit(onSubmit)}> 
            <label>Origin</label><br/>
            <input name="name" defaultValue={name} ref={register({ required: true })} className='bg-light' type="text"/>
             <br/>
            <label>Destination</label><br/>
            { isChoosen ? <input defaultValue='Chattogram' className="bg-light" type="text"/> : <input defaultValue='' className="bg-light" type="text"/>}
            </from> 
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="From"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <TextField
            id="date"
            label="TO"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
       
        { isChoosen ? <Link to='/hotel'>  <button style={{width:'110%'}}  className="btn btn-orange">Start Booking</button> </Link> :
         <Link to='/home'> <button style={{width:'110%'}}  className="btn btn-red">Choose Place</button></Link>}
        
        
        </form>
      </div>
      </div>
    </div>
    </div>
    );
};

