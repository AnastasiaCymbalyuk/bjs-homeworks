"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
let arr = [{name: "percent", value: percent}, {name: "contribution", value: contribution}, {name: "amount", value: amount}, {name: "date", value: date}];
for(let i = 0; i < arr.length; i++){
	if(isNaN(arr[i].value)){
		console.log(`Параметр ${arr[i].name} содержит неправильное значение ${arr[i].value}`);
	} else {
		Number(arr[i].value);
	};
};
let sum = amount - contribution;
let month = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
let interestRate = (percent / 100) / 12;
let monthlyPayment = (sum * (interestRate + interestRate / (((1 + interestRate) ** month) - 1)));
let totalAmount = parseFloat((monthlyPayment * month).toFixed(2));
console.log(totalAmount);
return totalAmount;
};

function getGreeting(name) {
    // код для задачи №2 писать здесь
if(!name){
	name = "Аноним";
}
let greeting = `Привет, мир! Меня зовут ${name}`;
console.log(greeting);
return greeting;
}