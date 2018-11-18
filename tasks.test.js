describe('Простые задания 1. Проверка на простое число', function() {
	it('Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.', function() {
			assert.equal( isPrime(1), false );
			assert.equal( isPrime(0), false );
			assert.equal( isPrime(1), false );
			assert.equal( isPrime(17), true );
			assert.equal( isPrime(10000000000000), false );
		});
});	

describe('2. Проверка факториала', function() {
	it('Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.', function() {
			assert.equal( factorial(0), 1 );
			assert.equal( factorial(1), 1 );
			assert.equal( factorial(6), 720 );
		});
});

describe('3. Проверка фибоначи', function() {
	it('Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.', function() {
			assert.equal( fib(0), 0 );
			assert.equal( fib(1), 1 );
			assert.equal( fib(10), 55 );
			assert.equal( fib(20), 6765 );
		});
});

describe('4. Проверка на отсортированность', function() {
	it('Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.', function() {
			assert.equal( isSorted([]) , true );
			assert.equal( isSorted([-Infinity, -5, 0, 3, 9]), true );
			assert.equal( isSorted([3, 9, -3, 10]), false );
		});
});

describe('5. Проверка фильтрации', function() {
	it('Создайте собственную реализацию функции filter()', function() {
			assert.equal( filter([1, 2, 3, 4], n => n < 3), 
			[1, 2, 3, 4].filter(n => (n < 3)).join(',') );
		});
});

describe('6. Проверка reduce', function() {
	it('Создайте собственную реализацию функции reduce().', function() {
			assert.equal( reduce([1, 2, 3, 4], (a, b) => a + b, 0),
			[1, 2, 3, 4].reduce((a,b) => (a + b)) );
		});
});

describe('7. Проверка reverse', function() {
	it(' Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().', function() {
			assert.equal( reverse(''), '');
			assert.equal( reverse('abcdef'), 'fedcba');

		});
});

describe('8. Проверка indexOf', function() {
	it('Создайте собственную реализацию функции indexOf() для массивов.', function() {
			assert.equal( indexOf([1, 2, 3], 1),
			[1, 2, 3].indexOf(1) );

			assert.equal( indexOf([1, 2, 3], 4),
			[1, 2, 3].indexOf(4) );
		});
});

describe('9. Проверка слов-полидрома', function() {
	it('Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).', function() {
			assert.equal( isPalindrome('') , true );
			assert.equal( isPalindrome('abcdcba'), true );
			assert.equal( isPalindrome('abcda'), false );
		});
});

describe('10. Поиск пропущенного символа', function() {
	it('Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе. Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.', function() {
			assert.equal( missing([]) , undefined );
			assert.equal( missing([1, 4, 3]), 2 );
			assert.equal( missing([2, 3, 4]), 1 );
			assert.equal( missing([5, 1, 4, 2]), 3 );
			assert.equal( missing([1, 2, 3, 4]), undefined );
		});
});

describe('11. Проверка баланса скобок', function() {
	it('Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.', function() {
			assert.equal( isBalanced('}{') , false );
			assert.equal( isBalanced('{{}'), false );
			assert.equal( isBalanced('{}{}'), true );
			assert.equal( isBalanced('foo { bar { baz } boo }'), true );
			assert.equal( isBalanced('foo { bar { baz }'), false );
			assert.equal( isBalanced('foo { bar } }'), false );
		});
});

describe('1. Задания средней сложности 1. Поиск чисел фибоначи с мемоизацией', function() {
	it('Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий, но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.', function() {
			assert.equal( fib2(0),  0);
			assert.equal( fib2(1),  1);
			assert.equal( fib2(10), 55 );
			assert.equal( fib2(50), 12586269025 );
		});
});

describe('3. Поиск уникальных чисел', function() {
	it('Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа, найденные в нём. Может ли функция решить эту задачу за время O(N)?', function() {
			assert.equal( uniq([]),
			[].join(',') );
			assert.equal( uniq([1, 4, 2, 2, 3, 4, 8]),
			[1, 4, 2, 3, 8].join(',') );
		});
});

describe('4. Поиск встречающихся символов', function() {
	it('Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение. сможете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N — длины массивов?', function() {
			assert.equal( ntersection([1, 5, 4, 2], [8, 91, 4, 1, 3]),
			[4, 1].join(',') );
			assert.equal( ntersection([1, 5, 4, 2], [7, 12]),
			[].join(',') );
		});
});

describe('6. Поиск числа в массиве', function() {
	it('Реализуйте функцию includes(), которая возвращает true или false в зависимости от того, встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция решить эту задачу за время O(log(N))?', function() {
		assert.equal( includes([1, 3, 8, 10], 8), true );
		assert.equal( includes([1, 3, 8, 8, 15], 15), true );
		assert.equal( includes([1, 3, 8, 10, 15], 9), false );
		});
});