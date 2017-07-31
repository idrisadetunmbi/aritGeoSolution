module.exports = {
    
    aritGeo: (inputArray) => {

        // tests invalid input - inputs that are not arrays
        if(!(inputArray instanceof Array)) {
            return undefined;
        }

        // tests if input array is not empty
        if (inputArray.length === 0) {
            return 0;
        }

        // input array cannot be tested as either arithmetic or geometric 
        // if number of elements are less than 3
        // function should return -1 in this case stating inputArray is neither
        if ((inputArray.length === 1) || (inputArray.length === 2)) {
            return -1;
        }

        // checks if elements of input are all numbers
        if (inputArray.some(isNaN)) {
            return undefined;
        }

        if (isArithmetic(inputArray)) {
            return "Arithmetic";
        }

        if (isGeometric(inputArray)) {
            return "Geometric";
        }

        // default case when inputArray is neither arithmetic nor geometric
        return -1;

    },
}

function isArithmetic(inputArray) {
    let firstTerm = inputArray[0],
        commonDifference = inputArray[1] - inputArray[0];
        
    for(let n = 2; n < inputArray.length; n++) {
      let nthTerm = firstTerm + (n * commonDifference);
      if(inputArray[n] !== nthTerm ) {
        return false
      }
    }
    return true;
}

function isGeometric(inputArray) {
    let firstTerm = inputArray[0],
        commonRatio = inputArray[1] / inputArray[0];
        
    for(let n = 2; n < inputArray.length; n++) {
      let nthTerm = firstTerm * (Math.pow(commonRatio, n));
      if(inputArray[n] !== nthTerm ) {
        return false
      }
    }
    return true;
}