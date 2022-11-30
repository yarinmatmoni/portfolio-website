import React, { useState } from "react";
import Image from "next/image";
import Hamburger from '../hamburger/Hamburger';
import { nav } from '../../utils/content/common';
import { useLockScroll } from '../../utils/hooks/useLockScroll';
import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useLockScroll(isOpen);

  const onMenuClick = (forceClose?: boolean) => {
    setIsOpen(!isOpen && !forceClose);
  };

  return (
    <nav className={styles.navContainer}>
      <Image src='/icons/developer_icon.svg' alt='developer icon' height='50' width='50'></Image>
      <ul className={styles.menu} data-open={isOpen}>
        {nav.map((menuItem, index) => (
          <li key={index}>
            <Link href='/' onClick={() => onMenuClick(true)}>{menuItem}</Link>
          </li>
        ))}
      </ul>
      <Hamburger onMenuClick={() => onMenuClick()} isOpen={isOpen} />
    </nav >
  )
}

export default Navbar;
