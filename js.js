/*https://habr.com/company/ruvds/blog/334538/*/
'use strict'
	
	/*▍Простые задания*/

		/*1. Реализуйте функцию isPrime(), которая возвращает true или false, указывая,
			является ли переданное ей число простым.

			isPrime(0) 			      	     	 // false
			isPrime(1) 			        	  	 // false
			isPrime(17) 			           	 // true
			isPrime(10000000000000) 	         // false*/

			function isPrime(num) {			
				if (num <= 2) return console.log(false);

				for (let i = 2; i < num; i++){
					if(num % i === 0) {
						return console.log(false);
					}
				}
				return console.log(true);
			}

		/* 2.Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

			factorial(0)                          // 1
			factorial(1)                          // 1
			factorial(6)                          // 720*/

			function factorial(num) {
					let result = 1;

					for (let i = 1; i <= num; i++) {
						result *= i;
					}
					return console.log(result);
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
				return console.log(c);
			}

		/*4. Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того,
		 	отсортирован ли переданный ей числовой массив.

			isSorted([]) 						// true
			isSorted([-Infinity, -5, 0, 3, 9])  // true
			isSorted([3, 9, -3, 10])		    // false*/

			function isSorted(arr) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] > arr[i+1]) {
						return console.log(false);
					}
				}
				return console.log(true);
			}

		/*5. Создайте собственную реализацию функции filter().	

			filter([1, 2, 3, 4], n => n < 3)    // [1, 2]*/
				
			function filter(arr, fun) {
				let resultArr = [];

				for(let i=0; i < arr.length; i++){
					if (fun(arr[i])) {
						resultArr.push(arr[i])
					}
				}
				return console.log(resultArr);
			}

		/*6. Создайте собственную реализацию функции reduce().
		
			reduce([1, 2, 3, 4], (a, b) => a + b, 0)   // 10*/

			function reduce(arr, fun){
				let resultArr = arr[0];

				for(let i = 1; i < arr.length; i++){
					resultArr = fun(resultArr,arr[i]);				
				}
				return console.log(resultArr);
			}

		/*7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
			Не пользуйтесь встроенной функцией reverse().
			
			reverse('') 	                      // ''
			reverse('abcdef')                     // 'fedcba'*/

			function reverse(string) {
				let newString = '';

				for(let i = string.length - 1; i>=0; i--){
					newString += string[i];
				}
				return console.log(newString);
			}
		
		/*8. Создайте собственную реализацию функции indexOf() для массивов.
		
			indexOf([1, 2, 3], 1)                   // 0
			indexOf([1, 2, 3], 4)   	            // -1*/

			function indexOf(arr, index){
				for (let i = 0; i < arr.length; i++) {
					if(arr[i] == index) {
						return console.log(i);
					};
				};
				return console.log(-1);
			}
		


		/*9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того,
			является ли переданная ей строка палиндромом (функция нечувствительна к регистру и
			к наличию в строке пробелов).
			
			isPalindrome('') 		                          // true
			isPalindrome('abcdcba')                           // true
			isPalindrome('abcda')                             // false*/

			function isPalindrome(string){
				string = string.split(' ').join('').toLowerCase();
				let mL = Math.floor(string.length / 2); // mL - middleLetter;
			
				for (let i = 0, j = string.length - 1; i < mL; i++, j--) {
					if (string[j] === string[i]) {
						continue;
					}
					else return console.log(false);
				}
				return console.log(true);
			}
		
		/*10. Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел 
			(то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число,
			отсутствующее в последовательности.
			Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
			
			Способны ли вы добиться того, чтобы функция решала задачу за время O(N)?
			Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.
			
			missing([]) 		                  // undefined
			missing([1, 4, 3])                    // 2
			missing([2, 3, 4])                    // 1
			missing([5, 1, 4, 2])                 // 3
			missing([1, 2, 3, 4])                 // undefined*/
	
			function missing(arr) {
				for (let i = 1; i < arr.length; i++) {
					if (arr.indexOf(i) == -1) return console.log(i);
				}
				return console.log(undefined);			

			/*Использовать эту функцию если в переданном массиве несколько пропущенных цифр.

			var arrMissed = [],
			maxNum = arr.sort((a,b) => b-a)[0];
			for (let i = 1; i < maxNum; i++) {
				if (arr.indexOf(i) == -1) arrMissed.push(i);
			}
			return console.log(arrMissed)*/
		}
		
		/*11. Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, 
			указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
		
			isBalanced('}{')                      // false
			isBalanced('{{}')                     // false
			isBalanced('{}{}')                    // true
			isBalanced('foo { bar { baz } boo }') // true
			isBalanced('foo { bar { baz }')       // false
			isBalanced('foo { bar } }')           // false*/

			function isBalanced(string) {
				let openBracket  = [],
					closeBracket = [];

				for (let i = 0; i < string.length; i++) {
					if (string[i] == '{') {
						openBracket.push(string[i])
					}if (string[i] == '}') {
						closeBracket.push(string[i])
					}

					if (closeBracket.length > openBracket.length) {
						return console.log(false)
					}
				}
				if (openBracket.length === closeBracket.length) {
					return console.log(true)
				} 
				return false
			}
		

	/*▍Задания средней сложности*/

		/*1. Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, 
			но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.*/

			const memoize = (fn) => {
				let cache = {};

				return (...args) => {
					let num = args[0];

					if (num in cache) {
			  			return cache[num];
			  		} else {
			  			let result = fn(num);
			  			cache[num] = result;
			  			return result;
			  		}
			  	}
			}

			const fib2 = memoize(
				(num) => {
					return num <= 1 ? num : fib2(num - 1) + fib2(num - 2);
				}
			);
					
			/*console.log(fib2(0))                               // 0
			console.log(fib2(1))                               // 1
			console.log(fib2(10))                              // 55
			console.log(fib2(50))                              // 12586269025*/

		

		/*2. Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced()
			из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {},
			квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные
			скобочные последовательности, функция должна возвращать false.
	
			isBalanced2('(foo { bar (baz) [boo] })') // true
			isBalanced2('foo { bar { baz }')         // false
			isBalanced2('foo { (bar [baz] } )')      // false*/

		/*3. Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа,
			найденные в нём. Может ли функция решить эту задачу за время O(N)?
		
			uniq([])                              // []
			uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]*/

			function uniq(array){
				 return console.log(array.filter((item, i, arr) => arr.indexOf(item) === i));
			}

		/*4. Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. 
			сможете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), 
			де M и N — длины массивов?

			ntersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
			ntersection([1, 5, 4, 2], [7, 12])             // []*/

			function ntersection(arr1, arr2) {
				var result = [];

				for (let i = 0; i < arr2.length; i++) {
					if( arr1.indexOf(arr2[i]) !== -1 ) {
						result.push(arr2[i]);
					}
				}
				console.log(result)
			}



		/*5. Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

			sort([])                              // []
			sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]*/

		/*6. Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, 
			встречается ли переданное ей число в переданном ей отсортированном массиве. 
			Может ли функция решить эту задачу за время O(log(N))?
	
			includes([1, 3, 8, 10], 8)            // true
			includes([1, 3, 8, 8, 15], 15)        // true
			includes([1, 3, 8, 10, 15], 9)        // false*/

		/*7. Реализуйте функцию assignDeep(), которая похожа на Object.assign(), 
			но выполняет глубокое объединение объектов. Для того, чтобы не усложнять задачу, 
			можно исходить из допущения, что объекты могут содержать только числа и другие объекты 
			(в них не может быть массивов, строк, и так далее).
	
			assignDeep({ a: 1 }, {})              // { a: 1 }
			assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
			assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
			assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })
			// { a: { b: { c: 1, d: 2 }}, e: 3 }*/

		/*8. Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых заданий, 
			но работает с функциями, возвращающими promise-объекты, каждый из которых должен быть разрешён 
			до перехода к следующему.
	
			let a = () => Promise.resolve('a')
			let b = () => Promise.resolve('b')
			let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
			await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
			// ['a', 'b', 'c']
			await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
			// ['d', 'a', 'c', 'b']*/

		/*9. Реализуйте функцию seq(), пользуясь тем же подходом, что и при работе над функцией reduceAsync(). 
			Эта функция должна принимать массив функций, которые возвращают promise-объекты, 
			и разрешать их один за другим.

			let a = () => Promise.resolve('a')
			let b = () => Promise.resolve('b')
			let c = () => Promise.resolve('c')
			await seq([a, b, c])                  // ['a', 'b', 'c']
			await seq([a, c, b])                  // ['a', 'c', 'b']*/


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
			arr)
		}*/
