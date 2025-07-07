
import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import Link from 'next/link';
import logo from '@/assets/logo.png'; // Adjust the path as necessary
import Image from 'next/image';
import {BiUserCircle, BiSearch} from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Navbar = () => {
   

    return (
    <nav>
        <div className="left">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <div className="searchbox">
                <BiSearch className="searchbtn" />
                <input type="text" placeholder="Search for movies, TV shows, people..." />
            </div>
        
        </div>
        <div className="right">
            <p className="dropdown">Mumbai <RiArrowDropDownFill className='dropicon' /></p>
            <Link href="/" className='theme_btn1 linkstyleone'>Logout</Link>
            <Link href="/" className='linkstyleone'>
                <BiUserCircle className="theme_icon1" />
            </Link>
        </div>
    
    </nav>

    );
}

export default Navbar;