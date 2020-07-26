## 01

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%202.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%208.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%209.png" width="80%" height="80%">
</a>

<p align="center">
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/o-complexity.png" width="75%" height="75%">
</p>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2010.png" width="80%" height="80%">
</a>

```js

/*
@param {number} number
@param {number} to the power
@return {numbner}
*/

export function iterativePower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i += 1) {
    result *= number;
  }

  return result;
}
```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2011.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2012.png" width="80%" height="80%">
</a>

```js
//8.A
/* calculate the factorial
*/
export function factorial(number) {
  if(number == 0) {
    return 1;
  }
  return factorial(number -1) * number;
}
```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2014.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2015A.png" width="80%" height="80%">
</a>

```js
//9.A
export function pairs(letters) {
  const result = [];

  for (let i = 0; i < letters.length; i += 1) {
    for (let j = 0; j < letters.length; j += 1) {
      result.push(`${letters[i]}${letters[j]}`);
    }
  }
  return result;
}
```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2015B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2016.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2017.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2018A.png" width="80%" height="80%">
</a>

```js
//11.A
/* @param {number[]} array
  @param {number} multiplier
  @return [number[]}
*/
export function multiplyArrayInPlace(array, multiplier) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] *= multiplier;
  }

  return array;
}
```
<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2018B.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2019A.png" width="80%" height="80%">
</a>

```js

export function multiplyArray(array, multiplier) {
  const multipliedArray = [...array];

  for (let i = 0; i < multipliedArray.length; i += 1) {
    multipliedArray[i] *= multiplier;
  }

  return multipliedArray
}

```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/01/images/js-algoDev01%20-%2020.png" width="80%" height="80%">
</a>
