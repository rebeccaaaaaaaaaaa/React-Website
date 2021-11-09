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
                    <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Habilidades</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Skins</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}> Relacionados</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                    <SidebarRoute to="/">
                       Jogue agora
                    </SidebarRoute>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar