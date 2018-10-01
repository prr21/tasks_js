/*https://habr.com/company/ruvds/blog/334538/*/
'use strict'
	
	/*▍Простые задания*/

		/*1. Реализуйте функцию isPrime(), которая возвращает true или false, указывая,
			является ли переданное ей число простым.

			console.log(isPrime(0))                          // false
			console.log(isPrime(1))                          // false
			console.log(isPrime(17))                         // true
			console.log(isPrime(10000000000000))             // false*/

			function isPrime(num) {			
				if (num <= 2) return(false);

				for (let i = 2; i < num; i++){
					if(num % i === 0) {
						return false;
					}
				}
				return true;
			}


		/* 2.Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

			console.log(factorial(0))                        // 1
			console.log(factorial(1))                        // 1
			console.log(factorial(6))                        // 720*/

				function factorial(num) {
					let result = 1;

					for (let i = 1; i <= num; i++) {
						result *= i;
					}
					return result;
				}

		/* 3.Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

			console.log(fib(0))                              // 0
			console.log(fib(1))                              // 1
			console.log(fib(10))                             // 55
			console.log(fib(20))                             // 6765*/

			function fib(num) {
				let a = 1, b = 1, c = 0;

				for (let i = 0; i < num; i++) {
					a = b; b = c;
					c = a + b;
				}			
				return c;
			}

		/*4. Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того,
		 	отсортирован ли переданный ей числовой массив.

			console.log(isSorted([]))                        // true
			console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
			console.log(isSorted([3, 9, -3, 10]))            // false*/

			function isSorted(arr) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] > arr[i+1]) {
						return false;
					}
				}
				return true;
			}

		/*5. Создайте собственную реализацию функции filter().	

			console.log(filter([1, 2, 3, 4], n => n < 3))   // [1, 2]*/
				
			function filter(arr, fun) {
				let resultArr = [];

				for(let i=0; i < arr.length; i++){
					if (fun(arr[i])) {
						resultArr.push(arr[i])
					}
				}
				return resultArr;
			}

		/*6. Создайте собственную реализацию функции reduce().
		
			console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)) // 10*/

			function reduce(arr, fun){
				let resultArr = arr[0];

				for(let i = 1; i < arr.length; i++){
					resultArr = fun(resultArr,arr[i]);				
				}
				return resultArr;
			}

		/*7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
			Не пользуйтесь встроенной функцией reverse().
			
			console.log(reverse('') )                        // ''
			console.log(reverse('abcdef'))                   // 'fedcba'*/

			function reverse(string) {
				let newString = '';

				for(let i = string.length - 1; i>=0; i--){
					newString += string[i];
				}
				return newString;
			}
		
		/*8. Создайте собственную реализацию функции indexOf() для массивов.*/
		
			console.log(indexOf([1, 2, 3], 1))               // 0
			console.log(indexOf([1, 2, 3], 4)) 	            // -1
			console.log(indexOf([1, 2, 3], 2)) 	            // -1
			console.log(indexOf([1, 2, 3], 3)) 	            // -1
			console.log(indexOf([1, 2, 3], 6)) 	            // -1

			function indexOf(arr, index){
				for (let i = 0; i < arr.length; i++) {
					if(arr[i] == index) {
						return i;
					};
				};
				return -1;
			}
		


		/*9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того,
			является ли переданная ей строка палиндромом (функция нечувствительна к регистру и
			к наличию в строке пробелов).
			
			console.log(isPalindrome('') )                               // true
			console.log(isPalindrome('abcdcba'))                         // true
			console.log(isPalindrome('abcda'))                           // false*/

			function isPalindrome(string){
				string = string.split(' ').join('').toLowerCase();
				let mL = Math.floor(string.length / 2); // mL == middleLetter;
			
				for (let i = 0, j = string.length - 1; i < mL; i++, j--) {
					if (string[j] === string[i]) {
						continue;
					}
					else return false;
				}
				return true;
			}
		
		/*10. Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел 
		(то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности.
		Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
		
		Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, 
		которой вы можете воспользоваться.
		
		missing([])                         // undefined
		missing([1, 4, 3])                  // 2
		missing([2, 3, 4])                  // 1
		missing([5, 1, 4, 2])               // 3
		missing([1, 2, 3, 4])               // undefined*/
		
		/*11. Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, 
		указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
		
		isBalanced('}{')                      // false
		isBalanced('{{}')                     // false
		isBalanced('{}{}')                    // true
		isBalanced('foo { bar { baz } boo }') // true
		isBalanced('foo { bar { baz }')       // false
		isBalanced('foo { bar } }')           // false	*/
		

	/*▍Задания средней сложности*/

		/*1. Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.*/


	/*▍Сложные задания
		Некоторые задания из этой группы связаны с созданием структур данных. 
		Не нужно запоминать все тонкости их функционирования, достаточно понимания их устройство,
		при этом сведения о предоставляемом ими интерфейсе можно найти в интернете.
		Далее, нужно знать, для чего эти структуры данных используются,
		каковы их ограничения в сравнении с другими структурами данных.*/

	/*1. Реализуйте функцию permute(), которая возвращает массив строк, содержащий все пермутации заданной строки.
		function permute(string) {
			let arr = [];

			permute('')             // []
			permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
			console.log(arr)
		}*/
