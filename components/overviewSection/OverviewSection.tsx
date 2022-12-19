import React from 'react';
import Link from 'next/link';
import style from './OverviewSection.module.scss';

function OverviewSection({ overview, technologies }: { overview: string, technologies: string[] }) {
    return (
        <div className="section">
            <div className={style.overviewContainer}>
                <div className={style.overview}>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <div className={style.options}>
                        <Link href='/'>Code</Link>
                        <Link href='/'>Demo</Link>
                    </div>
                </div>
                <div className={style.technologies}>
                    <h2>Technologies</h2>
                    <ul className={style.listOfTechnologies}>
                        {technologies.map((t, index) => <li key={index}>{t}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection;