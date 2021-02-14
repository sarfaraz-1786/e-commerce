import React, { useContext } from "react";
import { DivItems, Img, AddCart } from "./main.elements";
import { Productcontext } from "../../context";
export const ItemsComponent = (props) => {
    const { item1, cart1 } = useContext(Productcontext);
    const [cart, setcart] = cart1;

    const Add = (cartproduct) => {
        const exist = cart.find((x) => x.title === cartproduct.title);
        if (exist) {
            setcart(
                cart.map((x) =>
                    x.title === cartproduct.title
                        ? { ...exist, qty: exist.qty + 1 }
                        : x
                )
            );
        } else {
            setcart([...cart, { ...cartproduct, qty: 1 }]);
        }
    };

    const Remove = (cartproduct) => {
        const exist = cart.find((x) => x.title === cartproduct.title);
        if (exist) {
            setcart(cart.filter((x) => x.title !== cartproduct.title));
        } else {
            setcart(
                cart.map((cart) =>
                    cart.title === cartproduct.title
                        ? { ...exist, qty: exist.qty - 1 }
                        : cart
                )
            );
        }
    };

    const Cartrender = () => {
        console.log(cart);
    };
    return (
        <DivItems>
            <Img src={props.img} />
            <h2>{props.title}</h2>
            <h3>price ${props.price}</h3>
            <AddCart onClick={() => Add(props)}>Add to Cart</AddCart>
        </DivItems>
    );
};
