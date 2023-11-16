import { useState } from "react";
function DiGcRow(props){
    let formData=props.formData
    let setFormData=props.setFormData
    let blockValue=props.value
    const [data, setData]=useState();
    let arr = []
    const [list, setList]= useState(arr)
    if (data===','){setData('')}
    return(
<div className="diGc__row">
    <div className="diGtags" id={props.divId}>
        <label for="problemsList">{props.labelText}</label>
        <input className="listInput" type="text" data-id = {props.dataKey} id={props.InputId} value={data} onChange={
            (e)=>{
                setData(e.target.value); 
                setFormData({...formData, [props.dataKey]:[...list]})
              }}
            onKeyDown={(ev)=>{
                if(data){
                if (ev.key ===","||ev.code === "Enter" || ev.code === "NumpadEnter"){
                setList([...list,data]);
                setData('')
                }
                }
                else{
                    if (ev.key ===","||ev.code === "Enter"){
                    setList([...list]);
                    setData('')
                    }
                }
                
              }}/>
        <ul id={props.ulId} className="tagList">
        {list.map((elem,index)=> <li key={index}>{elem} <span key={index} class="rmTag" onClick={(event)=>{
            
            setList(list.toSpliced(event.target.key,1));

            setFormData({...formData, [props.dataKey]:[...list.toSpliced(event.target.key,1)]});
        }}></span> </li>)}
        </ul>
    </div>
</div>
    )
}
export default DiGcRow
