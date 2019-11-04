let given_seconds = 1290284123;
dateObj = new Date(given_seconds * 1000);
hours = dateObj.getUTCHours();
minutes = dateObj.getUTCMinutes();
seconds = dateObj.getSeconds();

timeString = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toString().padStart(2, '0');

console.log(timeString);

function getDateForPay (shippingDate, deferPeriod = 1) {
    return (shippingDate.setDate(shippingDate.getDate() + deferPeriod));
  }
  
  console.log('getDateForPay : ' + getDateForPay(new Date(2030, 4 - 1, 10), 10));

  let newTest = new Date ();
  console.log(newTest.setDate(newTest.getDate() + 10));