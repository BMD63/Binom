import React, {useContext} from "react"
import { ButtonConext } from "./ButtonContext"
function Request(){
    return(
        <div classNamme="binomo__bottom">
            <button className="binomo__access-button" onClick={useContext(ButtonConext)}>Request access</button>
          </div>
    )
}
export default Request