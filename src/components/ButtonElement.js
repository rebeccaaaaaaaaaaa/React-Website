import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background-color: ${({primary}) => (primary ? 'rgb(11, 196, 226)' : '#fff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({light}) => (light ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    display: ${({show}) => (show ? 'block' : 'none')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    display: ${({show}) => (show ? 'block' : 'none')};
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: ${({primary}) => (primary ? '#fff' : 'rgb(11,196,226)')};
        color: ${({dark}) => (dark ? '#010606' : '#000')};
    }
`