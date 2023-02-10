import { Currency } from './currency.js';
window.onload = () => {
  let codeSelectElement = document.getElementById("convertTo");
  let codesPromise = Currency.getSupportedCodes();
  codesPromise.then(
    (response)=>{
      let newSelect = document.createElement("select");
      response.supported_codes.forEach((currency) => {
        let optionElement = document.createElement("option");
        optionElement.id = currency[0];
        optionElement.innerText = currency[1];
        newSelect.append(optionElement);
      });
      codeSelectElement.innerHTML = newSelect.innerHTML;
    },
    (error)=>{
      displayError(error);
    });
};

function displayError(msg) {
  let errorSpot = document.getElementById("errorSpot");
  errorSpot.innerText = msg;
}