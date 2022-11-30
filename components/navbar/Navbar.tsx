import React, { useState } from "react";
import Image from "next/image";
import Hamburger from '../hamburger/Hamburger';
import { nav } from '../../utils/content/common';
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <Image src='/icons/developer_icon.svg' alt='developer icon' height='50' width='50'></Image>
      <ul className={styles.menu} data-open={isOpen}>
        {nav.map((menuItem, index) => <li key={index}>{menuItem}</li>)}
      </ul>
      <Hamburger onMenuClick={() => onMenuClick()} isOpen={isOpen} />
    </nav >
  )
}

export default Navbar;
