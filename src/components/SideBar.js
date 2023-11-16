import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
 import logo from '../assets/images/logo2.png';
 import { RiWallet3Fill } from "react-icons/ri";
 import { FaDollarSign } from "react-icons/fa6";
 import { PiFilesFill } from "react-icons/pi";
 import { FaUser } from "react-icons/fa";
 import { MdContacts } from "react-icons/md";

function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            {/* <BsGrid1X2Fill/>Assiduus */}
                <img src={logo} alt='logo'/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <RiWallet3Fill className='icon'/> Accounts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaDollarSign className='icon'/> Payroll
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <PiFilesFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUser className='icon'/> Advisor
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdContacts className='icon'/> Contacts
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default SideBar