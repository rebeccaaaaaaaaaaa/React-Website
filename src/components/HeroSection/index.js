import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                    autoPlay 
                    loop 
                    muted 
                    src={Video}
                    type="video/mp4"
                />
            </HeroBg>
            <HeroContent>
                 <HeroP>A DAMA DA LUZ</HeroP>
                 <HeroH1> LUX </HeroH1>
                 <HeroP>Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança.</HeroP>
             
                <HeroBtnWrapper >
                    <Button to="about" 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary="false"
                            light="false"
                            show="true"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact={`${true}`}
                            offset={-80}

                    >  Saiba Mais 
                    {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection