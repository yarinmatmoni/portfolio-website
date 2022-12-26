import Head from "next/head";
import React from "react";
import Navbar from "./navbar/Navbar";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href="/icons/developer_icon.svg" />
            </Head>
            <Navbar />
            <div id="content">{children}</div>
        </>
    );
}

export default Layout;