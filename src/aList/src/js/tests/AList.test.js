const { AList}  = require('../AList');


        describe(".init", function () {
            const arr = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("init arr", function () {
                assert.deepEqual(arr.init(), [2, 4, 8, 6, 10, 1, 2, 14]);
            });
        });
        describe(".size", function () {
            const arr = new AList([2, 4, 8, 6, 10, 1, 2, 14]);           
            it("size of arr", function () {
                assert.equal(arr.size(), 8);
            });
            it("size of arr", function () {
                const arr = new AList([2, 4, 14]);
                assert.equal(arr.size(), 3);
            });
        });
        describe(".addStart", function () {
            const arr_start = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("add element to the start", function () {
                assert.equal(arr_start.addStart(100), 9);
            });
            it("add element to the start", function () {
                assert.equal(arr_start.addStart(4), 10);
            });
        });
                     
        describe(".addEnd", function () {
            const arr_end = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("add element to the end", function () {
                assert.equal(arr_end.addEnd(17), 9);
            });
            it("add element to the end", function () {
                assert.equal(arr_end.addEnd(25), 10);
            });
        });
        describe(".delStart", function () {
            const arr_delStart = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("delete element from the start", function () {
                assert.equal(arr_delStart.delStart(), 2);
            });
            it("delete element from the start", function () {
                assert.equal(arr_delStart.delStart(), 4);
            });
        });
        describe(".delEnd", function () {
            const arr_delEnd = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("delete element from the end", function () {
                assert.equal(arr_delEnd.delEnd(), 14);
            });
            it("delete element from the end", function () {
                assert.equal(arr_delEnd.delEnd(), 2);
            });
        });
        describe(".delPosition", function () {
            const arr_delPos = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("delete element by index", function () {
                assert.equal(arr_delPos.delPosition(3), 6);
            });
            it("delete element by index", function () {
                arr_delPos.clear();
                assert.equal(arr_delPos.delPosition(4), 10);
            });
        });
        describe(".get", function () {
            const arr_get = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("get element by index", function () {
                assert.equal(arr_get.get(5), 1);
            });
            it("get element by index", function () {
                assert.equal(arr_get.get(3), 6);
            });
        });
        describe(".set", function () {
            const arr_set = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("set element by index (5, 255)", function () {
                arr_set.set(5, 255);
                assert.equal(arr_set.get(5), 255);
            });
            it("set element by index (2, 154)", function () {
                arr_set.set(3, 154);
                assert.equal(arr_set.get(3),154);
            });
        });
        describe(".toString", function () {
            it("transform into type 'string'", function () {                
            const arr_string = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.equal(arr_string.toString(), '2486101214');
            });
            it("transform into type 'string'", function () {                
            const arr_string = new AList([4,23, 4, 78, 869, 34]);
                assert.equal(arr_string.toString(), '42347886934');
            });
        });
        describe(".clear", function () {
            const arr_clear = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("clear array", function () {
                arr_clear.delEnd();
                assert.deepEqual(arr_clear.clear(), [2, 4, 8, 6, 10, 1, 2, 14]);
            });
            it("clear array", function () {
                arr_clear.set(5, 255);
                assert.deepEqual(arr_clear.clear(), [2, 4, 8, 6, 10, 1, 2, 14]);
            });
        });
        describe(".min", function () {            
            it("find min element of array", function () {
                const arr_min = new AList([2, -4, 8, 6, 10, 1, 2, 14]);
                assert.equal(arr_min.min(), -4);
            });
            it("find min element of array", function () {
                const arr_min = new AList([2, 4, 8, 6, -10, 1, 2, 14]);
                assert.equal(arr_min.min(), -10);
            });
        });
        describe(".max", function () {           
            it("find max element of array", function () {
                const arr_max = new AList([2, 4, 8, 6, 510, 1, 2, 14]);
                assert.equal(arr_max.max(), 510);
            });
            it("find max element of array", function () {
                const arr_max = new AList([2, 4, 8, 6, 10, 1, 1002, 14]);
                assert.equal(arr_max.max(), 1002);
            });
        });
        describe(".sort", function () {
            it("sorting array", function () {                
            const arr_sort = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.deepEqual(arr_sort.sort(), [1,2,2,4,6,8,10,14]);
            });
            it("sorting array", function () {                
            const arr_sort = new AList([2, 4, -8, 6, 10, 1, 2, -14]);
                assert.deepEqual(arr_sort.sort(), [-14,-8,1,2,2,4,6,10]);
            });
        });
        describe(".maxIndex", function () {            
            it("index of max element", function () {
                const arr_maxIn = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.equal(arr_maxIn.maxIndex(), 7);
            });
            it("index of max element", function () {
                const arr_maxIn = new AList([2, 4, 8, 586, 10, -1, 2, 14]);
                assert.equal(arr_maxIn.maxIndex(), 3);
            });
        });
        describe(".minIndex", function () {            
            it("index of min element", function () {
                const arr_minIn = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.equal(arr_minIn.minIndex(), 5);
            });
            it("index of min element", function () {
                const arr_minIn = new AList([2, 4, -8, 6, 10, 1, -582, 14]);
                assert.equal(arr_minIn.minIndex(), 6);
            });
        });
        describe(".reverse", function () {            
            it("reversing array", function () {
                const arr_reverse = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.deepEqual(arr_reverse.reverse(), [14, 2, 1, 10, 6, 8, 4,2]);
            });
            it("reversing array", function () {
                const arr_reverse = new AList([22, 38, 7, 10, 15, 235, 14]);
                assert.deepEqual(arr_reverse.reverse(), [14, 235,15,10,7,38,22]);
            });
        });
        describe(".halfReverse", function () {            
            it("replace and reverse halves", function () {
                const arr_halfReverse = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
                assert.deepEqual(arr_halfReverse.halfReverse(), [6,8,4,2,14,2,1,10]);
            });
            it("replace and reverse halves", function () {
                const arr_halfReverse = new AList([23, 5, 784, 96, 52, 4, 8]);
                assert.deepEqual(arr_halfReverse.halfReverse(), [784,5,23,96,8,4,52]);
            });
        });
        describe(".addPosition", function () {
            const arr_pos = new AList([2, 4, 8, 6, 10, 1, 2, 14]);
            it("add '566' to arr(3)", function () {
                arr_pos.addPosition(3, 566)
                assert.deepEqual(arr_pos.get(3), 566);
            });
            it("add '33' to arr(5)", function () {
                arr_pos.addPosition(5, 33)
                assert.deepEqual(arr_pos.get(5), 33);
            });
        });
        
