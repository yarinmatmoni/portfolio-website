import React from 'react';
import Image from 'next/image';
import { mainSection, iconsMainSection } from '../../utils/content/index';
import style from './MainSection.module.scss';

//TODO: Download cv on click the icon

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
                                <a href={icon.href} target='_blank' rel="noreferrer">
                                    <Image src={icon.src} alt={icon.alt} height="30" width="30"></Image>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;