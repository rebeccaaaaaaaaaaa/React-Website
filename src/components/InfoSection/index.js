import React from 'react'
import {
InfoContainer, 
InfoWrapper,
InfoRow, 
Column1, 
TextWrapper, 
TopLine, 
Heading, 
Subtitle, 
BtnWrapper,
Column2,
ImgWrapper,
Img,
} from "./InfoElements"
import {Button} from "../ButtonElement"

const InfoSection = ({show, primary, dark, dark2, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>  
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrapper>
                                <Button 
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    show={show ? 1 : 0}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}

                                                                    
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;