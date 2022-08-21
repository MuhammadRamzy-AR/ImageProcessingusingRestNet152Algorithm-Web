// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import Title from "../components/Title";
import Carousel from "../components/Carousel";
import { Footer, Modal, Navbar, Penyakit, Tentang } from "../components";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Title>Beranda</Title>
        <Navbar />
        <Carousel />
        <Penyakit />
        <Tentang />

        <Footer />
      </MainLayout>
    </>
  );
}
