import { Currency } from './currency.js';
import './css/styles.css';
import coins from './coins.mp3';
import { asciiNumberDisplay } from './asciiNumberDisplay.js';

window.onload = () => {
  displayAsciiCounter("4");
  populateSupportedCodes();
  let form = document.querySelector("form");
  let sound = new Audio(coins);

  form.onsubmit = (event) => {
    event.preventDefault();
    let inputUSD = parseFloat(document.getElementById("input").value);
    let toCurrency = document.querySelector("option:checked");
    let ratePromise = Currency.getExchangeRateFromUSD(toCurrency.id);
    ratePromise.then(
      (response)=>{
        if(response.conversion_rate) {
          let output = `Your amount is equal to <strong>${(parseFloat(response.conversion_rate)*inputUSD).toFixed(2)} ${toCurrency.innerText}s.</strong>
          The conversion rate is <strong>1 to ${response.conversion_rate}.</strong>`;
          displayOutput(output);
          sound.play();
        } else {
          displayError(response);
        }
        
      }
    );
  };
};

function displayError(msg) {
  let errorSpot = document.getElementById("errorSpot");
  errorSpot.innerText = msg;
}

function displayOutput(msg) {
  let outputSpot = document.getElementById("output");
  outputSpot.innerHTML = msg;
  displayError("");
}

function populateSupportedCodes() {
  let codeSelectElement = document.getElementById("convertTo");
  let codesPromise = Currency.getSupportedCodes();
  codesPromise.then(
    (response)=>{
      if(response.supported_codes) {
        let newSelect = document.createElement("select");
        response.supported_codes.forEach((currency) => {
          let optionElement = document.createElement("option");
          optionElement.id = currency[0];
          optionElement.innerText = currency[1];
          newSelect.append(optionElement);
        });
        let optionElement2 = document.createElement("option");
        optionElement2.id = "INTENTIONALERROR";
        optionElement2.innerText = "Erroneous Currency";
        newSelect.append(optionElement2);
        codeSelectElement.innerHTML = newSelect.innerHTML;
      } else {
        displayError(response);
      }
    });
}

function displayAsciiCounter(number) {
  let asciiSpot = document.getElementById("ascii");
  asciiSpot.innerText = asciiNumberDisplay.getDisplay(number);
}