import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toastiy from "../Toastiy";


import "./uploadPicStyle.css";

export default function UploadPic(props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const { close } = props;
  const closeBoxUpload = () => {
    close(false);
  };

  const sendToUpload = () => {
    let formData = new FormData();
    formData.append("image", selectedImage);

    if (selectedImage.size < 2000000) {
      if (selectedImage.type == "image/jpg" || "image/jpeg" || "image/png") {
        setShowLoader(true);

        axios
          .post("https://plus-me.ir/TestUpload/function.php", formData)
          .then((response) => {
            switch (response.data) {
              case "ok":
                setShowLoader(false);
                Toastiy("Upload is Successful", "succ");
                break;
            }
          });

        for (let [key, value] of formData) {
          formData.delete(key, value);
        }
      }
    }
  };


  return (
    <>
      <div className="backUpload">
        <span
          className="w-full h-full absolute bg-slate-700/80"
          onClick={closeBoxUpload}
        ></span>

        {showLoader && (
          <span className="boxLoader">
            <h1>Uploading Image, please wait :)</h1>
            <span className="loader"></span>
          </span>
        )}

        <div className="boxUpload">
          <div className="boxImage">
            <label htmlFor="inputFile">Select Image</label>
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt=""
                className="imgPreview"
              />
            )}
          </div>

          <input
            id="inputFile"
            type="file"
            accept="image/*"
            onChange={(event) => setSelectedImage(event.target.files[0])}
          />

          <div className="nameSize">
            <p>Image name : {selectedImage && selectedImage.name}</p>
            <div>
              <p>
                Size :{" "}
                {selectedImage && Math.floor(selectedImage.size / 1024) + " KB"}
              </p>
              <p>Type : {selectedImage && selectedImage.type}</p>
            </div>
            {selectedImage.size > 2000000 && (
              <p className="text-red-500">
                The image must be less than 2 MB in size and with jpg, jpeg, png
                extensions.
              </p>
            )}
          </div>

          <input
            type="button"
            value="Upload"
            className="uploadButton"
            onClick={sendToUpload}
          />
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
