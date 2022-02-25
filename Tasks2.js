let Stack = require('./Stack')
//Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
//Необходимо проверить, что скобки в строке сбалансированы — на каждую
//открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
//Напишите функцию, которая принимает такую строку и возвращает true,
//если скобки сбалансированы, и false, если не сбалансированы.
function isValid(string){
    let brackets = {'}': '{', ")":"(", "]":"["};
    let stack = new Stack()
    let array = string.split('')
    for (let i = 0; i < array.length; i++) {
        switch(array[i]) {
            case '{': 
            case '(':
            case '[': {
                stack.push(array[i])
                break;
            }
            case '}':
            case ')':
            case ']': {
                if(stack.pop() != brackets[array[i]]) {
                    return false;
                }
                break;
            }
        }
    }
    return stack.isEmpty()
}
console.log(isValid("h]]]]"));       //false
console.log(isValid("(foo)"));      // true
console.log(isValid("(f[o]{o})"));  // true
console.log(isValid("[(){}()]"));   // true
console.log(isValid("(foo"));       // false — нет закрывающей
console.log(isValid("{f[o}o]"));    // false — скобки пересекаются



// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
function job() {
    return new Promise ((resolve, reject) => setTimeout(() => resolve('hello world'), 2000))
}
job().then(data => console.log(data));



// Given a set of numbers, find the subset in which the sum of the elements is the maximum sum.
// Example:
// Given the set of elements [2, -4, 6, 8, -10, 100, -6, 5]
// The maximum sum subset is: [6, 8, -10, 100]
// The program must return the position of the first and last element of the subset. In this example, 
// the positions 2 and 5, considering the first position with index 0.
function subset(array) {
    let consecutiveSum = [];
    for(let i = 0; i < array.length; i++) {
        if (i === 0) consecutiveSum[i] = array[i]; 
        else consecutiveSum[i] = consecutiveSum[i-1] + array[i]; 
    }
    //console.log('consecutiveSum', consecutiveSum);

    let endIndex = consecutiveSum.indexOf(Math.max.apply(null, consecutiveSum)); 
    let i;
    for(i = endIndex; i >= 0; i--) {
        if (consecutiveSum[i] < 0 && array[i] < 0) break;
    }
    console.log('First position: ', i+1);
    console.log('Last position: ', endIndex+1);
    return array.slice(i+1, endIndex + 1) //start index  на 1 больше, slice [)
}
console.log('subset 1: ',subset([2, -4, 6, 8, -10, 100, -6, 5]).toString())
console.log('subset 2: ',subset([-3, 2, 5, 6, -4, -3, -1, 3, 12, -7]).toString())
console.log('subset 3: ',subset([2, -5, 5, -3, 6, -1, 4, -8, 2, 6, 6]).toString())
console.log('subset 4: ',subset([1, 2, 3, 4, 5]).toString())