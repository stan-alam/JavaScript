##Chap 01

The relationship between the *now* and *later* parts of your program is at the heart of async programming.
The good enough is to use the callback function.

Deeper dive into asynchronous nature of JS

JS programs are most of the time compromised of several chunks, some of which will execute *now* and some *later.*
The most common unit of this *chunk* is the **function**.

later does not happen and immediately after now. Tasks cannot complete now are going to complete asynchronously, thus will not have block behavior as in a procedural script.

consider:

```javascript

ajax("http://some.url..", function myCallBackFunction(data) {

	console.log( data );

});