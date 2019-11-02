let given_seconds = 1290284123;
dateObj = new Date(given_seconds * 1000);
hours = dateObj.getUTCHours();
minutes = dateObj.getUTCMinutes();
seconds = dateObj.getSeconds();

timeString = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toString().padStart(2, '0');

console.log(timeString);