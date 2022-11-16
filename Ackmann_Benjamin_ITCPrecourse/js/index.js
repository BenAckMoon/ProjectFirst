//Card and profileID

const GITHUB_URL = "https://api.github.com/users/BenAckMoon";

fetch(GITHUB_URL)
  .then((response) => response.json())
  .then((data) => {

  const cardImage = document.getElementById("cardImage");
  cardImage.src = data.avatar_url;
  
  const profileName = document.getElementById("profileName");
  profileName.textContent =  "Come visit my all profile like"+ " " + data.login + "(GitHub)" ;
  });

  function changetextcolor() {
    document.getElementById("textcolor").style.color = "white";
  }



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

 
