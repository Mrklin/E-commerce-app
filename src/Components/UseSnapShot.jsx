import React from 'react'
// import { useEffect, useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import html2canvas from 'html2canvas';

const UseSnapShot = (elementId, fileName, fileType) => {
    
    const element = document.getElementById(elementId);
    if(!element){
      return;
    }
     html2canvas(element).then((canvas)=>{
      let image = canvas.toDataURL("image/jpeg");
      // console.log("the image is", image);
      const a = document.createElement("a");
      a.href = image;
      a.download = "Capture.jpeg";
      a.click();
      
     }).catch(err=> {
      console.error("We cannot take the screenshot of you element at the moment", err);
      
     })
}

export default UseSnapShot