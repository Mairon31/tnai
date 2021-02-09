/*
* T N A I    A P I
* Support: https://discord.gg/2BQMYyV
*
*/ 


const fetch = require('node-fetch');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./endpoints.json');
async function getContent(url, token) {
if(!token) throw new Error("[NO TOKEN INCLUDED] Didn't include an access token, get it on the website.");
let options = {
"headers": {"Authorization": token}
}
res = await fetch(url, options),
body = await res.json(),
message = await body.message;
if(res.status !== 200) throw new Error(`[API ERROR] Message: ${message}.`);
return body; 
}
class TnaiAPI {
  constructor(token) {
    let self = this;
    self.sfw = {};
   // self.hentai = {}; // They will be back soon!
  //  self.real = {}; // Will be back soon!
    let baseURL = 'https://tnai.ml/api/image?type=';
    Object.keys(endpoints.sfw).forEach(async (endpoint) => {
      self.sfw[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.sfw[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        let response = await getContent(url.toString(), token);
        return response.url;
        };
    });
  }
}
module.exports = TnaiAPI;