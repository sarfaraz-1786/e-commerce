import React, { useContext } from "react";
import { Productcontext } from "../../context";
import {
    Container,
    Divcart,
    Divitems,
    Divproduct,
    Divanimated,
    Divcartitems,
    Divbottom,
} from "./main.elements";
import { ItemsComponent } from "./mainComponent";
import { useSpring, animated, config } from "react-spring";

const calc = (x, y) => [
    (y - window.innerHeight / 2) / 40,
    (x - window.innerWidth / 2) / 45,
    1,
];
const trans = (x, y, s) =>
    `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Main = () => {
    const { item1, cart1 } = useContext(Productcontext);
    const [items, setItems] = item1;
    const [cart, setcart] = cart1;
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 10, tension: 170, friction: 50 },
    }));
    const cartprice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        <Container>
            <Divitems>
                <h1>Mobile Products</h1>
                <Divproduct>
                    {items.map((items) => {
                        return (
                            <Divanimated
                                key={items._id}
                                onMouseMove={({ clientX: x, clientY: y }) =>
                                    set({ xys: calc(x, y) })
                                }
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{
                                    transform: props.xys.interpolate(trans),
                                }}
                            >
                                <ItemsComponent
                                    key={items._id}
                                    title={items.title}
                                    img={items.img}
                                    company={items.company}
                                    price={items.price}
                                    total={items.total}
                                    count={items.count}
                                />
                            </Divanimated>
                        );
                    })}
                </Divproduct>
            </Divitems>
            <Divcart>
                <h2>Cart</h2>
                <Divbottom>
                    {cart.length === 0 && <h2>cart is empty</h2>}
                </Divbottom>
                <hr />
                {cart.map((cart) => (
                    <Divcartitems key={cart.title}>
                        <div>{cart.title}</div>
                        <div>
                            {cart.qty} x ${cart.price.toFixed(2)}
                        </div>
                    </Divcartitems>
                ))}
                <strong style={{ fontSize: "1.6rem" }}>
                    TotalCost = ${cartprice}
                </strong>
                <hr />
            </Divcart>
        </Container>
    );
};
