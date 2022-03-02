# console.log()

using this command you can print any out on the terminal, or Display any message on the terminal the example code is stated bellow.

```jsx
console.log("Hello World!!! How are you??")
```

## Using Multiple Arguments:

you can use console.log with multiple parameters as well. 

```jsx
console.log(parameter1,parameter2,parmter3);
```

**Example:**

```jsx
console.log("Hello","Hi","How are you")
console.log("Happy", "New","Year", 20001)
```

## Open a terminal in the Bowers:

In order to open a terminal in the browser you need to open a web page then click o the three button.

click the button and the select the option for the developer button, Once clicked then a side view will be opened select the console and then enter the console.log commands.
![Screenshot from 2022-03-02 13-28-07](https://user-images.githubusercontent.com/82662797/156428363-9aeadaa4-d75a-4b85-aa1a-15885744e97e.png)



# Comments:

There are two type of Comments in a programming Language.

1. Single Line Comment
2. Multiple Line Comments

## 1. Single Line Comments:

In JavaScript  for a single comment we use  “//”. 

**Example Code:**

```jsx
//This is the comment for a single line
//A comment
console.log("Hello World")
```

## 2. Multiple Line Comments:

In java script for multiple line comment we can use the follow sumbol 

*/   

*/

Code Example:

```jsx
/* This is a multiline comment
Multiline comments can take multiple lines
JavaScript is the language of the web
*/
```

# ****Arithmetic**** operations

Using console Log we can perform the basic arithmetic operations using console.log()

Example code:

 

```jsx
console.log(5+4) //Add
console.log(2-1) //Minus
console.log(3/2) //Divideing
console.log(3%2) //remiander
```

# Adding Java Script to HTML File:

There are **three** ways to add a JavaScript file to a html page.

1. Inline JavaScript
2. Internal JavaScript
3. External JavaScript

These are the following Multiple ways to add JavaScript to an Html file.

## 1. Inline JavaScript

In this all of the code of JavaScript is written in a single line.

Create an html file and enter the following code in to the html file.

```jsx
<html>
<head>
    <title>Learn JavaScript</title>
    <link ref="stylesheet" herf="styles.css">
</head>
<body>
<div>
    <button onclick="alert('Welcome to Learn JavaScript!')">Click Me</button>
</div>
</body>
</html>
```

In the above code the button code the JavaScript function alert() function is called. the out would be.  

**Output:**
![button alert function](https://user-images.githubusercontent.com/82662797/156428403-ebc30ecc-2b5c-4070-921b-36c25020910f.png)



By clicking the button it generate a alert that will display the message called “Welcome to Lean JavaScript!”

The “alert()” is a build-in function in java Script.

## 2. Internal Script:

In this all of the code of JavaScript is written in the head of the HTML file, so it is called the internal Script. All of the code is written in the html file. 

Example code is given bellow:

```jsx
<html>
<head>
    <title>Learn JavaScript</title>
    <link ref="stylesheet" herf="styles.css">
    <script>
        console.log("Hellow New York")
    </script>
</head>
<body>
<div>
</div>
</body>
</html>
```

 You can write the JavaScript code in the head or the code can be written in the boday of the html, but the out will be displayed on the web page and the console. 

**Example Code:**                                                                                                                                                                                                                                                     

```jsx
<html>
<head>
    <title>Learn JavaScript</title>
    <link ref="stylesheet" herf="styles.css">
</head>
<body>
<div>
    <button onclick="alert('Welcome to Learn JavaScript!')">Click Me</button>
    <script>
        console.log("Hellow New York")
    </script>
</div>
</body>
</html>
```

 

## 3. External JavaScript:

Just link in Internal JS, In this all of the code of JavaScript is written in the in the External File and the File is linked with the HTML page using the header. 

The File extension will be “.js” Example file name can be index.js or server.js depending upon the task the name of the file can be changed but the extension can not be changes.

Code for Connection between the HTML and external JavaScript File

```jsx
<script src="./indexjs"></script> 
```

```jsx
<html>
<head>
    <title>Learn JavaScript</title>
    <link ref="stylesheet" herf="styles.css">
    <script src="./index.js"></script>
</head>
<body>
<div>
    <button onclick="alert('Welcome to Learn JavaScript!')">Alert Generate</button>
</div>
</body>
</html>
```

# Data Type in JavaScript:

Just like other programming Language there are data types in javaScript as well.

these are called primitive Data Type; Number, Strings, undefined,Null and Symbol.

### Numbers:

In Numbers there are two things

1. Integers Numbers: Negative, Positive and Zero Numbers **Example**: - 2, -3 ,0,1,5
2. Float Point Numbers: These are th point numbers Example: 3.5, -7.9 etc

### Strings:

Collection of Characters in between single quote, Double quote and back ticks: Example:

 

```jsx
"Hello how are you"
'Hey man!!'
`We can also create a string using a backtick`
```

### Boolean:

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

A boolean data type is either a true or false value.

```jsx
true // if the light is trun on the value will be true
false //if the light is off thrn value will be false
```

### Undefined:

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```jsx
let firstnumber
console.log(firstnumber) //undefined because the value is not present 
```

### Null:

Null in JavaScript means an empty value

```jsx
let employee= null
```

## Checking for Datatype:

In JavaScript you can check the datatype of a variable we can use “typeof”

Example code:

```jsx
console.log(typeof, "Rafay")
console.log(typeof, 5)
```
