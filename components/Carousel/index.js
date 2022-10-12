// Copyright 1999-2022. Plesk International GmbH. All rights reserved.
import React, { useState } from "react";
import style from "./Carousel.module.css";
import Image from "next/image";
import Button from "../Button";

const Carousel = () => {
  return (
    <div className={style.container} id="sectionberanda">
      <div className={style.button}>
        <span className={style.text}>
          IDENTIFIKASI PENYAKIT COVID-19 BERDASARKAN CITRA RONTGEN PARU-PARU
        </span>
        <Button variant="auth">
          <a href="#sectionidentifikasiv1">Mulai</a>
        </Button>
      </div>
      <div className={style.wrapper_gambar}>
        <Image src="/assets/carousel1.png" alt="icon" layout="fill" />
      </div>
    </div>
  );
};

export default Carousel;
