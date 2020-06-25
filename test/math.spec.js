//com biblioteca CHAI:

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function(){
        value = 0;
    });

    it('Sum two numbers',function(done) {const math = new Math();
        this.timeout(3000);

        value = 5,

        math.sum(value,5, value => {
           // assert.equal(value,10);
           expect(value).to.equal(10);
            done();
        })
    });

 
    
    //PARA COMPARAR OBJETOS:
    it('Multiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Gisleine Moreira'
        };
        const obj2 = {
            name: 'Gisleine Moreira'
        };

        expect(obj).to.deep.equal(obj2);
    });  

    //função espiã:
    
    it.only('Calls req with sun and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!')
            }
        };
       // sinon.spy(res, 'load');
       //substituir o método:
       sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');

    });

});