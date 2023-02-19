const numbers = [55, 43, 1, -7, 88, 13, -83, 15];
// 1
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//2
const getNewArrNegativeNum = array =>{
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arr.push(array[i]);
        }
    }
    return arr
}
const negativeNumbers = getNewArrNegativeNum(numbers);
console.log(negativeNumbers);
//3
const getEvenNum = array =>{
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arr.push(array[i]);
        }
    }
    return arr
}
const evenNumbers = getEvenNum(numbers);
console.log(evenNumbers);
//4
const getNewArrPositiveNum = array =>{
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 10 == 4) {
            arr.push(array[i]);
        }
    }
    return arr
}
const positiveNumbers = getNewArrPositiveNum(numbers);
console.log(positiveNumbers);
//5
const getSumm = array =>{
    let a = 0;
    for (let i = 0; i < array.length; i++) {
        a += array[i];
    }
    return a
}
console.log(getSumm(numbers));
//6
const summFromAToB = (a, b) =>{
    let j = 0;
    for (let i = a; i <= b; i++) {
        j += i;
    }
    return j
}
console.log(summFromAToB(1, 10));


