import {expect} from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })
  it('should require a number', function(){
    expect(factorial(5)).to.be.a('number')
  })
  it('should return value of 1 for factorial(1)', function(){
    expect(factorial(1)).to.equal(1)
  })
  it('should return value of integer multiplied by all lower integers', function(){
    expect(factorial(5)).to.equal(120)
  })

})
