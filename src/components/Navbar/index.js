import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
Nav, 
NavLogo, 
NavbarContainer,
MobileIcon, 
NavItem, 
NavMenu, 
NavLinks,
NavBtn,
NavBtnLink
} from "./NavbarElements"


const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    dolla
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'>
                            About
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='discover'>
                            Discover
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='services'>
                            Services
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='signup'>
                            Sign Up
                        </NavLinks>
                     </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar