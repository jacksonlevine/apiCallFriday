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
  static async getExchangeRateFromUSD(toCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${toCurrency}`).then(
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
}