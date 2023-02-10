export class Currency {
  static async getSupportedCodes() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`).then(
      (response)=>{
        return response.json();
      },
      (error)=>{
        return error.json();
      }
    );
  }
  static async getExchangeRateFromUSD(toCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${toCurrency}`).then(
      (response)=>{
        return response.json();
      },
      (error)=>{
        return error.json();
      }
    );
  }
}