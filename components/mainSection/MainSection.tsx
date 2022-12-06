import React from 'react';
import Image from 'next/image';
import { mainSection } from '../../utils/content/index';
import style from './MainSection.module.scss';

function MainSection() {
    return (
        <div className='section'>
            <div className={style.container}>
                <div className={style.top}>
                    <Image src="/svg/programming-animate.svg" height="300" width="300" alt="Code Image"></Image>
                    <h1>Yarin Matmoni</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div className={style.bottom}>
                    <p>{mainSection}</p>
                </div>
            </div>
        </div>
    )
}

export default MainSection;