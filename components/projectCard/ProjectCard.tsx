import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.scss';
import weather from 'public/images/weather.png'
import parental from 'public/images/parental.png'
import fit from 'public/images/fit.png'
import music from 'public/images/music.png'
import colors from 'public/images/colors.png'
import portfolio from 'public/images/portfolio.png'


const images: any = {
    weather,
    parental,
    fit,
    music,
    colors,
    portfolio,
};

const getImageByKey = (key: string) => {
    return images[key]
}

function ProjectCard({ name, src, alt, skills, href }: { name: string, src: string, alt: string, skills: string[], href: string }) {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <div className={styles.card}>
            <Image src={getImageByKey(src)} alt={alt} height='210' width='420'/>
            <div className={styles.details} onMouseLeave={handleHover} onMouseEnter={handleHover} data-hover={hover}>
                <p className={styles.name}>{name}</p>
                <p className={styles.skills}>{skills.map((skill) => `${skill} `)}</p>
                <Link className={styles.link} href={href}>
                    For More Information
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;
