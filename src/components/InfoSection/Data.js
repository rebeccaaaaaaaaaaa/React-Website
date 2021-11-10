export const homeObj = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'A DAMA DA LUZ',
    headline: 'FUNÇÃO : MAGO',
    description: 'Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.',
    buttonLabel: 'Saiba mais', // texto do botão
    imgStart: false, // definir se a imagem aparece primeiro ou não
    img: require('../../images/1.jpg').default, // imagem
    alt: 'imagem lux', // alt da imagem
    dark: false, 
    primary: false, // cor primária 
    darkText: false, // texto da descrição
    show: false

};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Habilidades',
    headline: 'Passiva: Iluminação',
    description: 'As habilidades de Lux marcam o alvo com energia luminosa por 6s. Ao atacar o inimigo marcado, Lux incendeia a energia, causando dano mágico com base no seu nível.',
    buttonLabel: 'Ver habilidade',
    imgStart: true,
    img: require('../../images/lux-passiva.jfif').default,
    alt: 'discover',
    dark: true,
    primary: true,
    darkText: true,
    show: false
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Lorem Ipsum',
    headline: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: require('../../images/image.svg').default,
    alt: 'signup',
    dark: true,
    primary: true,
    darkText: true,
    show: true
};