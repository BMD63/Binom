import React, { useEffect, useRef } from "react";
function VideoPart() {
   /*  const videoEl = useRef(null);
  
    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []); */
  
    return (
        <div className="binomo__bg">
          <video
            style={{width: "100%", margin: "0 auto" }}
            autoPlay
            loop
            muted
            alt="All the devices"
            // src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.mp4"
          >
          <source src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.webm" type="video/webm"/>
            </video>
        </div>
      
    );
  }

export default VideoPart