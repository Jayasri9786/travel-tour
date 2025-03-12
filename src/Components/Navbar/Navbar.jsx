import React, {useState} from "react"
import "./Navbar.css"
import  {MdTravelExplore} from "react-icons/md"
import {IoIosCloseCircleOutline} from "react-icons/io"
import {PiDotsNineBold} from "react-icons/pi"

const Navbar = () => {
    const [active,  setActive ] = useState("Navbar")
    // function to toggle NavBar
    const showNav = ()=>{
        setActive("NavBar activeNavBar")
    }  
    return (
        <section className="NavBarsection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> 
                            <MdTravelExplore className="icon" /> Travel.
                        </h1>
                    </a>
                 </div>

                <div className={active}>
                    <ul className="NavLists flex">

                        <li className="NavItem">
                            <a href="#" className="NavLink">Home</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">Packages</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">Shop</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">About</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">Pages</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">News</a>
                        </li>

                        <li className="NavItem">
                            <a href="#" className="NavLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div className="closeNavbar">
                    <IoIosCloseCircleOutline className="icon" />
                        </div>   
                </div>

                <div onclick={showNav} 
                className="toggleNavbar">
                <PiDotsNineBold  className="icon"/>  
                </div>
            </header>
        </section>
    );
};

export default Navbar;




