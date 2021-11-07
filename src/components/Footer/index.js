import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {
FooterContainer,
FooterWrapper,
FooterLinkContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrapper,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                           <FooterLinkTitle>  About us </FooterLinkTitle>
                            <FooterLink to="/"> How it works </FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Carrers </FooterLink>
                            <FooterLink to="/"> Investor </FooterLink>
                            <FooterLink to="/"> Terms </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                           <FooterLinkTitle> Lorem ipsum</FooterLinkTitle>
                            <FooterLink to="/"> Lorem ipsum  </FooterLink>
                            <FooterLink to="/"> Lorem ipsum </FooterLink>
                            <FooterLink to="/"> Lorem ipsum </FooterLink>
                            <FooterLink to="/"> Lorem ipsum </FooterLink>
                            <FooterLink to="/"> Lorem ipsum </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Lorem ipsum</FooterLinkTitle>
                                <FooterLink to="/"> Lorem ipsum  </FooterLink>
                                <FooterLink to="/"> Lorem ipsum </FooterLink>
                                <FooterLink to="/"> Lorem ipsum </FooterLink>
                                <FooterLink to="/"> Lorem ipsum </FooterLink>
                                <FooterLink to="/"> Lorem ipsum </FooterLink>
                            </FooterLinkItems>

                        <FooterLinkItems>
                           <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to="/"> Instagram  </FooterLink>
                            <FooterLink to="/"> Facebook </FooterLink>
                            <FooterLink to="/"> Youtube </FooterLink>
                            <FooterLink to="/"> Twitter </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            © {new Date().getFullYear()} dolla. All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                            href=""
                            target="_blank"
                            aria-label="Facebook"> <FaFacebook/> </SocialIconLink>

                            <SocialIconLink
                            href=""
                            target="_blank"
                            aria-label="Instagram"> <FaInstagram/> </SocialIconLink>

                            <SocialIconLink
                            href=""
                            target="_blank"
                            aria-label="Youtube"> <FaYoutube/> </SocialIconLink>

                            <SocialIconLink
                            href=""
                            target="_blank"
                            aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>

    )
}

export default Footer;