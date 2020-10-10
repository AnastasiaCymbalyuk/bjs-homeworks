"use strict";
function getResult(a,b,c){
    let discriminant = b ** 2 - (4 * a * c);
    let x = [];

    if(discriminant === 0) {
    	x.push(- b / (2 * a));
    } else if(discriminant > 0) {
    	x.push((-b + Math.sqrt(discriminant)) / (2 * a));
    	x.push((-b - Math.sqrt(discriminant)) / (2 * a));
    } else {
		x == 0;
    };

    return x;
};

function getAverageMark(marks){
    let sum = 0;
	let averageMark = 0;

    if(marks.length == 0) {
    	averageMark = 0;
    } else {
    	if(marks.length > 5) {
    		console.log('Количество оценок больше 5');
    		marks.splice(5, marks.length);
    	};
    	for(let i = 0; i <= marks.length -1; i++) {
    		sum = sum + marks[i];
    	};
    	averageMark = sum / marks.length;
    };

	return averageMark; 
};

function askDrink(name,dateOfBirthday){
    let result = 0;
	let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

	if(age >= 18) {
		result = 'Не желаете ли олд-фэшн, ' + name + '?';
	} else {
		result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
	};

	return result;
};