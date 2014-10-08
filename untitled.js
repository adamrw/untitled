// var mult=function(s) {
// 	var firstLetter = 
// }

var names = ['1', '2', '3', '4', '5'];
var doubler=function(num){
	return num * 2;
};
console.log(names.map(doubler));



var names = ['Chris', 'Joe', 'Frodo,'];
var firstLetter = names[0];
var rest = names.slice(1);

return firstLetter[0].toLowerCase() + rest.slice(1).toUPperCase();

var rest = 


var names = ['Chris', 'Joe', 'Frodo,'];
var invCapName = function(name){
	return name[0].toLowerCase() + name.slice(1).toUpperCase();
};




var numbers = [2,6,5,3,10,11];
var isEven=function(num) {
	return num % 2 === 0;
};
console.log(numbers.filter(isEven));




var animals=['cat', 'dog', 'cucumber', 'eclaire'];
var isC=function(letter) {
	console.log(letter);
	return letter[0].toLowerCase()==='c';

};
console.log(animals.filter(isC));



var original=[1,2,5,10];
var squared=function(num){
	if(original<8){
		return num * num;
	};
};
console.log(original.filter(squared));


var original=[1,2,5,10];

var isLessThan8=function(num) {
	return num<8;

};

var square=function(num) {
	return num * num;
};
console.log(original.filter(isLessThan8).map(square));
