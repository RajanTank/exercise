const passRegex =  /^[\S]{8,}$/ ;
const emailRegex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm;
const nameRegex = /^[a-z]+$/ig;

        /*
          this method for every time when value right
        */

          let ForSubmit = () => {
                let d = document.getElementsByClassName('invalid')
                if(d.length>0){
                  document.getElementById("submit").disabled = true;
                }
                else{
                  document.getElementById("submit").disabled = false;
                }
          };
       /*
         this method for any erro occur that display error
        */
        let displayError = (id,message) => {
         document.getElementById('e_'+id).innerHTML = message ;
        };
      /*
        this method for  validation of  email, password and name
      */
        let forValidation  = (regex, message,element) => {
            debugger;
            console.log(element.target.id);
            console.log(regex);
            if(!regex.test(element.target.value)){
              element.target.classList.add('invalid');
              displayError(element.target.id,message);
            }
            else{
              element.target.classList.remove('invalid');
            }
        }
         /*
        this method call particular input validation function  
        */
        let forValidatingInput = (element) => {
            if(element.target.value){
                  if(element.target.id == "email"){
                    forValidation(emailRegex,'Please Enter Valid Email',element);
                  }
                  else if(element.target.id == 'password'){
                    forValidation(passRegex,'Please Enter valid Password',element);
                  }
                  else if(element.target.id == 'firstName'|| element.target.id == 'lastName'||element.target.id == 'middleName'  ){
                    forValidation(nameRegex,'Please Enter Alphabet only',element);
                  }
            }
            else{
                  displayError(element.target.id,'Field Can\'t be Empty');
            }
            ForSubmit();
          };
       /*
        this method for when user re-entering data
        that time the error message will be disappear 
      */
          let forFocusOnInput = (element) => {
              if(element.target.classList.contains('invalid')){
                  element.target.classList.remove('invalid');
                  document.getElementById('e_'+ element.target.id).innerHTML = '' ;
              }
            };
        /*
            this method for getting checked radio button return
        */
            let checkedRadios = (data) => {
            return Array.from(data).filter(item => item.type == 'radio' && item.checked).map(item => item.value); 
            }
          /*
          this method for checkbox checked data get and store in array and return array
        */
            let checkedCheckbox = (data) => {
                return Array.from(data).filter(item => item.type === 'checkbox' && item.checked).map(item => item.value) ? checkedData : 'Nothing Selected'; 
            }
        /*
        this method for when user click submit button
        */
          let submitData = () => {
            submit.disabled = true;
            let  data = document.getElementsByTagName('input');
              let row = '<tr>\n  <td>' + firstName.value + '</td>\n  <td>' + lastName.value + '</td>\
                    \n  <td>' + middleName.value + '</td>\n  <td>' + email.value + '</td>\
                    \n  <td>' + password.value + '</td>\n  <td>' + checkedRadios(data) + '</td>\
                    \n  <td>' + checkedCheckbox(data) + '</td>\n</tr>' ;
                    tablesData.innerHTML+=row;
          };
      /*
       assign handler to each input element
      */
      firstName.addEventListener("blur",forValidatingInput);
      firstName.addEventListener("focus",forFocusOnInput);

      lastName.addEventListener("blur",forValidatingInput);
      lastName.addEventListener("focus",forFocusOnInput);

      middleName.addEventListener("blur",forValidatingInput);
      middleName.addEventListener("focus",forFocusOnInput);

      email.addEventListener("blur",forValidatingInput);
      email.addEventListener("focus",forFocusOnInput);

      password.addEventListener("blur",forValidatingInput);
      password.addEventListener("focus",forFocusOnInput);

      submit.addEventListener("click",submitData);
