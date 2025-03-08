 let isDarkMode = true;;
function ThemeColor() {

    // take the id

    const icon = document.getElementById('theme-icon');
    const navbar = document.querySelector('.navbar');
    const offcanvas = document.querySelector('.offcanvas');
    

   // Remove individual classes (style and icon name separately)
   icon.classList.remove('far', 'fas', 'fa-moon');

   if (isDarkMode) {

    icon.classList.add('fas', 'fa-moon'); // Add solid moon
       document.body.style.backgroundColor = "black";

       navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        
        // Offcanvas styling
        offcanvas.classList.remove('text-bg-light');
        offcanvas.classList.add('text-bg-dark');
        
        // Update dropdown menu
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.classList.add('dropdown-menu-dark');

        document.getElementById('dropdownMenuButton').style.color = 'white';

       

      

     
    
    
    
   } else {
       
       icon.classList.add('far', 'fa-moon'); // Add regular moon
       document.body.style.backgroundColor = "white";
       navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        
        // Offcanvas styling
        offcanvas.classList.remove('text-bg-dark');
        offcanvas.classList.add('text-bg-light');
        
        // Update dropdown menu
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('dropdown-menu-dark');
        
        document.getElementById('dropdownMenuButton').style.color = 'black';





   }

  
   isDarkMode = !isDarkMode; //

    // condition



}

const icon = document.getElementById('theme-icon');
icon.addEventListener('click', ThemeColor);

