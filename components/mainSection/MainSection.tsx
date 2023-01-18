import React from 'react';
import Image from 'next/image';
import { mainSection, iconsMainSection } from '../../utils/content/index';
import programmingSvg from 'public/svg/programming-animate.svg';
import cvSvg from 'public/icons/cv_icon.svg';
import style from './MainSection.module.scss';

function MainSection() {
    return (
        <div className='section'>
            <div className={style.container}>
                <div className={style.top}>
                    <Image src={programmingSvg} height="300" width="300" alt="Code Image"></Image>
                    <h1>Yarin Matmoni</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div className={style.bottom}>
                    <p>{mainSection}</p>
                    <div className={style.icons}>
                        {iconsMainSection.map((icon, index) => (
                            <div key={`${index}_${icon.alt}`} className={style.roundContainer}>
                                <a href={icon.href} target='_blank' rel="noreferrer">
                                    <Image src={require(`public/icons/${icon.src}`)} height="30" width="30" alt={icon.alt}></Image>
                                </a>
                            </div>
                        ))}
                        <div className={style.roundContainer}>
                            <a href="../files/Yarin_Matmoni_CV.pdf" download>
                                <Image src={cvSvg} alt='Yarin_Matmoni_CV' height="30" width="30"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection;