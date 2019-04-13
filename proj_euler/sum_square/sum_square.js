var sweepList = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
};
var square = function (a) {
    return a * a;
};
var add = function (a, b) {
    return a + b;
};
var sum = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};
var difference = function (a, b) {
    if (a > b) {
        return a - b;
    }
    else {
        return b - a;
    }
};
var compileList = function (limit) {
    var list = [];
    for (var i = 1; i <= limit; i++) {
        list.push(i);
    }
    return list;
};
var findDifference = function (limit) {
    var list = compileList(limit);
    //1) add all up and square total
    var add_then_square = square(list.reduce(add)); //sweepList(list, add());
    console.log(add_then_square);
    //2) square each, then add all up
    var squared_then_add = sweepList(list, square).reduce(add);
    console.log(squared_then_add);
    var calculateDifference = difference(add_then_square, squared_then_add);
    console.log("the difference is: " + calculateDifference);
};
var limit = 100;
findDifference(limit);
