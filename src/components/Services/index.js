import React from 'react'
import {
ServicesContainer, 
ServicesH1, 
ServicesH2,
ServicesWrapper, 
ServicesCard,
ServicesIcons,
ServicesP
} from "./SevicesElements"
import Icon1 from '../../images/image.svg'
import Icon2 from '../../images/image.svg'
import Icon3 from '../../images/image.svg'

const Services = () => {
    return (
     <ServicesContainer id="services">
         <ServicesH1>Our services</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcons src={Icon1}/>
                 <ServicesH2> Lorem Ipsum</ServicesH2>
                 <ServicesP> Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. 
                 </ServicesP>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcons src={Icon2}/>
                 <ServicesH2> Lorem Ipsum</ServicesH2>
                 <ServicesP> Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. 
                 </ServicesP>
             </ServicesCard>


             <ServicesCard>
                 <ServicesIcons src={Icon3}/>
                 <ServicesH2> Lorem Ipsum</ServicesH2>
                 <ServicesP> Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. 
                 </ServicesP>
             </ServicesCard>
         </ServicesWrapper>
     </ServicesContainer>
    )
}


export default Services