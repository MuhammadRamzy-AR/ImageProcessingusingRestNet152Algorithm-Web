// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React from "react";

export const InputGambar = () => {
  return (
    <div className="z-10">
      <div className=" border-2 rounded-3xl border-hitam w-[700px]  h-[48px]">
        <input
          type="file"
          className=" w-full text-sm text-hitam font-semibold
              file: -m-[2px]
          file:ml-[1px]        
  file:mr-4
  file:h-[48px] 
   file:px-10
  file:rounded-l-3xl 
  file:text-sm file:font-semibold
  file:bg-hitam file:text-white
  hover:file:bg-black
  file:cursor-pointer
        "
        />
      </div>
    </div>
  );
};
