// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import style from "./Modal.module.css";
import React from "react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Modal = ({ onclose }) => {
  return (
    <motion.div
      className={style.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: "0.3" }}
    >
      <div className={style.modal}>
        <div className={style.header}>
          <button onClick={onclose}>
            <Image
              src="/assets/close.png"
              alt="icon"
              width="25px"
              height="25px"
            />
          </button>
        </div>
        <div className={style.body}>
          Website ini dirancang untuk mengidentifikasi penyakit covid-19
          berdasarkan citra rontgen paru-paru dengan arsitektur model ResNet-152
          atau Residual Network 152.
        </div>
        <div>
          <fieldset className="border-t border-white">
            <legend className="mx-auto font-medium text-white text-2xl  flex items-center">
              Tahapan Identifikasi
            </legend>

            <div className="flex flex-col pt-3 px-[60px] font-normal text-sm pb-[73px] tracking-wider text-white  gap-1">
              <div className="w-full  flex flex-col">
                <div className="w-full  flex flex-row">
                  <div className="w-5 ">
                    <span>1.</span>
                  </div>
                  <div className="w-full ">
                    <span>Klik button “Mulai” di sesi beranda.</span>
                  </div>
                </div>

                <div className="w-full  flex flex-row">
                  <div className="w-5 ">
                    <span>2.</span>
                  </div>
                  <div className="w-full ">
                    <span>
                      Masukan citra rontgen paru-paru di sesi “Identifikasi
                      Penyakit Covid-19”.
                    </span>
                  </div>
                </div>

                <div className="w-full  flex flex-row">
                  <div className="w-5 ">
                    <span>3.</span>
                  </div>
                  <div className="w-full ">
                    <span>
                      Klik button identifikasi untuk melihat hasil penyakit
                      terhadap citra rontgen paru-paru.
                    </span>
                  </div>
                </div>

                <div className="w-full  flex flex-row">
                  <div className="w-5 ">
                    <span>4.</span>
                  </div>
                  <div className="w-full ">
                    <span>Rontgen paru-paru teridentifikasi.</span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
