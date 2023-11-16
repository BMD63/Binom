import Reason from "./Reason"
function WhyCreate () {
    return(
        <div className="whyCreate__section">
        <div className="binomo__fixed-article">
          <h3>Why create your own digital copy?</h3>
          <ul className="binomo__why-list">
            <Reason title = "Binom company legacy." text="You or your employee possess a vast amount of valuable information. However,
                    they may not have enough time to share it or may retire. In such cases, their digital copy can provide
                    advice based on their skills and decision-making algorithm. Just like a living person, but available
                    24/7, patiently and instantly. Binom legacy will answer questions like a live specialist."/>
            <Reason title="Binom family legacy." text="Binom family legacy. Do you want your children and grandchildren to be able to
                    seek advice from you at any time? Create your digital copy and grant them access. We will preserve it
                    for future generations."/>
            <Reason title="Binom public legacy." text="Binom public legacy. Generating income from users accessing your expertise. You
                    can make your experience available to the world. Each interaction with the system will bring you
                    revenue, and your digital copycan be invited to join teams of digital advisors through a monthly
                    subscription."/>
          </ul>
        </div>
      </div>
    )
}
export default WhyCreate