/*https://habr.com/company/ruvds/blog/334538/*/
'use strict'

/*Простые задания*/
	
	/*1.*/	function isPrime(num) {
				if (num <= 2) return false;

				for (let i = 2; i < num; i++){
					if(num % i === 0) {
						return false;
					}
				}
				return true;
			}

	/* 2.*/	function factorial(num) {
				let result = 1;

				for (let i = 1; i <= num; i++) {
					result *= i;
				}
				return result;
			}

		
	/* 3.*/	function fib(num) {
				let a = 1, b = 1, c = 0;

				for (let i = 0; i < num; i++) {
					a = b; b = c;
					c = a + b;
				}			
				return c;
			}

	/*4.*/	function isSorted(arr) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] > arr[i+1]) return false;
				}
				return true;
			}

	/*5.*/	function filter(arr, fun) {
				let resultArr = [];

				for(let i=0; i < arr.length; i++){
					if (fun(arr[i])) {
						resultArr.push(arr[i])
					}
				}
				return resultArr;
			}

	/*6.*/	function reduce(arr, fun){
				let resultArr = arr[0];

				for(let i = 1; i < arr.length; i++){
					resultArr = fun(resultArr,arr[i]);				
				}
				return resultArr;
			}

	/*7.*/	function reverse(string) {
				let newString = '';

				for(let i = string.length - 1; i >= 0; i--){
					newString += string[i];
				}
				return newString;
			}
		
	/*8.*/	function indexOf(arr, index) {
				for (let i = 0; i < arr.length; i++) {
					if(arr[i] == index) {
						return i;
					};
				};
				return -1;
			}
		
	/*9.*/	function isPalindrome(string){
				string = string.split(' ').join('').toLowerCase();
				let mL = Math.floor(string.length / 2); // mL - middleLetter;
			
				for (let i = 0, j = string.length - 1; i < mL; i++, j--) {
					if (string[j] === string[i]) {
						continue;
					}
					else return false;
				}
				return true;
			}
		
	/*10.*/	function missing(arr) {
				for (let i = 1; i < arr.length; i++) {
					if (arr.indexOf(i) == -1) return i;
				}
				return undefined;
			}

			/*Использовать эту функцию если в переданном массиве несколько пропущенных цифр.

			var arrMissed = [],
			maxNum = arr.sort((a,b) => b-a)[0];
			for (let i = 1; i < maxNum; i++) {
				if (arr.indexOf(i) == -1) arrMissed.push(i);
			}
			return arrMissed)*
		}
		
	/*11.*/	function isBalanced(string) {
				let openBracket  = [],
					closeBracket = [];

				for (let i = 0; i < string.length; i++) {
					if (string[i] == '{') {
						openBracket.push(string[i])
					}if (string[i] == '}') {
						closeBracket.push(string[i])
					}

					if (closeBracket.length > openBracket.length) {
						return false;
					}
				}
				if (openBracket.length === closeBracket.length) {
					return true;
				} 
				return false;
			}
		

/*Задания средней сложности*/

	/*1.*/	const memoize = (fn) => {
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
								

	/*2. Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced()
		из предыдущей группы заданий, но поддерживает три типа скобок: фигурные {},
		квадратные [], и круглые (). При передаче функции строки, в которой имеются неправильные
		скобочные последовательности, функция должна возвращать false.

		isBalanced2('(foo { bar (baz) [boo] })') // true
		isBalanced2('foo { bar { baz }')         // false
		isBalanced2('foo { (bar [baz] } )')      // false*/

	/*3.*/	function uniq(array){
				 return array.filter((item, i, arr) => arr.indexOf(item) === i);
			}

	/*4.*/	function ntersection(arr1, arr2) {
				var result = [];

				for (let i = 0; i < arr2.length; i++) {
					if( arr1.indexOf(arr2[i]) !== -1 ) {
						result.push(arr2[i]);
					}
				}
				return result;
			}



		/*5. Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

			sort([])                              // []
			sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]*/

	/*6.*/	function includes(arr, num) {
				return arr.indexOf(num) !== -1;
			}

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
