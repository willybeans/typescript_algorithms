/* 
Problem 5: 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple( range ) {
	let isDone = false;
	let number = range;

	while(!isDone) {
	isDone = true;
	let i = 1;
	
	while(isDone &&  i <= range){
		if(number % i != 0){
			isDone = false;
		}
	i++;
	}	
	if(!isDone){
		number++;
	}else {
		return number;	
	}
 }

};

console.log(smallestMultiple(20));
