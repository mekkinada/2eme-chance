import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import './Header.css'

import { logout } from './../../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand className="nav-cal" >
                    <Image width="80px"src="/Logo.jpg" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    <LinkContainer to="/">
                        <Nav.Link className="nav-cal">الصفحة الرئيسية</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="registerstudent?redirect=student">
                     <Nav.Link className="nav-cal"> فضاء المستخدم </Nav.Link>
                      </LinkContainer>
                    {
                        userInfo ? (
                            <NavDropdown title={userInfo.name.toUpperCase()} id='username'>
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <LinkContainer to='/admin/dashboard'>
                                            <NavDropdown.Item>لوحة القيادة</NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>الملف الشخصي</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <NavDropdown.Item onClick={logoutHandler}>تسجيل خروج</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link className="login nav-cal">فضاء الاداري</Nav.Link>
                                </LinkContainer>
                            )
                    }
                    {
                        userInfo && userInfo.isAdmin && (
                            <NavDropdown title="ADMIN" id='adminmenu'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>المستخدمون</NavDropdown.Item>
                                </LinkContainer>
                             
                            </NavDropdown>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
