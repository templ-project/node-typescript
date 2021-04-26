const {hello} = require('../src');

//
// Uncomment for Mocha
//
const {expect} = require('chai');
const {it, describe} = require('mocha');

describe('hello', function () {
  it('hello("World") to return "Hello World!"', function () {
    expect(hello('World')).to.equal('Hello World!');
  });
});

//
// Uncomment for Jest
//
// describe('hello', function () {
//   it('hello("World") to return "Hello World!"', function () {
//     expect(hello('World')).toEqual('Hello World!');
//   });
// });
