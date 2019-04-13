const sweepList:Function = function(arr:Array<Number>, func:Function){
  for (let i = 0; i < arr.length; i++){
    arr[i] = func(arr[i]);
  }
  return arr;
}

const square:Function = function(a) {
  return a * a
};

const add:Function = function(a,b){
  return a + b;
}

const sum:Function = function (arr) {
  let total = 0;
  arr.forEach( x => {
    total += x;
  });
  return total;
}

const difference:Function = function(a, b) {
  if(a > b){
    return a - b;
  } else {
    return b - a;
  }
};

const compileList:Function = function(limit){
  let list:Array<Number> = [];
  for(let i = 1; i <= limit; i++){
    list.push(i);
  }
  return list;
}

const findDifference:Function = function(limit){
  const list = compileList(limit);
  //1) add all up and square total
  const add_then_square = square(list.reduce(add));//sweepList(list, add());
  console.log(add_then_square);
  //2) square each, then add all up
  const squared_then_add = sweepList(list, square).reduce(add);
  console.log(squared_then_add);

  const calculateDifference = difference(add_then_square, squared_then_add);
  console.log("the difference is: " + calculateDifference);
}

const limit:Number = 100;
findDifference(limit);
