// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import Image from "next/image";

const Tentang = () => {
  return (
    <div className=" w-full h-full pt-32" id="sectiontentang">
      <div>
        <fieldset className="border-t border-[#918A82]">
          <legend className="mx-auto font-semibold text-[#262626] text-3xl ">
            TENTANG APLIKASI
          </legend>
          <div className="text-[#262626] pt-4 font-medium  flex flex-col text-center justify-center">
            <span className=" text-hitam font-normal">
              Website ini dirancang sebagai alat yang dapat mengidentifikasi
              penyakit covid-19 dan melakukan
            </span>
            <span className=" text-hitam font-normal">
              perbandingan antara dua model yaitu ResNet-152 dan ResNet-152
              Versi 2 berdasarkan citra rontgen paru-paru.
            </span>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col pt-[73px]">
        {/* kolom pertama */}
        <div className="flex flex-row mb-[32px] px-[127px] gap-[52px] justify-center">
          {/* Sumber dataset */}
          <div className="border border-garis/60 rounded-tl-[50px] gap-[20px] px-[30px] flex flex-row rounded-br-[50px] w-[567px] h-40 justify-center items-center">
            <div className=" flex-col w-[130px] text-sm  gap-1 items-center justify-center flex">
              <div className="w-[24px] h-[24px]  ">
                <Image
                  src="/assets/Dataset.png"
                  alt="icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <span className="text-sm text-hitam font-medium">
                Sumber Dataset
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[356px]">
              Dataset diambil dari situs Mandeley Data yang merupakan gabungan
              dataset dari kaggle.com dan github yang dihimpun oleh Italian
              Society of Medical Interventional Radiology (SIRM).
            </span>
          </div>

          {/* Tingkay akurasi */}
          <div className="border border-garis/60 rounded-tr-[50px] gap-[20px] px-[30px] flex flex-row rounded-bl-[50px] w-[567px] h-40 justify-center items-center">
            <div className=" flex-col w-[130px] text-sm  gap-1 items-center justify-center flex">
              <div className="w-[24px] h-[24px]  ">
                <Image
                  src="/assets/Akurasi.png"
                  alt="icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <span className="text-sm text-hitam font-medium">
                Tingkat Akurasi
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[356px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              pretium id eget in in scelerisque at etiam. Ullamcorper neque
              proin placerat elementum aenean purus euismod cursus ornare.
            </span>
          </div>
        </div>

        {/* kolom kedua */}
        <div className="flex flex-row  mb-[109px] px-[127px] gap-[52px] justify-center">
          {/* Model Arsitektur */}
          <div className="border border-garis/60 rounded-bl-[50px] gap-[20px] px-[30px] flex flex-row rounded-tr-[50px] w-[567px] h-40 justify-center items-center">
            <div className=" flex-col w-[130px] text-sm  gap-1 items-center justify-center flex">
              <div className="w-[24px] h-[24px]  ">
                <Image
                  src="/assets/Arsitektur.png"
                  alt="icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <span className="text-sm text-hitam font-medium">
                Model Arsitektur
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[356px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              pretium id eget in in scelerisque at etiam. Ullamcorper neque
              proin placerat elementum aenean purus euismod cursus ornare.
            </span>
          </div>

          {/* kosong */}
          <div className="border border-garis/60 rounded-br-[50px] gap-[20px] px-[30px] flex flex-row rounded-tl-[50px] w-[567px] h-40 justify-center items-center">
            <div className=" flex-col w-[130px] text-sm  gap-1 items-center justify-center flex">
              <div className="w-[24px] h-[24px]  ">
                <Image
                  src="/assets/Akurasi.png"
                  alt="icon"
                  width="24px"
                  height="24px"
                />
              </div>
              <span className="text-sm text-hitam font-medium">
                masih kosong
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[356px]">
              masih kosonng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
