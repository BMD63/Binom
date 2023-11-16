import Forecaster from "./Forecaster"
import Adviser from "./Adviser"
import Legacy from "./Legacy"
function Articles(){
    return(
        <div className="products">
            <h2 className="bss__title">3 main products of Binom</h2>
            <Forecaster/>
            <Adviser/>
            <Legacy/>
        </div>
    )
}
export default Articles