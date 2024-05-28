import React, {useEffect, useState} from 'react';
import './Navbar.css'
import  logo from '../../assets/logo.png'

const Navbar = () => {

    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 80 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <nav className={`container ${sticky && 'dark-nav'}`}>
            <img  className="logo" src={logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contack us</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;