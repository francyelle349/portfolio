let isDarkMode = false;

function ThemeColor() {
    // Get DOM elements/*  */
    const icon = document.getElementById('theme-icon');
    const navbar = document.querySelector('.navbar');
    const offcanvas = document.querySelector('.offcanvas');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const homeHeading = document.getElementById('home-heading');
    const dropdowItem = document.querySelector('.dropdown-item');
    const aboutTitle = document.getElementById('about-title');
    const aboutDescription = document.getElementById('about-description');
    const headingSub = document.getElementById('heading');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
       
        document.body.style.backgroundColor = "black";
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        offcanvas.classList.remove('text-bg-light');
        offcanvas.classList.add('text-bg-dark');
        dropdownMenu.classList.add('dropdown-menu-dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        dropdownButton.style.color = 'white';
        homeHeading.style.color = 'white';
        icon.style.color = 'white'; 
        aboutTitle.style.color = 'white';
        aboutDescription.style.color = 'white';
    
    } else {
       
        document.body.style.backgroundColor = "white";
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        offcanvas.classList.remove('text-bg-dark');
        offcanvas.classList.add('text-bg-light');
        dropdownMenu.classList.remove('dropdown-menu-dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        dropdownButton.style.color = 'black';
        homeHeading.style.color = 'black';
        icon.style.color = 'black';
        aboutTitle.style.color = 'black';
        aboutDescription.style.color = 'black';
        headingSub.style.color = 'black';

    }
}


document.getElementById('theme-icon').addEventListener('click', ThemeColor);


ThemeColor();


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
            const aboutTitle = document.getElementById('about-title');
            const aboutDescription = document.getElementById('about-description');
            if (language === 'english') {
                home.textContent = 'Home';
                about.textContent = 'About';
                portfolio.textContent = 'Portfolio';
                skills.textContent = 'Skills';
                myArticles.textContent = 'articles';
                heading.textContent = 'Software Developer Full-Stack';
                aboutTitle.textContent = 'About me';
                aboutDescription.textContent = 'Full-Stack Software Developer with experience in mobile and web application development. My expertise includes Flutter for cross-platform app development, along with Java, Spring Boot, Docker, and databases, working with both SQL and NoSQL. I have  experience with cloud-based development using Firebase. Additionally, I have experience implementing the BLoC pattern for state management in Flutter and integrating RESTful and third-party APIs to build scalable and high-performance applications.';
            
                
            } else if (language === 'portuguese') {
                home.textContent = 'Página Inicial';
                about.textContent = 'Sobre';
                portfolio.textContent = 'Portfólio';
                skills.textContent = 'Habilidades';
                myArticles.textContent = 'Meus Artigos';
                heading.textContent = 'Desenvolvedora de Software Full-Stack';
                aboutTitle.textContent = 'Sobre me';
                aboutDescription.textContent = 'Desenvolvedora de Software Full-Stack com experiência em desenvolvimento de aplicações móveis e web. Minhas habilidades incluem Flutter para desenvolvimento de aplicativos multiplataforma, juntamente com Java, Spring Boot, Docker e bancos de dados, trabalhando tanto com SQL quanto com NoSQL. Eu tenho experiência com desenvolvimento baseado em nuvem usando Firebase. Além disso, tenho experiência em implementar o padrão BLoC para gerenciamento de estado em Flutter e integrar APIs RESTful e de terceiros para construir aplicações escaláveis e de alto desempenho.';
            } else {
                home.textContent = 'Select a language';

            }
        });
    });
});