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
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="photo" src={require('../../img/opsilight.png').default} alt='logo' />
        </NavLink>
        <Bars /> 
        <NavMenu>
          <InfoOutlinedIcon/>
          <NavLink to='/About' activeStyle>
            O nas
          </NavLink>
          <MapOutlinedIcon/>
          <NavLink to='/map' activeStyle>
            Zemljevidi
          </NavLink>
          <MoreHorizOutlinedIcon/>
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