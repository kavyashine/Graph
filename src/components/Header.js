import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs';
 import { IoMdArrowDropdown } from "react-icons/io";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        
        <div className='header-left'>
        <BsSearch  className='searchIcon'/>
       
          </div>
        <div className='header-right'>
       
            <BsFillBellFill className='icon'/>
           
            <BsPersonCircle className='icon'/>
            <IoMdArrowDropdown className='icon'/>
        </div>
    </header>
  )
}

export default Header