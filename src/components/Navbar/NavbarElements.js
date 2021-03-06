import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const SvgLogo = styled.svg`
    fill: #fff;
`;

export const Nav = styled.nav `
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
      transition: all 0.5s ease;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR) `
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.5rem;
      cursor: pointer;
      color: #fff;
    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;

    }
`;


export const NavItem = styled.li `
    height: 80px;

`;

export const NavLinks = styled(LinkS) `
    color: #fff;
    display: flex;
    font-size: 1rem;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid rgb(11,196,226);
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR) `

    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.5s ease-in-out;
      background: #fff;
      color: #010606;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;