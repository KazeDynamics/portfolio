import React from "react";

const CV = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Daniel Rojas CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Daniel Rojas CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="mt-7 GradientBorderv2 w-full p-[1px] rounded-[10px]">
        <button
          className="bg-tertiary py-3 px-8 mb-0.5 rounded-[10px] outline-none w-full text-white font-bold shadow-md shadow-primary"
          onClick={onButtonClick}
        >
          Download CV 📄
        </button>
      </div>
    </>
  );
};

export default CV;
