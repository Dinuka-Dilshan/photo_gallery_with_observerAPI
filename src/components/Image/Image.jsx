import { saveAs } from "file-saver";

import "./Image.css";
import { FiDownloadCloud } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";

const Image = React.forwardRef(({ src }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  const clickHandler = () => {
    saveAs(src, "photo_book_image.jpg");
  };

  const onLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  },[]);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <img
        onLoad={onLoad}
        ref={imageRef}
        src={src}
        alt=""
        style={{
          objectFit: "cover",
          padding: 0,
          margin: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      {isLoaded && (
        <div className="image-download-btn-wrapper" onClick={clickHandler}>
          <FiDownloadCloud size={30} color={"#A43DA1"} />
        </div>
      )}
    </div>
  );
});

export default Image;
