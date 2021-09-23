// the JavaScript file

// Method 1
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");




// Method 2
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'fuchsia'
  alert("Hello World");
});