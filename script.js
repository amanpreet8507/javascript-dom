// DOM Lab

//Get the nav-bar element by its id and output the result with console.log
//Which data type was returned?
const navbar = document.getElementById('nav-bar');
console.log(typeof(navbar));
console.log(navbar);

//Get the main element using the querySelector method and console.log the result
//Which data type was returned?
const main1 = document.querySelector('main');
console.log(typeof(main1));
console.log(main1);
console.log('\n');

//Get the main element using the querySelector method and console.log the result
//Which data type was returned?
const allA = document.querySelectorAll('a')
console.log(typeof(allA));
console.log(allA);
console.log('\n');

//Now try selecting the <a> tag with querySelector
const a1 = document.querySelector('a');
console.log(typeof(a1));
console.log(a1);
console.log('\n');

//What is the observed difference between querySelectorAll and querySelector?
console.log('Whatis the observed difference between querySelectorAll and querySelector?')
console.log('With querySelectorAll it returns all the elements matching html tag or CSS selector but querySelector only return the very first element that matches a specified html tag or CSS selector within the document.')
console.log('\n');
/*************Getting and Setting InnerHTML*************/
//Get the Logo element and store it in a variable
const logo1 = document.querySelector('.logo');

//console.log the innerHTML property of the element
console.log(logo1.innerText);

//Assign a new value to the innerHTML property to change the Logo on the site
logo1.innerText = "New LOGO";
console.log(logo1.innerText);

/**********Setting Style on Multiple Elements**********/
//Get a list of every <a> element using querySelectorAll again and store it in a variable
const allA1 = document.querySelectorAll('a')
console.log(allA1);

//Use a for loop with the list to apply a new style to each element
//--Use classList to add a new CSS class to each element in the list (ie: link)
//--Add a new class selector (matching the class added in previous step) in styles.css
//--Add the text-decoration: underline and color: #7FDEFF properties to the selector
const listElements = document.querySelectorAll('activity-item');

for(i=0; i<listElements.length; i++){
    listElements[i].classList.add['activity-item:hover'];
}

//More Practice
//Now that you know how to change HTML and 
//the style of elements using JavaScript, 
//try changing other elements on the page 
//for example how would you change the text of the User from Grace Jones to be Your Name?

const userName = document.querySelector('.username');

userName.textContent = "Amanpreet";

userName.classList.add('username:hover');