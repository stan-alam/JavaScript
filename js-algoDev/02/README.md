## Linked List

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%202.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%208.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%209.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2010.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2011.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2012.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2014.png" width="80%" height="80%">
</a>

```js
//cb21.A
if (this.head == this.tail) {
  //only one node in linkedList
  this.head = null;
  this.tail = null;

  return deletedTail;
}
```

```js
//cb21.B
let currentNode = this.head;
while (currentNode.next) {
  if(!currentNode.next.next) {
    currentNode.next = null;
  } else {
    currentNode = currentNode;
  }

this.tail = currentNode;

return deletedTail;
}
```

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2015.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/JavaScript/blob/develop/js-algoDev/02/images/js-algoDev02%20-%2016.png" width="80%" height="80%">
</a>
