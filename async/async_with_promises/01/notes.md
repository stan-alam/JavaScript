# Learning the JavaScript async model

Unlike most procedural languages, in which most of the code is synchronous or blocking

JS is a single-threaded language.  **the most obvious meaning behind this is**

 two bits of the same script cannot run at the same time. 

**JS shares a thread with loads of other processes inline. These "inline processes" vary from browsers**

JS is in the same queue as painting, updating styles, and handling user actions ( an activity in one of these processes delays the others )

Whenever the async (non-blocking) script executes in a browser, it goes from top to bottom in an execution pattern

i.e starting from the pageload, the script goes to a document object where the JS object is created. 

The script then goes into the parsing phase where all the nodes and HTML tags are added. **After the completion of parsing, the whole script will be loaded in the memory as an async (non-blocking) script**

see note[01]


## How JavaScript implements as an async model

**JS uses an loop event and tis cycle is called a "tick", since it runs within the time slot bound by the CPU.** 
An interpreter is responsible for checking whether every tick is an **async callback** to be executed. All other async operations take place within the same tick. THe callbacks are not time dependent but are CPU dependent. Callbacks will run soon as possible.

An **interpreter** is the translator program built into the browsers that translates the entire code to a human-readable language. Errors will be dealt with line by line, first error, halts the run in the browser.


Within JS there are 4 core ways on how the async model is implemented. These 4 methods help not only for better performance of the program, but also in easier maintainability of code. These 4 methods are as follows:

 * a callback function

 * The event listener

  **the Publisher/subscriber**

**the promise object**

**A callback function is essentially a pattern ( an established solution to a common problem )**
 *Using the callback function is referred to the callback pattern*


**Since functions are first class objects, we can use callback functions in JS**

## What are callback functions ?

**the idea behind callback functions is derived from functional programming**

     THe idea behind callbacks is using functions as arguments as implementing callback functions
     is as easy as passing regular variables as arguments to functions.

e.g.

```javascript 

${("#btn_1").click().click.function() {
	alert ("Button was clicked");	
}};

```

	In the code above we pass a function as a parameter to the click function

	The click function will call (or execute ) the callback function we passed to it

**this is used a lot in jQuery**


