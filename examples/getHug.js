 const TNAI = require("../index");

class MyClient {

  constructor() {
    this.tnai =  new TNAI("TOKEN");
  }

  async getGif() {
    const img = await this.tnai.sfw.hug();

    console.log(img);
  }
}

new MyClient().getGif();
