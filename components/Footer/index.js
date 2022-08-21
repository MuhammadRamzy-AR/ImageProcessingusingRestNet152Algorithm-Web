// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[186px] bg-[#918A82] py-[39px]">
      <div className=" mx-[162px] h-full flex items-center">
        <div className="w-[61px] h-[61px]  ">
          <Image
            src="/assets/logo1.png"
            alt="icon"
            width="61px"
            height="61px"
          />
        </div>

        <div className="w-[358px] h-[108px] border-l mr-[325px] border-[#262626] pl-[50px] ml-[50px] font-medium text-sm text-justify text-hitam flex items-center">
          Website ini dirancang untuk penelitian tugas akhir sebagai syarat
          kelulusan dari Program Studi Informatika Itenas.
        </div>

        <div className=" flex flex-col gap-[13px]">
          <div className="flex flex-row h-[24px] 2-[24px] borde-2 gap-[11px]">
            <Image
              src="/assets/Profile.png"
              alt="icon"
              width="24px"
              height="24px"
            />
            <span className="text-[##262626] font-normal text-sm">
              Hazkia Kaikiba 15-2018-082
            </span>
          </div>
          <div className="flex flex-row h-[24px] 2-[24px] borde-2 gap-[11px]">
            <Image
              src="/assets/Mail.png"
              alt="icon"
              width="24px"
              height="24px"
            />
            <span className="text-[##262626] font-normal text-sm">
              hazkiak@mhs.itenas.ac.id
            </span>
          </div>
          <div className="flex flex-row h-[24px] 2-[24px] borde-2 gap-[11px]">
            <Image
              src="/assets/Whatsapp.png"
              alt="icon"
              width="24px"
              height="24px"
            />
            <span className="text-[##262626] font-normal text-sm">
              0896‑6972‑9069
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
