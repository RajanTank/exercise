

const pass_Regex =  /^[\S]{8,}$/ ;
//   this regex find when perfect metch    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0,9])(?=.*[!@#\$%\^&\*\[\]"\';:_\-<>\., =\+\/\\])[^\S].{8,}$/;
const email_Regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm;
const name_Regex = /^[a-z]+$/ig;

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
      this method check when method input somthing

          let onInputForName = (element) => {
            debugger;
            if(!(name_Regex.test(element.target.value))){
                element.target.classList.add('invalid');
            }
            else{
                element.target.classList.remove('invalid');
            }
            ForSubmit();
            debugger;
          };
        let onInputForEmail = (element) => {
          debugger;
          if(!(email_Regex.test(element.target.value))){
              element.target.classList.add('invalid');
          }
          else{
              element.target.classList.remove('invalid');
          }
          ForSubmit();
        };
         let onInputForPassword = (element) => {
          if(!(pass_Regex.test(element.target.value))){
              element.target.classList.add('invalid');
          }
          else{
              element.target.classList.remove('invalid');
          }
          ForSubmit();
        };
      */
        /*

         this method for any erro occur that display error

        */
        let displayError = (id,message) => {
         document.getElementById('e_'+id).innerHTML = message ;
        };
    /*

      this method for email validation

    */
      let forEmailValidation = (element) => {
      if(element.target.value ){
         if(!email_Regex.test(element.target.value)){
              element.target.classList.add('invalid');
              displayError(element.target.id,'Please Enter Valid Email');
            }
            else{
              element.target.classList.remove('invalid');
            }
        }
        else{
              displayError(element.target.id,'Field Can\'t be Empty');
            }
            ForSubmit();
      };
      /*

      this method for password validaion

    */
      let forPasswordValidation = (element) => {
        if(element.target.value){
          if(!pass_Regex.test(element.target.value)){
             element.target.classList.add('invalid');
            displayError(element.target.id,'Password Must contains Uppercase letter, Lowercase latter, Digit or symbol');
          }
          else{
             element.target.classList.remove('invalid');
          }
        }
        else{
            displayError(element.target.id,'Field Can\'t be Empty');
          }
          ForSubmit();
      };
    /*

    this method foe when user re-entering data
    */
      let forFocusOnInput = (element) => {
          if(element.target.classList.contains('invalid')){
            debugger;
            element.target.classList.remove('invalid');
              document.getElementById('e_'+ element.target.id).innerHTML = '' ;
          }
        };
    /*
    this method foe radio butto data get and return
    */
      let checkedRadio = (data) => {
        for(let i=0; i<data.length; i++){
          if(data[i].type === 'radio' && data[i].checked ){
            return data[i].value;
          }
        }
      };
      /*
        this method for checkbox checked data get and store in array and return array
      */
    let checkedCheckbox = (data) => {
        let value =  Array();
        for(let i=0; i<data.length;  i++){
          if(data[i].type === 'checkbox' && data[i].checked){
            value.push(data[i].value);
          }
        }
      return value;
    };
    /*

      this method for when user click submit button

    */
      let submitData = () => {
         submit.disabled = true;
         let data = document.getElementsByTagName('input');
        /*  let user =  new AssignData(firstName.value,lastName.value,middleName.value,email.value,
        //    password.value,checkedRadio(data),checkedCheckbox(data));
          //  console.log(checkedRadio(data));
            users.push(user);
            console.log(users);
            debugger;
            let row = '<tr>\n  <td>' + users.firstName + '</td>\n  <td>' + users.lastname + '</td>\
            \n  <td>' + users.middlename + '</td>\n  <td>' + users.email + '</td>\
            \n  <td>' + users.password + '</td>\n  <td>' + users.gender + '</td>\
            \n  <td>' + users.hobbies + '</td>\n</tr>' ;
            tablesData.innerHTML+=row;
          */
          let row = '<tr>\n  <td>' + firstName.value + '</td>\n  <td>' + lastName.value + '</td>\
                \n  <td>' + middleName.value + '</td>\n  <td>' + email.value + '</td>\
                \n  <td>' + password.value + '</td>\n  <td>' + checkedRadio(data) + '</td>\
                \n  <td>' + checkedCheckbox(data) + '</td>\n</tr>' ;
                tablesData.innerHTML+=row;
       };
      /*
          forexercise of object using


         class AssignData {
           constructor(firstName,lastName,middleName,email,password,gender,hobbies){
             this.firstName = firstName;
             this.lastName = lastName;
             this.middleName = middleName;
             this.email = email;
             this.password = password;
             this.gender = gender;
             this.hobbies = hobbies;
           }
         }
        let users = [];

      */
    /*

      this method for name validation

    */


    let forNameValidation = (element) => {
      if(element.target.value){
        if(!name_Regex.test(element.target.value)){
              element.target.classList.add('invalid')
            displayError(element.target.id,'Please Enter Alphabet only');
        }
        else{
          element.target.classList.remove('invalid');
        }
        ForSubmit();
      }
      else{
          displayError(element.target.id,'Field Can\'t be Empty');
      }
    };
      /*

      assign handler to each input element

      */


    firstName.addEventListener("blur",forNameValidation);
    firstName.addEventListener("focus",forFocusOnInput);

    lastName.addEventListener("blur",forNameValidation);
    lastName.addEventListener("focus",forFocusOnInput);

    middleName.addEventListener("blur",forNameValidation);
    middleName.addEventListener("focus",forFocusOnInput);

    email.addEventListener("blur",forEmailValidation);
    email.addEventListener("focus",forFocusOnInput);

    password.addEventListener("blur",forPasswordValidation);
    password.addEventListener("focus",forFocusOnInput);

    submit.addEventListener("click",submitData);
