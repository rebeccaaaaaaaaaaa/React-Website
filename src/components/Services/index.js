import React from 'react'
import {
ServicesContainer, 
ServicesH1, 
ServicesH2,
ServicesWrapper, 
ServicesCard,
ServicesIcons
} from "./SevicesElements"
import Icon1 from '../../images/batalha.jpg'
import Icon2 from '../../images/elementalista.jpg'
import Icon3 from '../../images/guardia.jpg'

const Services = () => {
    return (
     <ServicesContainer id="services">
         <ServicesH1> Skins (só as as minhas preferidas)</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
                 <ServicesIcons src={Icon2}/>
                 <ServicesH2> Lux Elementalista </ServicesH2>
             </ServicesCard>

             <ServicesCard>
                 <ServicesIcons src={Icon1}/>
                 <ServicesH2> Lux Academia de Batalha </ServicesH2>
             </ServicesCard>


             <ServicesCard>
                 <ServicesIcons src={Icon3}/>
                 <ServicesH2>Lux Guardiã Estelar</ServicesH2>
             </ServicesCard>
         </ServicesWrapper>
     </ServicesContainer>
    )
}


export default Services