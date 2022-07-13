// You are driving home and the nearest pump is 50 miles away. On average your car runs on about 25 miles oer gallon. There are two gallons left. Write a function that tells you if it is possible to get to the pump that returns true if it is possible and false if it is not
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let ourDistance = mpg * fuelLeft
    if(ourDistance >= distanceToPump){
     return true;
    }else{
     return false
  }
  };