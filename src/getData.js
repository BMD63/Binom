import validate from "./validate"
import validateList from "./validateList"
    async function getData (ev,form, formData, setVisibility, setThankVisibility){
      const dataArray = [...form]
        let isValidate = true;
        dataArray.forEach(element => {
          if(element.classList.contains("simpleInput")){
            validate(element)
            isValidate = isValidate && validate(element);
          }
          else{
            validateList(element,formData);
            isValidate = isValidate && validate(element);
          }
        }
        )
        let dataToSend = {
          name : formData.firstName + " " + formData.lastName,
          email : formData.email,
          orgName : formData.orgName,
          title : formData.title,
          problems : formData.problems,
          skills : formData.skills
        }
        console.log('-----------------dataToSend------------')
        for (let key in dataToSend){

          console.log(key, dataToSend[key])
        }
        if (isValidate){
          try {
            const response = await fetch('https://prod-api.binom.digital/signup/legacy', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataToSend),
            })
      
            if (response.ok) {
              setVisibility(false);
              setThankVisibility(true)
            } else {
              console.error('Code: ', response.status)
              const responseObj = await response.json()
              console.error('Error:', responseObj)
              if (responseObj.message === `Key (email)={dataArray[2].value} already exists.`) {
                dataArray[2].classsList.add('error')
              }
            }
          } catch (error) {
            console.error('Error:', error.message)
          }
        }
        else {
          ev.preventDefault()
        }

      };
export default getData