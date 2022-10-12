// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import React, {useState, useEffect} from "react";
import Button from "../Button";
import Image from "next/image";
import Modal from "../Modal";

export const InputGambarV2 = () => {

  const [showModal, setShowModal] = useState(false);
  let [prediction, setPrediction] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const Upload = async() => {
      await fetch('http://localhost:5000/resnetv2', {
        method: 'POST',
        body: formData
      }).then(resp => {
        resp.json().then(data => {
          setPrediction(data)
          console.log(data)
        })
      })
    }
    Upload();
  }


  return (
  <div className="z-10">
    <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
      <div className="form-inline justify-content-center mt-5">
        <div className=" border-2 rounded-3xl border-hitam w-[700px]  h-[48px]">
            {/* <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4">Image :  </label> */}
              <div className="input-group">
                  <input type="file" id="image" name="file" 
                  accept="image/*" className="file-custom w-full text-sm text-hitam font-semibold
                  file: -m-[2px]
              file:ml-[1px]        
      file:mr-4
      file:h-[48px] 
      file:px-10
      file:rounded-l-3xl 
      file:text-sm file:font-semibold
      file:bg-hitam file:text-white
      hover:file:bg-black
      file:cursor-pointer"/>
              </div>
        </div>
      </div>
      
      {/* button identifikasi */}
      <div className="flex justify-center pt-5">
        <div className="input-group justify-content-center mt-4">
            <Button variant="auth" type="submit" className="btn btn-md btn-primary pt-1">Identifikasi</Button>
        </div>
      </div>

    </form>
    {/* Menampilkan output prediction/classification */}
    <div className="border border-garis/60 rounded-br-[50px] gap-[20px] px-[30px] rounded-bl-[50px] gap-[50px] px-[30px] flex flex-row rounded-tl-[50px] w-[700px] rounded-tr-[50px] w-[700px] h-20 justify-center items-center mt-4">
      <div className=" flex-col w-[130px] text-sm  gap-1 items-center justify-center flex">
        <div className="w-[20px] h-[24px]  ">
          <Image
            src="/assets/Dataset.png"
            alt="icon"
            width="24px"
            height="24px"
          />
        </div>
        <span className="text-sm text-hitam font-medium">
          Hasil Identifikasi ResNet 152 versi 2
        </span>
      </div>
      <span className="text-sm text-hitam font-medium text-justify w-[356px]">
            {prediction && <h1 className="mx-auto font-semibold text-[#262626] text-1xl">{prediction.result}</h1>}
      </span>
    </div>
  </div>
  );
};
