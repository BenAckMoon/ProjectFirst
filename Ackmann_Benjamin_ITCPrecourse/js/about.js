//MAPS section
 
const mainMap = document.getElementById("mainMap");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let counter = 0; 

const arrayOfMaps = [
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7645738711!2d2.276994617758111!3d48.85894658164104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sil!4v1657566794692!5m2!1sfr!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119495249!2d-0.3817879464619542!3d51.52873519424309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Royaume-Uni!5e0!3m2!1sfr!2sil!4v1657566830028!5m2!1sfr!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54272.6414480989!2d35.176551235335076!3d31.769392469551544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJ%C3%A9rusalem!5e0!3m2!1sfr!2sil!4v1657569318946!5m2!1sfr!2sil",
];

const moveBack = () => {
  if (counter !== 0) {
    counter--;
    mainMap.src = arrayOfMaps[counter];
  }
  nextButton.disabled = false;
  //nextButton.classList.add("enabled");

  if(counter === 0){
    previousButton.disabled = true;
    //nextButton.classList.add("disabled");
  }
console.log(counter);
};

const moveForward = () => {
  if (counter !== arrayOfMaps.length - 1) {
    counter++;
    mainMap.src = arrayOfMaps[counter];
  } 
  previousButton.disabled = false;
  previousButton.classList.add("enabled");
  previousButton.classList.remove("disabled");

  if (counter === arrayOfMaps.length - 1) {
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
    nextButton.classList.remove("enabled");
  }
console.log(counter);
};

console.log(previousButton, nextButton);

previousButton.addEventListener("click", moveBack);
nextButton.addEventListener("click", moveForward);



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