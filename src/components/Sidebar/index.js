import React from 'react'
import { 
SidebarContainer, 
Icon, 
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrapper,
SidebarRoute

} from './SibarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                    <SidebarRoute to="/">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar