function validate (inputElement){
    
    if(inputElement.value ==="" && inputElement.classList.contains("simpleInput")) {
        inputElement.classList.add("error");
        return false
    }
    else inputElement.classList.remove("error")
    return true
}
export default validate
