import { Currency } from './currency.js';

window.onload = () => {
  populateSupportedCodes();
  let form = document.querySelector("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    let inputUSD = document.getElementById("input").value;
    let toCurrency = document.querySelector("option:checked").id;
    let ratePromise = Currency.getExchangeRateFromUSD(toCurrency);
    ratePromise.then(
      (response)=>{
        displayOutput(response.conversion_rate);
      },
      (error)=>{

      }
    );
  };
};

function displayError(msg) {
  let errorSpot = document.getElementById("errorSpot");
  errorSpot.innerText = msg.toUpperCase();
}

function displayOutput(msg) {
  let outputSpot = document.getElementById("output");
  outputSpot.innerText = msg;
  displayError("");
}

function populateSupportedCodes() {
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
      displayError(`${error.result} ${error["error-type"]}`);
    });
}