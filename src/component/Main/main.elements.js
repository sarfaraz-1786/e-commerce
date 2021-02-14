import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import img from "../../img/img.jpg";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Divitems = styled.div`
    flex: 2;
    background-color: #e0e0e0;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
    h1 {
        margin-bottom: 0.5rem;
        font-style: italic;
        font-size: 1.7rem;
    }
`;

export const Divcart = styled.div`
    flex: 1;
    background-color: #e0e0e0;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
    h2 {
        margin-bottom: 0.5rem;
        font-style: italic;
        font-size: 1.7rem;
    }
`;

export const Divproduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.7)
        ),
        url("${img}");
`;

export const DivItems = styled(animated.div)`
    display: inline-block;
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    background: #c7d2fe66;
    position: relative;
    z-index: 1;
    border: 2px solid transparent;
    backdrop-filter: blur(10px);
    background-clip: border-box;
    border-radius: 10px;
`;

export const Img = styled.img`
    height: 192px;
`;

export const AddCart = styled.button`
    border-radius: 0.5rem;
    padding: 0.1rem 0.2rem;
    background-color: #f0c040;
    color: black;
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover {
        background-color: red;
        color: white;
    }
`;

export const Divanimated = styled(animated.div)`

`
export const Divbottom = styled.div`
margin-bottom:2rem;
`
export const Divcartitems = styled.div`
    display:flex;
    font-size:1.4rem;
    justify-content:space-around;
    margin-top:1rem;
    margin-bottom:1rem;
    animation:movetoleft 1.4s ease-out;

    @keyframes movetoleft {
        0% {
            opacity:0;
            transform:translateX(-100px);
        }
        80%{
            transform:translateX(15px);
        }
        100%{
            opacity:1;
            transform:translateX(0)
        }
    }
`
