import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.scss';

function ProjectCard({ name, src, alt, skills }: { name: string, src: string, alt: string, skills: string[] }) {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <div className={styles.card}>
            <Image src={src} alt={alt} height='200' width='320'></Image>
            <div className={styles.details} onMouseLeave={handleHover} onMouseEnter={handleHover} data-hover={hover}>
                <p className={styles.name}>{name}</p>
                <p className={styles.skills}>{skills}</p>
                <Link className={styles.link} href={'/'}>
                    For More Information
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;