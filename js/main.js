const compose = (...functions) => data => 
functions.reduceRight((value, func) => func(value), data);


let description = document.getElementById('description');
let calories = document.getElementById('calories');
let carbs = document.getElementById('carbs');
let protein = document.getElementById('protein');
let submitBtn = document.getElementById('submit');

