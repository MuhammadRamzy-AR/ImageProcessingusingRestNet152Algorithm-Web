// Copyright 1999-2022. Plesk International GmbH. All rights reserved.
import { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import Image from "next/image";
import Button from "../Button";
import Modal from "../Modal";
import { InputGambar } from "../InputGambar";

const Penyakit = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" w-full " id="sectionidentifikasi">
      <div className="pt-28">
        <fieldset className="border-t border-[#918A82]">
          <legend className="mx-auto font-semibold text-[#262626] text-3xl ">
            IDENTIFIKASI PENYAKIT COVID-19
          </legend>
          <div className="text-[#262626] pt-4 font-medium  flex flex-col text-center justify-center">
            <span className=" text-hitam font-normal">
              Masukan citra rontgen paru-paru untuk mengidentifikasi paru-paru
              tersebut terpapar
            </span>
            <span className=" text-hitam font-normal">
              {" "}
              penyakit Covid-19 ataupun tidak.
            </span>
          </div>
        </fieldset>
        <div className="flex flex-row w-full gap-3 justify-center pt-12">
          <button
            className=" pt-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <Image
              src="/assets/Information.png"
              alt="icon"
              width="25px"
              height="25px"
            />
          </button>
          {showModal ? (
            <Modal onclose={() => setShowModal(false)}></Modal>
          ) : null}

          <InputGambar />
        </div>
        <div className="flex justify-center pt-5">
          <Button variant="auth">Identifikasi</Button>
        </div>
      </div>
    </div>
  );
};

export default Penyakit;
