/*
 * T N A I    A P I
 * Support: https://discord.gg/2BQMYyV
 */

const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const endpoints = require('./endpoints.json');

async function getContent(url, token) {
  let options = {
    "headers": {
      "Authorization": token
    }
  };
  let res = await fetch(url, options);
  let body = await res.json();
  let message = await body.message;
  if (res.status !== 200) throw new Error(`[API ERROR] Message: ${message}.`);
  return body;
};

class TnaiAPI {
  sfw = {};
  // hentai= {};
  // real = {};
  constructor(token) {
    let baseURL = 'https://tnai.ml/api/image?type=';
    if (!token) throw new Error("[NO TOKEN INCLUDED] Didn't include an access token, get it on the website. (https://tnai.ml/)");

    Object.keys(endpoints.sfw).forEach((endpoint) => {

      this.sfw[endpoint] = async (queryParams) => {
        let url = new URL(`${baseURL}${endpoint}`);
        if (queryParams)
          url.search = new URLSearchParams(queryParams);
        let response = await getContent(url.toString(), token);
        return response.url;
      };

    });
  }
}
module.exports = TnaiAPI;
