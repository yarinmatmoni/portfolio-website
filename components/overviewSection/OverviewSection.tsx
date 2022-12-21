import React from 'react';
import Link from 'next/link';
import style from './OverviewSection.module.scss';

function OverviewSection({ overview, technologies, hrefCode, hrefDemo }: { overview: string, technologies: string[], hrefCode: string, hrefDemo: string }) {
    return (
        <div className="section">
            <div className={style.overviewContainer}>
                <div className={style.overview}>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <div className={style.options}>
                        <Link href={hrefCode} target='_blank' rel="noreferrer" data-href-code={hrefCode}>Code</Link>
                        <Link href={hrefDemo} target='_blank' rel="noreferrer" data-href-demo={hrefDemo}>Demo</Link>
                    </div>
                </div>
                <div className={style.technologies}>
                    <h2>Technologies</h2>
                    <ul className={style.listOfTechnologies}>
                        {technologies.map((t, index) => <li key={index}>{t}</li>)}
                    </ul>
                </div>
                <Link className={style.backLink} href='/#projects'>Back</Link>
            </div>
        </div >
    )
}

export default OverviewSection;