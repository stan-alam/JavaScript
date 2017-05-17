**What functional programming term means:**

A function in mathematics can be written as follows, f(x) = y

"A function F, which takes X as its argument and returns the out Y."

	* A function must always take an argument.

	* A function must always return a value.

	* A function should act only on its receiving arguments (i.e, X ) not the outside world.

	* For a given X, there will be only one Y.



functional programming techniques are heavily based on mathematical functions and its ideas.

e.g

```javascript

var percentValue = 5;
var calculateTax = ( value ) => { return value/100 * ( 100 + percentValue ) }

```

## Functions vs Methods

A **Function** is a piece of code that can be called by its name. It can pass arguments and return values.

**Methods** are a piece of code that must be called by its name along with its *associated object* name.

```javascript

var simple = (a) => {return a} // a simple function
simple(2) // called by its name, takes a value and returns the same value, e.g. 2 in 2 out.


// here's a method:

var obj = {simple : (a) => {return} }
obj.simple(3) // called by its name along with its associated object

```

## Referential Transparency


```javascript

var identity = ( i ) => {return i}

```

The code snippet is a simple function called identity.







