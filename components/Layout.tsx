import React from "react";
import Navbar from "./navbar/Navbar";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <div id="content">{children}</div>
        </>
    );
}

export default Layout;