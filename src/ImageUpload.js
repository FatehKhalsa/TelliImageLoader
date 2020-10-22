import React from "react";

const ImageUpload = () =>{
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const LoadImage = e => {
      const [file] = e.target.files;
      console.log(file);
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
        <>
        <input
          type="file"
          accept="image/*"
          onChange={LoadImage}
          ref={imageUploader}
        />
        <div
          style={{
            height: "500px",
            width: "500px",
            border: "1px dashed black"
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        </>
    );
}

export default ImageUpload; 