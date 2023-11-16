function Reason(props){
    return(
            <li>
              <div className="bwl__item">
                <div className="bwl__icon-row">
                  <i className="bwl__icon"></i>
                </div>
                <div className="bwl__details">
                  <div className="bwld__title">{props.title}</div>
                  <div className="bwld__text"><p>{props.text}</p></div>
                </div>
              </div>
            </li>
    )
}
export default Reason