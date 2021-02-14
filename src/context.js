import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const Productcontext = createContext();

export const Abc = (props) => {
    const [items, setItems] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(() => {
        async function Fetch() {
            const data = await axios.get("http://localhost:3000/api/");
            setItems(data.data.data);
            return data;
        }
        Fetch();
    }, []);
  

    return (
        <Productcontext.Provider
            value={{
                item1: [items, setItems],
                cart1: [cart, setcart],
            }}
        >
            {props.children}
        </Productcontext.Provider>
    );
};
