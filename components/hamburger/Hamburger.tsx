import React, { MouseEventHandler } from 'react';
import styles from './Hamburger.module.scss';

function Hamburger({ onMenuClick, isOpen }: { onMenuClick: MouseEventHandler, isOpen: boolean }) {
    return (
        <div className={styles.hamburgerContainer} onClick={onMenuClick} data-open={isOpen}>
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
        </div>
    )
}

export default Hamburger;