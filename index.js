    window.addEventListener("load", () => {
   // JavaScript code for calculating BMI and displaying the results
   const form = document.querySelector('form');
   const bmiElement = document.querySelector('#bmi');
   const categoryElement = document.querySelector('.category');

   form.addEventListener('submit', (event) => {
      
   event.preventDefault();

   // Get the user's height and weight input
   const height = parseFloat(document.querySelector('#height').value);
   const weight = parseFloat(document.querySelector('#weight').value);

   // Calculate the user's BMI
   const bmi = weight / ((height / 100) ** 2);

   // Round the BMI to 1 decimal place
   const roundedBmi = bmi.toFixed(1);

   // Display the user's BMI
   bmiElement.textContent = `Your BMI is ${roundedBmi}`;

   // Determine the BMI category based on the user's BMI value
   if (bmi < 18.5) {
     categoryElement.textContent = 'Underweight';
     categoryElement.classList.add('underweight');
   } else if (bmi >= 18.5 && bmi <= 24.9) {
     categoryElement.textContent = 'Normal weight';
     categoryElement.classList.add('normal');
   } else if (bmi >= 25 && bmi <= 29.9) {
     categoryElement.textContent = 'Overweight';
     categoryElement.classList.add('overweight');
   } else {
     categoryElement.textContent = 'Obesity';
     categoryElement.classList.add('obesity');
   }
 });

 // JavaScript code for the dark mode button
 const toggleDarkMode = () => {
   const body = document.querySelector('body');
   const container = document.querySelector('.container');
   const labels = document.querySelectorAll('label');
   const heading = document.querySelectorAll('h1');
   const inputs = document.querySelectorAll('input[type="number"]');
   const buttons = document.querySelectorAll('button');
   const result = document.getElementById('#result');
   const category = document.getElementById('category');
   const darkModeBtn = document.getElementById('dark-mode-btn');
   body.classList.toggle('dark');
   container.classList.toggle('dark');
   labels.forEach(label => label.classList.toggle('dark'));
   labels.forEach(label => label.parentNode.classList.toggle('dark'));
   heading.forEach(h1 => h1.classList.toggle('dark'));
   heading.forEach(h1 => h1.parentNode.classList.toggle('dark'));
   // modify label's parent style
   inputs.forEach(input => input.classList.toggle('dark'));
   buttons.forEach(button => button.classList.toggle('dark'));
   result.classList.toggle('dark');
   category.classList.toggle('dark');
   darkModeBtn.classList.toggle('dark');
   heading.style.color = body.classList.contains('dark') ? 'white !important' : 'black !important';
   if (body.classList.contains('dark')) {
     darkModeBtn.innerHTML = 'Light Mode';
   } else {
     darkModeBtn.innerHTML = 'Dark Mode';
   }
 };
 
 document.getElementById('dark-mode-btn').addEventListener('click', toggleDarkMode);
    })
      
   

