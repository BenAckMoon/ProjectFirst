//ButtonForm


  const addValue = () => {
    if (
      firstName.value !== "" &&
      emailAddress.value !== "" &&
      message.value !== ""
    ) {
      submitButton.disabled = false;
      submitButton.classList.add("form-button");
      submitButton.classList.remove("form-button-disabled");
    } else   {    
      submitButton.disabled = true;
      submitButton.classList.remove("form-button");
      submitButton.classList.add("form-button-disabled");
    }
    };

    const firstName = document.getElementById("firstName");
    firstName.addEventListener("input", addValue);

    
    const emailAddress = document.getElementById("emailAddress");
    emailAddress.addEventListener("input", addValue);

    const message = document.getElementById("message");
    message.addEventListener("input", addValue);


    const submitForm = () => {
      console.log("form");
      };
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", submitForm);



    
//Array Footer

const codingSentence = document.getElementById("codingSentence");

const codingLanguages = [
  "HTML", 
  "CSS", 
  "JavaScript"];

//a. const codingLanguages = ["HTML"]
//c. const codingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"]  

let languagesSentence = 'This website has been created with:';

for (let i = 0 ; i < codingLanguages.length; i++) {
 if (i === 0) {
  languagesSentence = languagesSentence + " " + codingLanguages[i] ;
}else if (i === codingLanguages.length -1) {
  languagesSentence = languagesSentence + " and " + codingLanguages[i] + ".";
}  else {
   languagesSentence = languagesSentence + ", " + codingLanguages[i];
 }
}
codingSentence.textContent = languagesSentence;