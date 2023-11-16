function validateList(element, dataArray){
if(!dataArray[element.dataset.id]){
    element.classList.add('error');
    return false
}
else {
    element.classList.remove('error');
    return true
}
}
export default validateList