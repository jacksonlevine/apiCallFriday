export class Currency {
  static async getSupportedCodes() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`).then(
      (response) => {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return error;
      }
      );
  }
  static async getExchangeRateFromNToN(fromCurrency, toCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromCurrency}/${toCurrency}`).then(
      (response) => {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return error;
      }
      );
  }
  static async getAllExchangeRates() {
    return fetch('https://open.er-api.com/v6/latest/USD').then(
      (response) => {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      }
    )
      .catch((error) => {
        return error;
      });
  }
}