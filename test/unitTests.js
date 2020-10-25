const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function() {
    it('should return 9 when adding 6 and 3', function() {
        assert.equal(functions.sum(6, 3), 9);
    });

    it('should return -9 when adding -6 and -3', function() {
        assert.equal(functions.sum(-6, -3), -9);
    });

    it('should return -4 when adding 1 and -5', function() {
        assert.equal(functions.sum(1, -5), -4);
    });

    it('should return 1 when adding 1 and 0', function() {
        assert.equal(functions.sum(1, 0), 1);
    });
});

describe('product', function() {
    it('should return 9 when multiplying 3 and 3', function() {
        assert.equal(functions.product(3, 3), 9);
    });

    it('should return 1 when multiplying 1 and 1', function() {
        assert.equal(functions.product(1, 1), 1);
    });

    it('should return 0 when multiplying 0 and 2', function() {
        assert.equal(functions.product(0, 2), 0);
    });

    it('should return -4 when multiplying 2 and -2', function() {
        assert.equal(functions.product(2, -2), -4);
    });

    it('should return 4 when multiplying -2 and -2', function() {
        assert.equal(functions.product(-2, -2), 4);
    });
});

describe('min', function() {
    it('should return 5 when comparing 5 and 10', function() {
        assert.equal(functions.min(5, 10), 5);
    });

    it('should return 0 when comparing 0 and 1', function() {
        assert.equal(functions.min(0, 1), 0);
    });

    it('should return -5 when comparing -5 and 5', function() {
        assert.equal(functions.min(-5, 5), -5);
    });

    it('should return -7 when comparing -5 and -7', function() {
        assert.equal(functions.min(-5, -7), -7);
    });
});

describe('max', function() {
    it('should return 7 when comparing 5 and 7', function() {
        assert.equal(functions.max(5, 7), 7);
    });

    it('should return 4 when comparing 4 and 2', function() {
        assert.equal(functions.max(4, 2), 4);
    });

    it('should return -5 when comparing -5 and -8', function() {
        assert.equal(functions.max(-5, -8), -5);
    });

    it('should return -7 when comparing -10 and -7', function() {
        assert.equal(functions.max(-10, -7), -7);
    });
});

describe('head', function() {
    it('should return 0 when comparing 0, 5 and 10', function() {
        assert.equal(functions.head([0,5,10]), 0);
    });

    it('should return apple when comparing apple,orange and grapes', function() {
        assert.equal(functions.head(["apple","orange","grapes"]), "apple");
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.isNull(functions.head(arr));
    });
});

describe('tail', function() {
    it('should return 8 when comparing 2,4 and 8', function() {
        assert.equal(functions.tail([2,4,8]), 8);
    });

    it('should return tomato when comparing onion,carrot and tomato', function() {
        assert.equal(functions.tail(["onion","carrot","tomato"]), "tomato");
    });

    it('should return null when the provided array is empty []', function(){
        var arr = [];
        assert.isNull(functions.tail(arr));
    });
});

describe('mid', function() {
    it('should return 3 when comparing 1,3 and 5', function() {
        assert.equal(functions.mid([1,3,5]), 3);
    });

    it('should return jag when comparing major,jag and mark', function() {
        assert.equal(functions.mid(["major","jag","mark"]), "jag");
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.isNull(functions.mid(arr));
    });

    it('should return fan and air when comparing mobile,fan,air and call', function() {
        assert.equal(functions.mid(["mobile","fan","air","call"]), "fan,air");
    });
});

describe('total', function() {
    it('should return 20 when comparing 5,7 and 8', function() {
        assert.equal(functions.total([5,7,8]), 20);
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.equal(functions.total(arr), 0);
    });

    it('should return 6 when comparing -1,2 and 5', function() {
        assert.equal(functions.total([-1,2,5]), 6);
    });

    it('should return 0 when comparing -3,3 and 0', function() {
        assert.equal(functions.total([-3,3,0]), 0);
    });
});

describe('average', function() {
    it('should return 10 when comparing 10,10 and 10', function() {
        assert.equal(functions.average([10,10,10]), 10);
    });

    it('should return 5 when comparing 2,3,7 and 8', function() {
        assert.equal(functions.average([2,3,7,8]), 5);
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.isNull(functions.average(arr));
    });

    it('should return 2 when comparing -2,5 and 3', function() {
        assert.equal(functions.average([-2,5,3]), 2);
    });
});

describe('smallest', function() {
    it('should return 4 when comparing 5,4 and 8', function() {
        assert.equal(functions.smallest([5,4,8]), 4);
    });

    it('should return -5 when comparing 10,5 and -5', function() {
        assert.equal(functions.smallest([10,5,-5]), -5);
    });

    it('should return -6 when comparing -2,-4 and -6', function() {
        assert.equal(functions.smallest([-2,-4,-6]), -6);
    });
});

describe('largest', function() {
    it('should return 4 when comparing 0,2 and 4', function() {
        assert.equal(functions.largest([0,2,4]), 4);
    });

    it('should return -2 when comparing -6,-2 and -5', function() {
        assert.equal(functions.largest([-6,-2,-5]), -2);
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.isNull(functions.largest(arr));
    });
});

describe('merge', function() {
    it('should return [1,2,3,4] if arr1 is [1,3] and arr2 is [2,4]', function() {
        assert.deepEqual(functions.merge([1,3], [2,4]), [1,2,3,4]);
    });

    it('should return ["strawberry","tommy hilfiger","mango","calvin klein"] if arr1 is ["strawberry","mango"] and arr2 is ["tommy hilfiger","calvin klein"]', function() {
        assert.deepEqual(functions.merge(["strawberry","mango"], ["tommy hilfiger","calvin klein"]), ["strawberry","tommy hilfiger","mango","calvin klein"]);
    });

    it('should return [6,"mercedes benz",3,"audi"] if arr1 is [6,3] and arr2 is ["mercedes benz","audi"]', function() {
        assert.deepEqual(functions.merge([6,3], ["mercedes benz","audi"]), [6,"mercedes benz",3,"audi"]);
    });

    it('should return null when the provided array is empty []', function() {
        let arr = [];
        assert.isNull(functions.largest(arr));
    });

    it('should return [5,6] if arr1 is [] and arr2 is [5,6]', function() {
        assert.deepEqual(functions.merge([], [5,6]), [5,6]);
    });

});