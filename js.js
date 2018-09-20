/*https://habr.com/company/ruvds/blog/334538/*/
'use strict'
	
	/*▍Простые задания*/

		/*1. Реализуйте функцию isPrime(), которая возвращает true или false, указывая,
			является ли переданное ей число простым.

			isPrime(0)                          // false
			isPrime(1)                          // false
			isPrime(17)                         // true
			isPrime(10000000000000)             // false*/

			function isPrime(num) {			
				if (num <= 2) console.log(false);
				else {
					let bool = true;
					for (let i = 2; i < num; i++){
						if(num % i === 0) {
							bool = false;
							break;
						}
					}
					console.log(bool);
				}
			}


		/* 2.Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

			factorial(0)                        // 1
			factorial(1)                        // 1
			factorial(6)                        // 720*/

				function factorial(num) {
					let result = 1;

					for (let i = 1; i <= num; i++) {
						result *= i;
					}
					console.log(result)
				}

		/* 3.Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

			fib(0)                              // 0
			fib(1)                              // 1
			fib(10)                             // 55
			fib(20)                             // 6765*/

			function fib(num) {
				let a = 1, b = 1, c = 0;

				for (let i = 0; i < num; i++) {
					a = b; b = c;
					c = a + b;
				}			
				console.log(c);
			}

		/*4. Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того,
		 	отсортирован ли переданный ей числовой массив.

			isSorted([])                        // true
			isSorted([-Infinity, -5, 0, 3, 9])  // true
			isSorted([3, 9, -3, 10])            // false*/

				function isSorted(arr) {
					let bool = true;

					for (let i = 0; i < arr.length; i++) {
						if (arr[i] > arr[i+1]) {
							bool = false;
							break;
						}
					}
					console.log(bool);
				}

		/*5. Создайте собственную реализацию функции filter().
				
			filter([1, 2, 3, 4], n => n < 3)   // [1, 2]*/
				
			function filter(arr, fun) {
				let resultArr = [];

				for(let i=0; i < arr.length; i++){
					if (fun(arr[i])) {
						resultArr.push(arr[i])
					}
				}
			
				console.log(resultArr);
			}

		/*6. Создайте собственную реализацию функции reduce().

		reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10*/

		function reduce(arr, fun){
			let resultArr = arr[0];

			for(let i = 1; i < arr.length; i++){
				resultArr = fun(resultArr,arr[i]);				
			}
			console.log(resultArr);
		}

		/*7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
		Не пользуйтесь встроенной функцией reverse().
		
		reverse('')                         // ''
		reverse('abcdef')                   // 'fedcba'*/

		function reverse(string) {
			let newString = '';
			for(let i = string.length - 1; i>=0; i--){
				newString += string[i];
			}
			console.log(newString)
		}
		
		/*8. Создайте собственную реализацию функции indexOf() для массивов.
		
		indexOf([1, 2, 3], 1)               // 0
		indexOf([1, 2, 3], 4)               // -1*/
		
		/*9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того,
		является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
		
		isPalindrome('')                                // true
		isPalindrome('abcdcba')                         // true
		isPalindrome('abcd')                            // false
		isPalindrome('A man a plan a canal Panama')     // true*/
		
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
