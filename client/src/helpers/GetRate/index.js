const getRate = function (value) {
  let myRates = { rate: 0, 100: 0, 250: 0, 500: 0, 1000: 0 };

  // First value range 1 - 1,500
  if (value > 1 && value <= 1500) {
    myRates.rate = 25;
    let new100 = myRates.rate * 0.975;
    myRates[100] = new100.toFixed(2);
    myRates[250] = myRates.rate * 0.952;

    // Second value range 1,501 - 15,000
  } else if (value > 1500 && value <= 15000) {
    let newRate = value * 0.0165;
    myRates.rate = Math.round(newRate);

    let new100 = myRates.rate * 0.975;
    myRates[100] = new100.toFixed(2);

    // myRates[100] = myRates.rate * 0.975;
    let new250 = myRates.rate * 0.952;
    myRates[250] = new250.toFixed(2);
  }
  // Third value range 15,001 - 30,000
  else if (value > 15000 && value <= 30000) {
    let newRate = value * 0.0205;
    myRates.rate = Math.round(newRate);

    let new100 = myRates.rate * 0.975;
    myRates[100] = new100.toFixed(2);

    // myRates[100] = myRates.rate * 0.975;
    let new250 = myRates.rate * 0.952;
    myRates[250] = new250.toFixed(2);
  }
    // Final value range 30,001 - 150,000
    else if (value > 30000 && value <= 150000) {
        let newRate = value * 0.025;
        myRates.rate = Math.round(newRate);
    
        let new100 = myRates.rate * 0.975;
        myRates[100] = new100.toFixed(2);
    
        // myRates[100] = myRates.rate * 0.975;
        let new250 = myRates.rate * 0.952;
        myRates[250] = new250.toFixed(2);
      }
  return myRates;
};

export default getRate;
