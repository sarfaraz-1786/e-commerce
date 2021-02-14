import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #203040;
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;

    h1 {
        top: 0;
        left: 0;
        transform: translateX(2rem);
    }
    span {
        position: absolute;
        top: 1%;
        right: 0;
        transform: translateX(-3rem);
    }
`;

export const P = styled.p`
    transform: translateX(25px) translateY(-31px);
    font-size: 0.9rem;
    background-color: red;
    border-radius: 5rem;
    text-align: center;
    padding: 0.07rem;
`;
