// Возведение в степень
num = +prompt('Введите число');
stepen = +prompt('Введите степень числа');

if (isNaN(num) || num == 0) {
	alert('Число не может быть NaN или 0')
}else if (isNaN(stepen)) {
	alert('Степень числа не может быть NaN')
}else if (stepen == 0) {
	stepen = 2
}else {
	result = num
	for(var i = 1; i < stepen; i++){
		result = result * num
	}
	alert(`Число - ${num}\nСтепень - ${stepen}\nОтвет - ${result}`)
	// или можно вот так:
	// alert(`Число - ${num}\n Степень - ${stepen}\n Ответ - ${num ** stepen}`)
}

// Лестница
do {
	sum = +prompt('Введите количество');
	if (isNaN(sum)) {
		sum = 5
		break
	}else if (sum == 0) {
		alert('Количество не может быть равен нолю!')
	}else {
		break
	}
} while(true);

do {
	var symbol = prompt('Введите символ отступов')
} while(symbol == '' || symbol == null);

do {
	var endSymbol = prompt('Введите конечный символ')
} while(endSymbol == '' || endSymbol == null);

result = '';
console.log(result + endSymbol)
for (var i = 1; i < sum; i++) {
result += symbol;
console.log(result + endSymbol)
}