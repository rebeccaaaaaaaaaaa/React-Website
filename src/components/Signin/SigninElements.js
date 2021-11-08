import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
    min-height: 622px;
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    background-color: red;

`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 32px;

    @media (max-width: 480px) {
        margin-left: 16px;
        margin-top: 6px;
    }

`;


export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480x) {
        height: 80%;
    }
`;

export const Form = styled.form`
    background-color: #010101;
    max-width: 400px;
    height: auto;
    z-index: 1;
    display: grid;
    margin 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;


export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;


export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border-none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;