import Request from "./Request"
function Adviser(){
    return(
        <div className="binomo__adviser">
    <div className="binomo__fixed-article">
      <div className="binomo__article-column">
        <div className="binomo__ac">
          <h3 className="binomo__title">Binom Adviser</h3>
          <div className="binomo__ac-text">
            <p>How often do you desire not only information about your specific question but also the insights of
              competent specialists? The Binom Legacy methodology creates digital replicas of professionals'
              consciousness, including their thinking patterns, decision-making logic, skills, and knowledge base. As a
              result, you receive conclusions, solutions, and recommendations regarding your specific question,
              including:</p>
          </div>
          <ul className="binomo__color-list">
            <li><i> </i>Do not do this</li>
            <li><i> </i>Do this</li>
            <li><i> </i>Avoid these mistakes</li>
            <li><i> </i>Who can help</li>
          </ul>
          <Request/>
        </div>
      </div>
      <div className="binomo__pic-column">
        <div className="bpc__picbox"><img src="images/adviserPic.jpg" alt=""/></div>
      </div>
    </div>
  </div>
    )
}
export default Adviser