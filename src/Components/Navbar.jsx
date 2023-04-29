import React from 'react';
import '../Components/Scss/_navbar.scss';
import { Outlet, Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
        <div className='navbar_container'>
        <div className='navbar_section'>
          <div className='logo_container'>
            <h2><span>K</span>ONSULTANT<span>.</span></h2>
          </div>
          <div className='menu_container'>
            <a href=''>HOME</a>
            <a href=''>ABOUT</a>
            <a href=''>SERVICES</a>
            <a href=''>CASE STUDIES</a>
            <a href=''>TEAM</a>
            <a href=''>CLIENTS</a>
            <a href=''>PAGES</a>
            <a href=''>NEWS</a>
            <a href=''>CONTACT</a>
          </div>
        </div>
        </div>

        <Outlet />
    </>
  )
}
