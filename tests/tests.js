const assert = require('chai').assert;
const expect = require('chai').expect;
const aritGeo = require('../src/main.js');

describe("aritGeo", () => {

    describe("handles invalid input", () => {
        it("should return undefined for a string", () => {
           assert.equal(aritGeo.aritGeo((" "), undefined)); 
        });
        
        it("should return undefined if any element of input array is not an integer", () => {
           assert.equal(aritGeo.aritGeo(new Object()), undefined); 
        });
    
    });

    describe("handles specific cases", () => {
        
        it("should return -1 if length of inputArray is 1", () => {
           assert.equal(aritGeo.aritGeo([1]), -1); 
        });

        it("should return -1 if length of inputArray is 2", () => {
           assert.equal(aritGeo.aritGeo([1, 2]), -1); 
        });

        it("should return 0 if length of inputArray is 0", () => {
           assert.equal(aritGeo.aritGeo([]), 0); 
        });
    
    });

    describe("handles correct input", () => {
        
        it("should return \"Arithmetic\" for input [1, 2, 3, 4, 5]", () => {
           assert.equal(aritGeo.aritGeo([1, 2, 3, 4, 5]), "Arithmetic"); 
        });

        it("should return \"Geometric\" [3, 6, 12, 24, 48]", () => {
           assert.equal(aritGeo.aritGeo([3, 6, 12, 24, 48]), "Geometric"); 
        });

        it("should return \"Arithmetic\" [10, 8, 6, 4, 2, 0]", () => {
           assert.equal(aritGeo.aritGeo([10, 8, 6, 4, 2, 0]), "Arithmetic"); 
        });

        it("should return \"Geometric\" [100, 10, 1, 0.1]", () => {
           assert.equal(aritGeo.aritGeo([100, 10, 1, 0.1]), "Geometric"); 
        });

        it("should return -1 if input is neither arithmetic nor geometric: [12, 24, 36, 48, 61]", () => {
           assert.equal(aritGeo.aritGeo([12, 24, 36, 48, 61]), -1); 
        });

        it("should return -1 if input is neither arithmetic nor geometric [12, 24, 36, 48, 61]", () => {
           assert.equal(aritGeo.aritGeo([12, 36, 145, 618]), -1);
        });

        it("should return 0 if input array is empty", () => {
           assert.equal(aritGeo.aritGeo([]), 0); 
        });

        
    
    });

    
});