import React, {useContext} from "react"
import { StyleConext } from './StyleContext';
function Header(props) {
    let bgClass = useContext(StyleConext);
    return(
        <div>
            <header className="binomo__header" style={bgClass? {background : "rgba(15, 18, 19, 1)" , zIndex : "21"} : {background : "none"}}>
                <div className="binomo__fixed-article">
                    <a href="#" className="logotype"><img src="images/logo.svg" alt=""/></a>
                    <div className="binomo__user-section">
                        <a href="https://binom.digital/login" target="_blank">Login</a>
                        <a href="#" id="request_access" onClick={()=>props.setVisibility(true)}>Request access</a>
                    </div>
                </div>
  </header>
        </div>
    )
}
export default Header