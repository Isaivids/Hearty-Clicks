import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdCamera } from 'react-icons/md';
import { CgMenuGridR } from 'react-icons/cg';
import { RiCloseFill } from 'react-icons/ri';

import './MenuBar.scss';

const MenuBar = () => {

  const [toggle, setToggle] = useState(true);

  return (

    <div className='menu-bar'>
        <div>
            <span><span><MdCamera/></span>MOMENTS</span>
            <h1 onClick={()=>setToggle(!toggle)}>{toggle ? <CgMenuGridR/> : <RiCloseFill/>}</h1>
        </div>
        <nav className={toggle ? 'nav-links': 'nav-links show'}>
            <NavLink to="/" className="link" onClick={()=>setToggle(!toggle)}>Home</NavLink>
            <NavLink to="/gallery" className="link" onClick={()=>setToggle(!toggle)}>Gallery</NavLink>
            <NavLink to="/contact" className="link" onClick={()=>setToggle(!toggle)}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default MenuBar