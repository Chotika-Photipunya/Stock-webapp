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
import * as IoIcons from 'react-icons/io';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Menubar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const stylelogo = { width: 40, height: 40 }

    return (
        <>
            <IconContext.Provider className='hamberger' value={{ color: '#fff' }}>
                <div className='Menubar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>

                    

                    <Navbar.Brand href="#home">
                  
                        <div className='name-logo'>
                        <Image style={stylelogo} src="Logo.png" />
                            Smart Manage
                        </div>
                    </Navbar.Brand>
             

                    <Nav className='bnt-rigth'>

                        <Row>
                            <Nav.Link href="#notification">
                                <Col>
                                <div className='icon-noti'>
                                    <IoIcons.IoMdNotifications value={{ color: '#fff' }} />
                                </div>
                                </Col>
                            </Nav.Link>

                            <Nav.Link eventKey={2} href="#Login">
                                <Col>
                                <div className='text-login'>
                                    Log in
                                </div>
                                </Col>
                            </Nav.Link>
                        </Row>
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
