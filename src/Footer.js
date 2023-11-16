import React, {useContext} from "react"
import { ButtonConext } from "./ButtonContext"
function Footer() {
  const request = useContext(ButtonConext)
    return (
        <footer className="footer__section">
            <div className="binomo__fixed-article">
    <div className="footer__container">
      <p>If you are interested in this product, please leave your application, and we will respond<br/> within two
        business days.</p>
      <div className="footer__action-row">
        <button className="request" onClick={request}>Request access</button>
      </div>
    </div>
  </div>
        </footer>
    )
}
export default Footer