import { Currency } from './currency.js';
import './css/styles.css';
import coins from './coins.mp3';
import { asciiNumberDisplay } from './asciiNumberDisplay.js';

window.onload = () => {
  displayAsciiCounter("");
  populateSupportedCodes();
  let form = document.querySelector("form");
  let sound = new Audio(coins);

  let testArray = ["This is one thing", "This is another thing", "Hello this is a test", "One thing another thing", "Test test test", "Hello"];
  displayMoreInfo(testArray);

  form.onsubmit = (event) => {
    event.preventDefault();
    let inputUSD = parseFloat(document.getElementById("input").value);
    let toCurrency = document.querySelector("option:checked");
    let ratePromise = Currency.getExchangeRateFromUSD(toCurrency.id);
    ratePromise.then(
      (response)=>{
        if(response.conversion_rate) {
          let answer = (parseFloat(response.conversion_rate)*inputUSD).toFixed(2);
          let output = `Your amount is equal to <strong>${answer} ${toCurrency.innerText}s.</strong>
          The conversion rate is <strong>1 to ${response.conversion_rate}.</strong>`;
          displayAsciiCounter(answer.toString());
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
  let asciiSpot = document.getElementById("asciiNumber");
  asciiSpot.innerText = asciiNumberDisplay.getDisplay(number);
}

function displayMoreInfo(infoArray) {
  let div = document.createElement("div");
  div.className = "moreInfo";
  infoArray.forEach((string, index)=>{
    let p = document.createElement("p");
    p.innerText = string;
    p.style.opacity = '0';
    p.style.animation = 'change 0.3s forwards'
    p.style.animationDelay = `${index*0.35}s`
    div.append(p);
  });
  document.body.append(div);
}