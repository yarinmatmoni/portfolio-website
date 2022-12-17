import React from 'react';
import Image from 'next/image';
import style from './ImageSection.module.scss';

function ImageSection({ src, name, skills }: { src: string, name: string, skills: string[] }) {
    return (
        <div>
            <div className={style.imageContainer}>
                <Image src={src} fill alt='Project Image'></Image>
                <div className={style.infoContainer}>
                    <div className={style.info}>
                        <h1>{name}</h1>
                        <div className={style.skills}>
                            {skills.map((skill) => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;