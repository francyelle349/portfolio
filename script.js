 let isDarkMode = true;
function ThemeColor() {

    // take the id

    const icon = document.getElementById('theme-icon');
    const navbar = document.querySelector('.navbar');
    const offcanvas = document.querySelector('.offcanvas');
    

   
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
        document.getElementById('home-heading').style.color = 'white';

       

      

     
    
    
    
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
        document.getElementById('home-heading').style.color = 'black';





   }

  
   isDarkMode = !isDarkMode; //

    // condition



}

const icon = document.getElementById('theme-icon');
icon.addEventListener('click', ThemeColor);


console.log("Script.js is loaded!");

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.dropdown-item');
    items.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const language = item.getAttribute('href').substring(1);
            console.log("Clicked language:", language); 
            const home = document.getElementById('home');
            const about = document.getElementById('about');
            const portfolio = document.getElementById('portfolio');
            const skills = document.getElementById('skills');
            const myArticles = document.getElementById('articles');
            const heading = document.getElementById('heading');
            if (language === 'english') {
                home.textContent = 'Home';
                about.textContent = 'About';
                portfolio.textContent = 'Portfolio';
                skills.textContent = 'Skills';
                myArticles.textContent = 'articles';
                heading.textContent = 'Software Developer Full-Stack';
                
            } else if (language === 'portuguese') {
                home.textContent = 'Página Inicial';
                about.textContent = 'Sobre';
                portfolio.textContent = 'Portfólio';
                skills.textContent = 'Habilidades';
                myArticles.textContent = 'Meus Artigos';
                heading.textContent = 'Desenvolvedora de Software Full-Stack';
            } else {
                home.textContent = 'Select a language';
            }
        });
    });
});