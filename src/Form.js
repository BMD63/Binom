import React, {useState} from 'react';
import getData from './getData';
import DiGcRow from './DiGcRow';
function Form(props){
  const [formData, setFormData] = useState([])
  let formElements = document.querySelectorAll('input')
        return(
        <div className="overflow__modal">
  <div className="binomo__modal">
    <div className="modal__inner">
      <i className="modal__close" onClick={() => props.setVisibility(false)}></i>
      <h2 className="modal__title">Request access</h2>
      <form id="myForm" onSubmit={(ev)=>{
        getData(ev,formElements,formData, props.setVisibility, props.setThankVisibility)
       
      }
      }>
        <div className="modal__inputGroup">
          <div className="diG__column">
            <div className="diGc__row">
              <div className="diGc__iput-area"><input className = "simpleInput" id="name" type="text" name="firstName" value={formData.firstName} placeholder="First Name *" onChange={(e)=> setFormData({...formData, firstName:e.target.value})}/>
              </div>
            </div>
            <div className="diGc__row">
              <div className="diGc__iput-area"><input className = "simpleInput" type="text" name="lastName" value={formData.lastName} placeholder="Last Name *" onChange={(e)=> setFormData({...formData, lastName:e.target.value})}/>
              </div>
            </div>
            <div className="diGc__row">
              <div className="diGc__iput-area"><input className = "simpleInput" type="text" name="email" value={formData.email} placeholder="E-mail *" onChange={(e)=> setFormData({...formData, email:e.target.value})}/>
              </div>
            </div>
            <div className="diGc__row">
              <div className="diGc__iput-area"><input className = "simpleInput" type="text" name="orgName" value={formData.orgName} placeholder="Your company *" onChange={(e)=> setFormData({...formData, orgName:e.target.value})}/>
              </div>
            </div>
          </div>
          <div className="diG__column">
            <div className="diGc__row">
              <div className="diGc__iput-area"><input className = "simpleInput" type="text" name="title" value={formData.title} placeholder="Your position *" onChange={(e)=> setFormData({...formData, title:e.target.value})}/>
              </div>
            </div>
            <DiGcRow 
            divId = "problemsContainer" 
            inputId = "problemsTag" 
            ulId="problemsList"
            labelText = "Usual problems you solve *"
            formData={formData}
            setFormData={setFormData}
            value = {formData.problem}
            dataKey = "problems"
            />
            <DiGcRow 
            divId = "skillsContainer" 
            inputId="skillsTag" 
            ulId="skillsList"
            labelText="Your basic 3 skills *"
            formData={formData}
            setFormData={setFormData}
            value={formData.skills}
            dataKey = 'skills'
            />
          </div>
        </div>
        <div className="modal__Bottom">
          <button>Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
export default Form