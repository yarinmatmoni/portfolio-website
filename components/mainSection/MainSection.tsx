import React from 'react';
import Image from 'next/image';
import { mainSection, iconsMainSection } from '../../utils/content/index';
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
                    <div className={style.icons}>
                        {iconsMainSection.map((icon, index) => (
                            <div key={`${index}_${icon.alt}`} className={style.roundContainer}>
                                <Image src={icon.src} alt={icon.alt} height="32" width="32"></Image>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;