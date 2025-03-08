 let isDarkMode = true;
function ThemeColor() {

    // take the id

    const icon = document.getElementById('theme-icon');

   // Remove individual classes (style and icon name separately)
   icon.classList.remove('far', 'fas', 'fa-moon');

   if (isDarkMode) {
       icon.classList.add('far', 'fa-moon'); // Add regular moon
       document.body.style.backgroundColor = "white";
   } else {
       icon.classList.add('fas', 'fa-moon'); // Add solid moon
       document.body.style.backgroundColor = "black";
   }

   isDarkMode = !isDarkMode; //

    // condition



}

const icon = document.getElementById('theme-icon');
icon.addEventListener('click', ThemeColor);

