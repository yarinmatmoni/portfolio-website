import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.scss';

function ProjectCard({ name, src, alt, skills, href }: { name: string, src: string, alt: string, skills: string[], href: string }) {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    const imageSrc = require('public/images/colors.png')

    return (
        <div className={styles.card}>
            <Image src={imageSrc} alt={alt} height='210' width='420'/>
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
