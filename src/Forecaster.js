import Request from "./Request"
function Forecaster(){
    return(
        <div className="binomo__forecaster">
    <div className="binomo__fixed-article">
      <div className="binomo__pic-column">
        <div className="bpc__picbox">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9v5ARYajYB4"
                  title="Binom Forecaster. System's overview."
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
        </div>
      </div>
      <div className="binomo__article-column">
        <div className="binomo__ac">
          <h3 className="binomo__title">Binom Forecaster</h3>
          <div className="binomo__ac-text">
            <p>How does Binom Forecaster work? By utilizing thousands of digital copies of professionals' thinking,
              Binom Forecaster predicts all types of risks based on your request. It provides recommendations on
              avoiding mistakes, highlights essential knowledge, and identifies individuals who can assist in each
              specific case.</p>
          </div>
          <Request/>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Forecaster