export class Currency {
  static async getSupportedCodes() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`).then(
      (response)=>{return response;},
      (error)=>{return error;});
  }
}