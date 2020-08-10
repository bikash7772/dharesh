import React from "react";
import logo from "../assets/images/logo1.jpeg";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <React.Fragment>
      <header className='full-width fixed bg-white box-shadow'>
        <div className='header full-width'>
          <div className='container'>
            <div className='row'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#bs-example-navbar-collapse-1'
                  aria-expanded='false'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <NavLink className='navbar-brand logo' to='/'>
                  <img src={logo} alt='logo' title='logo' />
                  <span>haresh</span>
                </NavLink>
              </div>
              <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <div className='auto-width navbar-right'>
                  <ul className='nav navbar-nav header-menu'>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/aim'>Aim</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'>About Us</NavLink>
                    </li>

                    <li>
                      <NavLink to='/contact'>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Navbar;
