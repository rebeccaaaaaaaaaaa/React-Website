import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;

    @media (max-width: 768px) {
        height: 1100px;
    }

    @media (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 1rem;
    padding: 0 50px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns:  1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const ServicesIcons = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

