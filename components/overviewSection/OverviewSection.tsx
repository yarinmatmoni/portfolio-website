import React from 'react';
import Link from 'next/link';
import style from './OverviewSection.module.scss';

//TODO: Add the technologies

function OverviewSection() {
    return (
        <div className="section">
            <div className={style.overview}>
                <h2>Overview</h2>
                <p>text text text text text text text text text text text text  text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                <div className={style.options}>
                    <Link href='/'>Code</Link>
                    <Link href='/'>Demo</Link>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection;