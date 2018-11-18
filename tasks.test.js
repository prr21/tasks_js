describe('Проверка на истинность', function() {
	it('1. Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.', 
		function() {
			assert.equal(isPrime(1), false);
			assert.equal(isPrime(0), false);
			assert.equal(isPrime(1), false);
			assert.equal(isPrime(17), true);
			assert.equal(isPrime(10000000000000), false);
		});
});	

describe('Проверка факториала', function() {
	it(' 2.Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.', 
		function() {
			assert.equal(factorial(0), 1);
			assert.equal(factorial(1), 1);
			assert.equal(factorial(6), 720);
		});
});

describe('Проверка фибоначи', function() {
	it(' 3.Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.', 
		function() {
			assert.equal(fib(0), 0);
			assert.equal(fib(1), 1);
			assert.equal(fib(10), 55);
			assert.equal(fib(20), 6765);
		});
});