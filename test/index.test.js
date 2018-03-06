const expect = require('chai').expect
const {findCode,findSHA256Code} = require('../index')

describe('Code generator Test',()=>{
    it('Find SHA256 code from yearCode,Rollnumber,month  ', () => {
        expect(findSHA256Code("00451202716",18,3))
            .eql('9d2b84243ae38d814ced02e63a4d0e155cae79ce883bf4e48cc9539b3ba3706f')
    })
    it('Find  code from yearCode,Rollnumber,month  ', () => {
        expect(findCode("00451202716",18,3)).eql('302718')
    })
})