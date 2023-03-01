const numbers = [55, -9, 8, 90, -3, -1, 87];
const arr = [1, 'bye', 66, 89, true, undefined, 'hi', 78, 'good morning'];

// ДЗ
// Массив numbers
// 1. Сформировать массив из последних цифр элементов массива
const numbers_last = numbers.map(el => Math.abs(el % 10));
// 2. Сформировать массив из чисел умноженных на 10
const mult_numbers = numbers.map(el => el * 10);
// 3. Сформировать массив, где отрицательные числа станут положительными
const numbers_positive = numbers.map(el => Math.abs(el));
// Массив arr
// 1. Сформировать массив, в котором все элементы будут заменены на 0
const numbersIsZero = numbers.map(el => 0);
console.log(numbersIsZero);
// 2. Сформировать массив, где все булевые значения будут заменены на 10
const boolean_arr = arr.map(el => typeof el === 'boolean' ? 10 : el );
console.log(boolean_arr);
// 3. Сформировать массив, где строки короче 4 символов будут заменены на строку 'too short string'
const short_string = arr.map(el => typeof el === 'string' && el.length < 4  ? 'too short string' : el );
console.log(short_string);




