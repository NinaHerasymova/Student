const { AList } = require('../AList');

describe('.init', function() {
  const arr = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('init arr', function() {
    assert.deepEqual(arr.init(), [2, 4, 8, 6, 10, 1, 2, 14]);
  });
});
describe('.size', function() {
  const arr = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('size of arr', function() {
    assert.equal(arr.size(), 8);
  });
  it('size of arr', function() {
    const arr = new AList([2, 4, 14]);
    assert.equal(arr.size(), 3);
  });
});
describe('.addStart', function() {
  const arrStart = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('add element to the start', function() {
    assert.equal(arrStart.addStart(100), 9);
  });
  it('add element to the start', function() {
    assert.equal(arrStart.addStart(4), 10);
  });
});

describe('.addEnd', function() {
  const arrEnd = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('add element to the end', function() {
    assert.equal(arrEnd.addEnd(17), 9);
  });
  it('add element to the end', function() {
    assert.equal(arrEnd.addEnd(25), 10);
  });
});
describe('.delStart', function() {
  const arrDelStart = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('delete element from the start', function() {
    assert.equal(arrDelStart.delStart(), 2);
  });
  it('delete element from the start', function() {
    assert.equal(arrDelStart.delStart(), 4);
  });
});
describe('.delEnd', function() {
  const arrDelEnd = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('delete element from the end', function() {
    assert.equal(arrDelEnd.delEnd(), 14);
  });
  it('delete element from the end', function() {
    assert.equal(arrDelEnd.delEnd(), 2);
  });
});
describe('.delPosition', function() {
  const arrDelPos = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('delete element by index', function() {
    assert.equal(arrDelPos.delPosition(3), 6);
  });
  it('delete element by index', function() {
    arrDelPos.clear();
    assert.equal(arrDelPos.delPosition(4), 10);
  });
});
describe('.get', function() {
  const arrGet = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('get element by index', function() {
    assert.equal(arrGet.get(5), 1);
  });
  it('get element by index', function() {
    assert.equal(arrGet.get(3), 6);
  });
});
describe('.set', function() {
  const arrSet = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('set element by index (5, 255)', function() {
    arrSet.set(5, 255);
    assert.equal(arrSet.get(5), 255);
  });
  it('set element by index (2, 154)', function() {
    arrSet.set(3, 154);
    assert.equal(arrSet.get(3), 154);
  });
});
describe('.toString', function() {
  it("transform into type 'string'", function() {
    const arrString = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.equal(arrString.toString(), '2486101214');
  });
  it("transform into type 'string'", function() {
    const arrString = new AList([4, 23, 4, 78, 869, 34]);
    assert.equal(arrString.toString(), '42347886934');
  });
});
describe('.clear', function() {
  const arrClear = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it('clear array', function() {
    arrClear.delEnd();
    assert.deepEqual(arrClear.clear(), [2, 4, 8, 6, 10, 1, 2, 14]);
  });
  it('clear array', function() {
    arrClear.set(5, 255);
    assert.deepEqual(arrClear.clear(), [2, 4, 8, 6, 10, 1, 2, 14]);
  });
});
describe('.min', function() {
  it('find min element of array', function() {
    const arrMin = new AList([2, -4, 8, 6, 10, 1, 2, 14]);
    assert.equal(arrMin.min(), -4);
  });
  it('find min element of array', function() {
    const arrMin = new AList([2, 4, 8, 6, -10, 1, 2, 14]);
    assert.equal(arrMin.min(), -10);
  });
});
describe('.max', function() {
  it('find max element of array', function() {
    const arrMax = new AList([2, 4, 8, 6, 510, 1, 2, 14]);
    assert.equal(arrMax.max(), 510);
  });
  it('find max element of array', function() {
    const arrMax = new AList([2, 4, 8, 6, 10, 1, 1002, 14]);
    assert.equal(arrMax.max(), 1002);
  });
});
describe('.sort', function() {
  it('sorting array', function() {
    const arrSort = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.deepEqual(arrSort.sort(), [1, 2, 2, 4, 6, 8, 10, 14]);
  });
  it('sorting array', function() {
    const arrSort = new AList([2, 4, -8, 6, 10, 1, 2, -14]);
    assert.deepEqual(arrSort.sort(), [-14, -8, 1, 2, 2, 4, 6, 10]);
  });
});
describe('.maxIndex', function() {
  it('index of max element', function() {
    const arrMaxIn = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.equal(arrMaxIn.maxIndex(), 7);
  });
  it('index of max element', function() {
    const arrMaxIn = new AList([2, 4, 8, 586, 10, -1, 2, 14]);
    assert.equal(arrMaxIn.maxIndex(), 3);
  });
});
describe('.minIndex', function() {
  it('index of min element', function() {
    const arrMinIn = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.equal(arrMinIn.minIndex(), 5);
  });
  it('index of min element', function() {
    const arrMinIn = new AList([2, 4, -8, 6, 10, 1, -582, 14]);
    assert.equal(arrMinIn.minIndex(), 6);
  });
});
describe('.reverse', function() {
  it('reversing array', function() {
    const arrReverse = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.deepEqual(arrReverse.reverse(), [14, 2, 1, 10, 6, 8, 4, 2]);
  });
  it('reversing array', function() {
    const arrReverse = new AList([22, 38, 7, 10, 15, 235, 14]);
    assert.deepEqual(arrReverse.reverse(), [14, 235, 15, 10, 7, 38, 22]);
  });
});
describe('.halfReverse', function() {
  it('replace and reverse halves', function() {
    const arrHalfReverse = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
    assert.deepEqual(arrHalfReverse.halfReverse(), [6, 8, 4, 2, 14, 2, 1, 10]);
  });
  it('replace and reverse halves', function() {
    const arrHalfReverse = new AList([23, 5, 784, 96, 52, 4, 8]);
    assert.deepEqual(arrHalfReverse.halfReverse(), [784, 5, 23, 96, 8, 4, 52]);
  });
});
describe('.addPosition', function() {
  const arrPos = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
  it("add '566' to arr(3)", function() {
    arrPos.addPosition(3, 566);
    assert.deepEqual(arrPos.get(3), 566);
  });
  it("add '33' to arr(5)", function() {
    arrPos.addPosition(5, 33);
    assert.deepEqual(arrPos.get(5), 33);
  });
});
