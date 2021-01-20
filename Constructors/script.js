// // //Calculator  let a = prompt()
// // function Calculator(a,b){
// //     this.a = a;
// //     this.b = b;
// // this.read = function (){
// //     return {a:this.a,b:this.b};
// //     }
// //     this.sum = function (){
// //     return this.a+this.b;
// //     }
// //     this.mul = function (){
// //     return this.a*this.b;
// //     }
// // }
// // let calc = new Calculator(6,2);
// // console.log(calc.read());
// // console.log(calc.sum());
// // console.log(calc.mul());
//
// //===================================//
// function Accumulator(stringValue){
//     this.startingValue = stringValue;
//     this.read = function(){
//         return +prompt(0);
//     }
//     this.value = this.startingValue + this.read();
// }
//
// let acum = new Accumulator(1);
// console.log(acum.startingValue);
// //console.log(acum.read());
// console.log(acum.value);


// function palindrom(word){
//
//    return word === word.split('').reverse().join('')
// }
//
// console.log(palindrom('anna'));


//
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//
//     вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// Пример
// Fizzbuzz(5)
// Результат
// 1
// 2
// fizz
// 4
// buzz

// function func(n){
//     for (let i = 1; i <= n; i++) {
//      if (i % 5 === 0 && i % 3 === 0){
//             console.log('fizzBuzz')
//         }
//         else if(i % 3 === 0){
//             console.log('fizz')
//         }
//         else if (i % 5 === 0){
//             console.log('buzz')
//         }
//         else{
//             console.log(i)
//         }
//
//     }
// }
// func(15)

//anagram('finder', 'Friend') --> true

anagram('finder', 'Friend')

function anagram(str1,str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    console.log(arr1.includes(arr2));
}
