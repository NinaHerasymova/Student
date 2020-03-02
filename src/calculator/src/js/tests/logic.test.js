const math = require('../logic');


 describe("add", function () {
    it("pass val1 = 5, val2 = 10", function () {
        assert.equal(math.add('5','10'), 15);
    });
    it("pass val1 = 1.5, val2 = 10", function () {
        assert.equal(math.add('1.5','10'), 11.5);
    });            
});
describe("sub", function () {
    it("pass val1 = 25, val2 = 8", function () {
        assert.equal(math.sub(25, 8), 17);
    });
    it("pass val1 = 25.5, val2 = 8.4", function () {
        assert.equal(math.sub(25.5, 8.4), 17.1);
    });            
});
describe("mul", function () {
    it("pass val1 = 5, val2 = 10", function () {
        assert.equal(math.mul(5, 10), 50);
    });
    it("pass val1 = 1.5, val2 = 1,8", function () {
        assert.equal(math.mul(1.5, 1.8), 2.7);
    });
    
});
describe("div", function () {
    it("pass val1 = 45, val2 = 15", function () {
        assert.equal(math.div(45, 15), 3);
    });
    it("pass val1 = 10, val2 = 8", function () {
        assert.equal(math.div(10, 8), 1.25);
    });
    it("pass val1 = 10.6, val2 = 8.5", function () {
        assert.equal(math.div(10.6, 8.5), 1.2470588235294118);
    });
    it("pass val1 = 45, val2 = 0", function () {
        assert.equal(math.div(45, 0), 'Error');
    });
    it("pass val1 = 0, val2 = 0", function () {
        assert.equal(math.div(0, 0), 'Error');
    });
    it("pass val1 = 0, val2 = 8", function () {
        assert.equal(math.div(0, 8), 0);
    });
    
});