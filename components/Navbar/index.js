// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.gambar}>
        <Image src="/assets/logo.png" alt="icon" width="162px" height="61px" />
      </div>
      <div className={style.wrapper_text}>
        <button className={style.text}>
          <a href="#sectionberanda">Beranda</a>
        </button>
        <button className={style.text}>
          <a href="#sectionidentifikasiv1">Identifikasi</a>
        </button>

        <button className={style.text}>
          <a href="#sectiontentang">Tentang</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
