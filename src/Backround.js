import VideoPart from "./VideoPart"
import React, {useContext} from "react"
import { StyleConext } from './StyleContext';
function Background(){
  let bgClass = useContext(StyleConext);
  console.log("context:", bgClass)
    return (
        <div className="binomo__bg" style = {bgClass ? {position : "absolute", top : "100vh"} : {position : "fixed"}}>
          <video
            style={{width: "100%", margin: "0 auto", position: "absolute"}}
            autoPlay
            loop
            muted
            alt="All the devices"
            // src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.mp4"
          >
          <source src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.webm" type="video/webm"/>
            </video>
            {/* <VideoPart/> */}
                {/* <video 
                autoplay 
                muted 
                loop 
                poster="images/video_poster.png">
                <source src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.mp4" type="video/mp4"/>
                <source src="https://binom-digital-public-prod.s3.eu-central-1.amazonaws.com/website/binom_ai_presentation.webm" type="video/webm"/>
                </video> */}
        </div>
            
               

    )
}
export default Background