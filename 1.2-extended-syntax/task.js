"use strict";
function getResult(a,b,c){
    let discriminant = b ** 2 - (4 * a * c);
    let x = [];

    if(discriminant === 0) {
    	x.push(- b / (2 * a));
    };
    if(discriminant > 0) {
    	x.push((-b + Math.sqrt(discriminant)) / (2 * a));
    	x.push((-b - Math.sqrt(discriminant)) / (2 * a));
    };

    return x;
};

function getAverageMark(marks){
    let sum = 0;

    if(marks.length > 0) {
        console.log('Количество оценок больше 5');
        marks.splice(5);
        for(let i = 0; i <= marks.length -1; i++) {
           sum = sum + marks[i];
        };
        return sum / marks.length;
    } else {   	
        return 0;
    };
};

function askDrink(name,dateOfBirthday){
	let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

	if(age >= 18) {
		return 'Не желаете ли олд-фэшн, ' + name + '?';
	} else {
		return 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
	};
};