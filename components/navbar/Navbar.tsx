import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from '../hamburger/Hamburger';
import { nav } from '../../utils/content/common';
import { useLockScroll } from '../../utils/hooks/useLockScroll';
import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  useLockScroll(isOpen);

  const onMenuClick = (forceClose?: boolean) => {
    setIsOpen(!isOpen && !forceClose);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 90)
        setScrollY(false);
      else
        setScrollY(true);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <nav className={styles.navContainer} data-scrollY={scrollY}>
      <Image src='/icons/developer_icon.svg' alt='developer icon' height='50' width='50'></Image>
      <ul className={styles.menu} data-open={isOpen}>
        {nav.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.href} onClick={() => onMenuClick(true)}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <Hamburger onMenuClick={() => onMenuClick()} isOpen={isOpen} />
    </nav >
  )
}

export default Navbar;
