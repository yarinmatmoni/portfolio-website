import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div>
      <Image src='/icons/developer_icon.svg' alt='developer icon' height='60' width='60'></Image>
    </div >
  )
}

export default Navbar;
