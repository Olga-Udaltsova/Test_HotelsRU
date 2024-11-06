/* Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. 
Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе. В примере это будет [2, 3, 6]. */

function getCommonDivisors(arr) {
  const minValue = Math.min(...arr);
  const divisors = [];

  for (let i = 0; i <= minValue; i++) {
    if (minValue % i === 0) divisors.push(i);
  }

  const commonDivisors = divisors.filter((value) =>
    arr.every((item) => {
      if (item % value === 0) return value;
    })
  );
  console.log(commonDivisors);
}
