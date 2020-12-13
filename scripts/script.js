import { nasa } from "./config.js";

const userAction = async () => {
    const response = await fetch(`${nasa.api_url}/insight_weather/?api_key=${nasa.api_key}&feedtype=json&ver=1.0`);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    console.log(myJson);
  }

  const getAPOD = async () => {
    const APOD_response = await fetch(`${nasa.api_url}/planetary/?apodapi_key=${nasa.api_key}`);
    const APOD_responseJSON = await APOD_response.json();

    console.log(APOD_responseJSON)
  }