/*
* T N A I    A P I
* TNAI is an interactive API delegated by a token system for obtaining gif in a random way.
*
* **SUPPORT:** https://discord.gg/2BQMYyV
*/

const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const endpoints = require('./endpoints.json');

module.exports = class TnaiAPI {
  sfw = new Object();

  /**
  * Main class with which you can access each function to obtain a gif from a certain endpoint.
  * @param {string} token - You can get some token on (https://tnai.ml/).
  */
  constructor(token) {
    const baseURL = 'https://tnai.ml/api/image?type=';
    if (!token) throw new Error("[NO TOKEN INCLUDED] Didn't include an access token, get it on the website. (https://tnai.ml/).");

    Object.keys(endpoints.sfw).forEach((endpoint) => {

      this.sfw[endpoint] = async (queryParams) => {
        let url = new URL(`${baseURL}${endpoint}`);
        if (!url || (url && !url.search)) throw new Error("[INVALID ENDPOINT SEARCH] The endpoint doesn't have a valid search parameter.");

        if (queryParams) url.search = new URLSearchParams(queryParams);
        let response = await this.getContent(url.toString(), token);
        if (!response || (response && !response.url)) throw new Error("[INVALID RESPONSE] The client received an invalid response, please go to our support Discord for get help.");


        return response.url;
      };
    });
  }

  /**
  * @name getContent
  * 
  * With this function you can make requests to the API in a more personalized way.
  * @param {string} url - API Endpoint.
  * @param {string} token - Your secret token.
  */
  async getContent(url, token) {
    if(!(url || token) || (url && token && !url.startsWith("https://tnai.ml/api/image?type="))) throw new Error ("[INVALID PARAMETERS] You dont includes URL or Token, or your URL doesn't match with any TNAI api endpoint.");
    let res = await fetch(`${url}`, {
      "headers": {
        "Authorization": `${token}`
      }
    }).then((res) => res.json());
    if (res.status !== 200) throw new Error(`[API] An error has ocurred, error: ${res.message}.`);
    if (!res.url) throw new Error(`[API] An error has ocurred, error: The response doesn't contain an URL, please check our support Discord for get information about API issues.`);
    return res || null;
  }
}
