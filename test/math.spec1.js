/*const assert = require('assert');
const Math = require('../src/math.js');


describe('Math class', function(){
    it('Sum two numbers',function(done){
        const math = new Math();
        this.timeout(3000);

        math.sum(5,5, (value) => {
            assert.equal(value,10);
            done();
        })
    });

//.only para q somente esse test seja executado
// .skip para o test ser ignorado

    it('Multiply two numbers', function(){
        const math = new Math();


        assert.equal(math.multiply(5,5), 25);
    });
});
_________________________________________
HOOKS: evita que repetições ocorram, 
exemplos: value 

const assert = require('assert');
const Math = require('../src/math.js');
let value = 0;

describe('Math class', function(){
    
    //hooks: 
   // before
   // beforeEach
   // after
   // afterEach   
    
    beforeEach(function(){
        value = 0;
    });

    it('Sum two numbers',function(done) {const math = new Math();
        this.timeout(3000);

        value = 5,

        math.sum(value,5, value => {
            assert.equal(value,10);
            done();
        })
    });

    it('Multiply two numbers', function(){
        const math = new Math();


        assert.equal(math.multiply(value,5), 0);

    });
 __________________________________________________
    it('Multiply two numbers', function(){
        const math = new Math();

// assert.equal(math.multiply(value,5), 0);
        expect(math.multiply(value,5)).to.equal(0);

    });

    //PARA OBJETOS:
    it('Multiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Gisleine Moreira'
        };

        expect(obj)
        .to.have.property('name')
        .equal('Gisleine Moreira');

    });  
});
*/