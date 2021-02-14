import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./component/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "./component/footer/footer";
import { Main } from "./component/Main/main";
import { Abc } from "./context";

export const App = () => {
    return (
        <Abc>
            <div>
                <GlobalStyle />
                <Navbar />
                <Abc />
                <Main />
                <Footer />
            </div>
        </Abc>
    );
};
