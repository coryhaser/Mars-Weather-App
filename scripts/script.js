const {nasa} = require("./config.js")

const userAction = async () => {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${nasa.api_key}&feedtype=json&ver=1.0`);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    console.log(myJson);
  }

  const getAPOD = async () => {
    
  }