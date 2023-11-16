import React, { useContext } from "react";
import { ThankContext } from "./ThankContext";
function ThankYou (){
const close = useContext(ThankContext)
return(
    <div class="thankYou__modal">
    <div class="thankYou__box">
      <div class="tYb__inner">
        <span class="tYb__close" onClick={()=>close(false)} ></span>
        <p>Thank you, we will review your application and respond to you within 24 hours via email.</p>
        <button class="thackYou_btn" onClick={()=>close(false)}>ok</button>
      </div>
    </div>
  </div>
)
}
export default ThankYou