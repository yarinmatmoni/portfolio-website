import React from 'react';
import Head from "next/head";
import style from '../styles/404.module.scss';
import svg404 from 'public/svg/404_svg.svg';
import Image from 'next/image';

function PageNotFound() {
    return (
        <div className={style.container}>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className={style.imageContainer}>
                <Image src={svg404} fill alt='404'></Image>
            </div>
        </div>
    )
}

export default PageNotFound;