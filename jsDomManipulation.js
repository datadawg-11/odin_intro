// your javascript file
const container = document.querySelector('#container');
// container is the reference

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Create a <p> with red text that says “Hey I’m red!”
const redTextElement = document.createElement('p');
redTextElement.style.cssText = 'color: red';
redTextElement.textContent = "Hey I'm red!";

container.appendChild(redTextElement)

// Create an <h3> with blue text that says “I’m a blue h3!”
const header3 = document.createElement('h3');
header3.style.cssText = 'color:blue';
header3.textContent = "I'm a blue h3";

container.appendChild(header3);

/* 
Create a <div> with a black border and pink background color with the following elements inside of it:
 another <h1> that says “I’m in a div”
 a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container
*/

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';
container.appendChild(div)

const header1 = document.createElement('h1'); 
header1.textContent = "I'm a div";
div.appendChild(header1)

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!'
div.appendChild(para2)


