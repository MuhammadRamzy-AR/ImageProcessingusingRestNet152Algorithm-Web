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
              Pada model ResNet-152 versi 1 didapatkan nilai akurasi tertinggi sebesar 0.9986
              dan validation accuracy tertinggi sebesar 0.9244. Sedangkan pada model ResNet-152 versi 2
              didapatkan akurasi tertinggi sebesar 0.9967 dan validation accuracy tertinggi yaitu 0.9335
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
              ResNet-152 versi 1 dan ResNet-152 versi 2 disusun menggunakan library keras
              dengan nilai input shape '(100, 100, 3)', pooling 'avg', weights 'imagenet',
              classes '4', dan classifier activation 'softmax'
            </span>
          </div>

          {/* kosong */}
          <div className="border border-garis/60 rounded-br-[50px] gap-[20px] px-[30px] flex flex-row rounded-tl-[50px] w-[567px] h-40 justify-center items-center">
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
                Pengujian Model
              </span>
            </div>
            <span className="text-sm text-hitam font-medium text-justify w-[356px]">
              Masing-masing model dilatih dan diuji menggunakan 30 epoch dan 32 batch size pada prosesnya.
              Masing-masing model ResNet-152 diberikan optimizer 'SGD'
              dengan nilai learning rate sebesar '0.01' dan loss 'sparse_categorical_crossentropy'.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
