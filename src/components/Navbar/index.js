import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
Nav, 
NavLogo, 
NavbarContainer,
MobileIcon, 
NavItem, 
NavMenu, 
NavLinks,
SvgLogo
} from "./NavbarElements"


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
      if(window.scrollY >= 80){
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
      <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                <SvgLogo width="75" height="24" className="_32ANSIZormifc9Vc6VVwrx" viewBox="0 0 75.89 24"><title>mainLogoRiotFist</title><g className="cls-2"><path className="cls-3" d="M69.31 20.67l4.22.71.26 2.63h-6.26l.11-1 4.48-.18v-.48l-4.3-.74.26-2.64h5.21l.1 1.05-4 .15zm-36.23 1.27l.06-1H36l.17 3.06h-6.52l.51-5.08h5.71l.07 1.05-4.43.1-.14 2.79 3.22.09v-1zm27.63.04v.87l4.1.1v1H59l.17-5.08h5.53v1.05l-4.1.09v.89h3.11v1z"></path><path className="cls-4" d="M43.87 24h1.75l-1.39-5.08h-4.11L38.74 24h1.75l.27-1.28h2.85zm-2.9-2.25l.35-1.66 1.69-.08.36 1.67z"></path><path className="cls-3" d="M56.28 24l-.52-5.08h-1.47l-2.12 2.42-2.11-2.42h-1.48L48.07 24h1.73l.17-3.29 2.2 2.24 2.21-2.24.17 3.29z"></path><path className="cls-4" d="M43.2 16.03h-4.55l-1.21-5.54-2.93 1.59-.1 3.95h-4.07l1.26-12.4-2.6.09.38-3.41h11.61l1.61 7.38-2.36 1.28zM38.09 3.42l-3.34.11-.13 4.82 3.85-1.8z"></path><path className="cls-3" d="M48.87.31h-3.46l-.32 15.72h4.19zm26.64 0l.36 3.44-4.24-.14 1.24 12.42h-4.19l-.35-12.54-3.41-.11-.09-3.07z"></path><path className="cls-4" d="M52.18.32h10.8l.77 15.71h-12zm3.63 12.43l3.82-.12v-9l-4-.12z"></path><path className="cls-3" d="M0 6.97l14.86-7 8.69 2.1L22 17.44h-4.41l-.82-11.2-.47.15-.78 11.05h-3.34l-1.59-9.29-.47.14.12 9.15H7.09L5.27 9.78l-.47.15.53 7.51h-3zm11.22 11.98l1.09 2.81 9 2.23.47-4.49z"></path></g></SvgLogo>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={`${true}`}
                                  offset={-80}
                                  activeClass="active"
                         >  Sobre </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='discover' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={`${true}`}
                                  offset={-80}
                                  activeClass="active">
                            Habilidades
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='services'
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={`${true}`}
                                  offset={-80}
                                  activeClass="active"
                        >
                            Skins
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='signup' 
                                  smooth={true} 
                                  duration={500} 
                                  spy={true} 
                                  exact={`${true}`}
                                  offset={-80}
                                  activeClass="active"
                        >
                           Relacionados
                        </NavLinks>
                     </NavItem>
                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to='/signin'>Login</NavBtnLink>
                </NavBtn>*/}
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar