import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Menubar.css';
import { IconContext } from 'react-icons';
import Image from 'react-bootstrap/Image';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Menubar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const stylelogo = { width: 40, height: 40 }
    const stylenoti = { width: 35, height: 35 }
    const stylelayout = { margintop: 90 }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='Menubar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>



                    <div className='logo' >
                        <Image style={stylelogo} src="Logo.png" />
                    </div>
                    <div className='nameLogo'>
                        <Navbar.Brand style={stylelayout} href="#home">Smart Manage</Navbar.Brand>
                    </div>
                    
                        <Nav>
                            <div className='picnoti'>
                                <Image style={stylenoti} src="notification.png" />
                            </div>
                            <div className='TextNoti'>
                                <Nav.Link href="#deets">Notification</Nav.Link>
                            </div>
                            <Nav.Link eventKey={2} href="#memes">
                                <div className='text-login'>
                                  <h4>  Log in</h4>
                                </div>
                            </Nav.Link>
                        </Nav>
                    





                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Menubar;
