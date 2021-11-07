import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const  FooterContainer = styled.footer`
   background-color: #010522; 
`;

export const  FooterWrapper = styled.div`
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const  FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 820px) {
       padding-top: 32px;
    }
`;

export const  FooterLinksWrapper = styled.div`
    display: flex;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`;

export const  FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    padding: 3rem;
;

    @media (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const  FooterLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 36px;
`;

export const  FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01b7f1;
        transition: 0.2s ease-in-out;
    }

`;

export const  SocialMedia = styled.section`
  max-width: 1000px;  
  width: 100%;
`;

export const  SocialMediaWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0 auto;
    max-width: 1100px;

    @media (max-width: 820px) {
        flex-direction: column;
    }


`;


export const  SocialLogo = styled.section`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: bold;

`;

export const  WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;

`;

export const  SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`;

export const  SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px
`;



