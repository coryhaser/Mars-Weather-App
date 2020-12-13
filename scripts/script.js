const userAction = async () => {
    const key = 'XQsdsJWF7an4Pge3Rp6qIEcX35IdxI8jfnmSdDWF'
    const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=XQsdsJWF7an4Pge3Rp6qIEcX35IdxI8jfnmSdDWF&feedtype=json&ver=1.0');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    console.log(myJson);
  }