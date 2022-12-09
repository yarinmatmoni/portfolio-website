import React from 'react';
import Image from 'next/image';
import style from './SkillCard.module.scss';

function SkillCard({ name, src, alt, color }: { name: string, src: string, alt: string, color: string }) {
    return (
        <div className={style.cardContainer} style={{ boxShadow: `0px 5px 5px 2px ${color}70` }}>
            <p>{name}</p>
            <Image src={src} height="80" width="80" alt={alt}></Image>
        </div>
    )
}

export default SkillCard;