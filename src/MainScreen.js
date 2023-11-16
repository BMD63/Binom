import Header from './Header'
import FixedArticle from './FixedArticle';
import Background from './Backround';
import SystemUpdates from './SystemUpdates';

function MainScreen(props){
  
    
    return(
        <div className="binomo__main-sreen">
          <div class="binomo__layer" ></div>
          <Background/>
          <Header setVisibility = {props.setVisibility}/>
          <FixedArticle/>
          <SystemUpdates/>
        </div>
    )
}
export default MainScreen