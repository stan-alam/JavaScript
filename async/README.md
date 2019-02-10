## Topics and code related to async JavaScript

### Promises - jsAsync
<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-0.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-1.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-2.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-3.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-4.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-5.svg" width="80%" height="80%">
</a>

```js
function delay (t, p) {
  var promise = new Promise(function resolve, reject) {
    setTimeOut( function () {
      var r = Math.random();
      if ( r > p ){
        console.log("resolved");
        resolve(r);
      } else {
        reject(r);
      } //end else
    }, r);
});
return promise;
}
```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-6.svg" width="80%" height="80%">
</a>

```js

//Stub - not complete

```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-7A.svg" width="80%" height="80%">
</a>


```js

//Stub - not complete

```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-7B.svg" width="80%" height="80%">
</a>

```js

// Stub  -not complete

```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-7C.svg" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/async/svg/jsAsync/jsAsync-8.svg" width="80%" height="80%">
</a>
