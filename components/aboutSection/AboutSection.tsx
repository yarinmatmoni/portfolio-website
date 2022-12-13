import React from 'react';
import Image from 'next/image';
import { aboutMe } from '../../utils/content/index';
import style from './AboutSection.module.scss';

function AboutSection() {
    return (
        <div className="section">
            <div className={style.aboutMeContainer}>
                <div className={style.info}>
                    <h2>About</h2>
                    <p className={style.subtitle}>Who I Am</p>
                    <p className={style.aboutMe}>{aboutMe}</p>
                </div>
                <div className={style.image}>
                    <Image src='/images/laptop.jpg' height='260' width='330' alt='laptop'></Image>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;