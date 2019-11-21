import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';


import { Link } from 'react-router-dom';

const Header = function(props){
   // const headerStyle={textAlign: 'center',padding: 20,background: '#000',color: '#fff',textTransform: 'uppercase'};
    return (<div className='header'>
        <span className="header-text">{props.heading}</span>
        
       <div className={props.searchDisplay}><span className={props.noSearchBox}>{props.searchDisplay}</span></div>
       <div className={props.iconDisplay}>
       <Link to="/profile/">
        <img src={logo}/>{props.logo}
        </Link>
      </div>
      
      </div>);   
}

export default Header;