import Partners from './Partners.js'
import WhyCreate from './WhyCreate.js'
import Articles from './Articles'
function SecondarySection(){
    return(
        <div className="binomo__secondary-section">
          <Articles/>
          <WhyCreate/>
          <Partners/>
        </div>
    )
}
export default SecondarySection