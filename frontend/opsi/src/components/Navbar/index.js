import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import '../css/styles.css'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="photo" src={require('../../img/opsilight.png').default} alt='logo' />
        </NavLink>
        <Bars /> 
        <NavMenu>
          <NavLink to='/About' activeStyle>
            O nas
          </NavLink>
          <NavLink to='/' activeStyle>
            Zemljevidi
          </NavLink>
          <NavLink to='/Dashboard' activeStyle>
            Več
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;