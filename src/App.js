import Footer from './Footer'
import MainScreen from './MainScreen.js';
import SecondarySection from './SecondarySection.js';
import Form from './Form';
import ThankYou from './ThankYou.jsx';
import React, {useState} from 'react';
import { ButtonConext } from './ButtonContext';
import { StyleConext } from './StyleContext';
import { ThankContext } from './ThankContext.jsx';
function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [bgStyle, setBgStyle] = useState(false);
  const [thankVisible, setThankVisible] = useState(false);
  let bg, bgg
  React.useEffect(()=>{
    
    bg = document.querySelector(".binomo__main-sreen");
    bgg = document.querySelector(".binomo__bg");
    console.log("component mounted", bg, bgg)  
  },[bgStyle]    
  )
  window.onscroll=()=>{
    setBgStyle(window.scrollY<document.querySelector(".binomo__main-sreen").offsetHeight/2 ? false:true);
  }
  return (
    <div className="App">
      <ButtonConext.Provider value = {setFormVisible}>
      <StyleConext.Provider value={bgStyle}>
      <ThankContext.Provider value={setThankVisible}>
        <MainScreen setVisibility = {setFormVisible} />
        <SecondarySection/>
        <Footer/>
        {formVisible && <Form setVisibility = {setFormVisible} setThankVisibility = {setThankVisible}/>}
        {thankVisible && <ThankYou/>}
      </ThankContext.Provider>
      </StyleConext.Provider>
      </ButtonConext.Provider>
    </div>
  );
}
export default App;
