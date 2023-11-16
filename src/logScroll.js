function logScroll(){
    
    console.log("scroll", window.scrollY, "--", document.documentElement.scrollTop, "--", document.querySelector(".mainScreen").offsetHeight, "--", document.querySelector(".binomo__bg").offsetHeight)
  }
  export default logScroll