const assert = require('chai').assert;
const expect = require('chai').expect;
const aritGeo = require('../src/main.js');

describe("aritGeo", () => {

    describe("handle invalid input", () => {
        it("should return undefined for a string", () => {
           assert.equal(aritGeo.aritGeo(" ", "undefined")); 
        });

        it("should return 0 for an empty array", () => {
           assert.equal(aritGeo.aritGeo([], 0)); 
        });
        
    });

    
});