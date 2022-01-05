import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import nlp from '../assets/nlp.png';

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");


  // Add the image to our existing div.
  const logo = new Image();
  logo.src = nlp;
document.getElementById("logo").appendChild(logo);


export {
    checkForName,
    handleSubmit,
   }