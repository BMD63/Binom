import Request from "./Request"
function Legacy(){
    return(
        <div className="binomo__legacy">
    <div className="binomo__fixed-article">
      <div className="binomo__pic-column">
        <div className="bpc__picbox"><img src="images/binomLegacy.png" alt=""/></div>
      </div>
      <div className="binomo__article-column">
        <div className="binomo__ac">
          <h3 className="binomo__title">Binom Legacy</h3>
          <div className="binomo__ac-text">
            <p>This part of the project is aimed at creating digital copies of professionals' minds. Thanks to the
              advanced methodology of binom legacy, we create a replica of their thinking, decision-making methods,
              necessary knowledge base, and much more. We then transform the digital copy into artificial intelligence
              algorithms that can be used by millions of users, depending on the level of access you choose to
              grant.</p>
          </div>
          <Request/>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Legacy