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

        if (testArithmetic(inputArray)) {
            return "Arithmetic";
        }

        if (testGeometric(inputArray)) {
            return "Geometric";
        }

        // default case when inputArray is neither arithmetic nor geometric
        return -1;

    },
}

function testArithmetic(inputArray) {
    let commonDifference = inputArray[1] - inputArray[0];            
    let arrayOfDifs = [];

    for(let i = 1; i < inputArray.length; i++) {
        let diff = inputArray[i+1] - inputArray[i];
        arrayOfDifs.push(diff);
    }    
    // remove NaN which is the last element of the list due to above loop
    arrayOfDifs = arrayOfDifs.splice(0, arrayOfDifs.length - 1);         
    
    // if every element of arrayOfDifs is equal to commonDifference
    if(arrayOfDifs.every((element) => { return element === commonDifference;})) { 
        return true
    }
    return false;
}

function testGeometric(inputArray) {
    let commonRatio = inputArray[1]/inputArray[0];            
    let arrayOfRatios = [];

    for(let i = 1; i < inputArray.length; i++) {
        let ratio = inputArray[i+1]/inputArray[i];
        arrayOfRatios.push(ratio);
    }    
    arrayOfRatios = arrayOfRatios.splice(0, arrayOfRatios.length - 1);

    if(arrayOfRatios.every((element) => { return element === commonRatio;})) { 
        return true
    }
    return false;
}