JavaScript_NewsAPI
-------------------

View WebApp: https://newsheadlines-c0haf4f6d4bvhaa7.westeurope-01.azurewebsites.net/

Contents of this Repo: 
1. Make use of tailwind for CSS
2. Fetch API from www.newsapi.org and display in application.
3. Create and Fetch a Local Host Server API.

![image](https://github.com/JancoEngelbrecht/JavaScript_NewsAPI/assets/75523652/587a0582-bc56-4e1e-9934-b539539cb0ad)

------------------------------------------------------
JavaScript Notes
------------------------------------------------------
Document Object Model (DOM)
Tree of HTML Objects
Each element is a node in the tree.

Query Properties:
-----------------
document.getElementById(id)
document.getElementByClassName(class name) - Returns HTMLCollection
document.getElementByTagName(tag name) - Returns HTMLCollection
document.getElementByName(name) - Returns NodeList

element.querySelector(selectors) - Returns NodeList
document.querySelector(selectors) - Returns NodeList
element.querySelectorAll(selectors) - Returns NodeList
document.querySelectorAll(selectors) - Returns NodeList

HTML Create and Append:
------
document.createElement(‘tagName’)
variable.textContent = “text”
document.appendChild(variable)

CSS Selectors:
------
Element 					p
Class						.example
ID						#header
Attribute					[type=”text”]
Descendant					div p
Child						ul > li
Adjacent Sibling				h2 + p
Pseudo-classes and elements		:hover or ::before

EventListener: 
--------
addEventListener(‘type’, callback function)  

Iterating Arrays:
--------
for ( let i=0 ;  i < x.length ;  i++ ) { return i }

array.find( function ( x ) { return x === 0 }) 			: Search JSON to find object.value 
array.map( function ( x ) { return x * 2 })			: Search JSON to return object.values
forEach( function ( x, index, array ) { x += 2 })		: Iterate JSON for side effects


Arrow Function/Callback Function:
---------
( ) => { }
array.map( ()=>{} ) 					:Map with a empty callback

Const addArrow = ( a,b ) => a+b;			Arrow Function
Const add = function( a,b ) { return a + b };		Normal Function
____________________________________________________
`this` and `call` for Objects
const x = {value:0, 
     printValues: function() { 
        console.log(this.value)}
x.printValues()						: outputs 0 

const y = {value: 5};
x.printValues.call(y); 					: output 5
_____________________________________________________

Object destructuring:
------
const candyBag = {
	food: ‘bread’,
	drink: ‘water’}	

const {food, drink} = candyBag;
console.log(food);	


Object Freeze:
------
Object.Freeze() 			NB: Does not apply to nested objects.

Const Constants = Object.Freeze({ PI: 3.14159 })		

LocalStorage: 
---------
localStorage.setItem(‘key’,’value’)			:Store 
const value = localStorage.getItem(‘key’)		:Retrieve
localStorage.removeItem(‘key’)			:Remove

.trim() 			:Remove whitespace from both ends of string

Async functions	: 
--------
Fetching APIs (Fetch or  axios or XMLHttpRequest)

fetch().then().then().catch() 				: Promise Chain Example

fetch( url,options )
.then( ()=>{} )
.catch( ()=>{} )

axios.get( url )
.then( ()=>{} )
.catch( ()=>{} )		

Fetching API Error Handling: 
-------------
fetch( url )
.then( response  => { 
if( !response.ok ){ throw new Error( ‘Network response was not ok’ ) 
return response.json()
})
.catch(  error  => { console.error( ‘Error: error’ } )


Creating APIs:
----------
const express = require(‘express’)			:Import Express Framework
const app = express()					:Create Express App
const port = 3000					:Port for the server to listen

app.use( express.json() )

app.get(‘/api/hello’, 
(req, res) => {  message: ‘Hello’  } )

app.listen(port, () => { console.log( ‘Server Running’ ) } )    : Terminal - node server.js
