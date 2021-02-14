import React,{useCallback, useContext} from "react";
import { Nav } from "./Navbar.element";
import Axios from "axios";
import axios from "axios";
import {Productcontext} from "../../context";
import {P} from "./Navbar.element"
export const Navbar = () => {
    const {item1,cart1} = useContext(Productcontext);
    const [cart,setcart] = cart1;

    const Fetch = async () => {
        await axios.get("http://localhost:3000/api/").then((response) => {
            console.log(response.data.data);
        });
    };
    return (
        <Nav>
            <h1>E-Commerce</h1>
            <span>
                <i className="fas fa-cart-plus" />
                <P>{cart.length}</P>
            </span>
            
        </Nav>
    );
};
