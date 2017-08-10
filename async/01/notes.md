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
