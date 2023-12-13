import initLoad from "./modules/home";
import renderMenuTab from "./modules/menu";
import renderAboutTab from "./modules/about";
import renderCoworkingTab from "./modules/coworking";
import './styles/main.css';
import './styles/menu.css';
import './styles/about.css';
import './styles/coworking.css';

initLoad();
 
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const homeTab = document.querySelector('.homeTab');
    const menuTab = document.querySelector('.menuTab');
    const menuButton = document.querySelector('.menuButton')
    const aboutTab = document.querySelector('.aboutTab');
    const aboutButton = document.querySelector('.aboutButton')
    const coworkingTab = document.querySelector('.coworkingTab')
    const mainContent = document.querySelector('main');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {       
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');  
            if (tab !== homeTab) {
                mainContent.innerHTML = ''; 
            };
        });
    });

    homeTab.addEventListener('click', () => {
        const wholeContent = document.querySelector('#content');
        
        wholeContent.innerHTML = "";
        initLoad(); 

        // Reinitialize the tabs and their event listeners
        initializeTabs();
    });

    menuTab.addEventListener('click',()=>{
       renderMenuTab();
    });
    
    menuButton.addEventListener('click',()=>{
        menuTab.classList.add('active');  
        mainContent.innerHTML = ''; 
        renderMenuTab();
    })

    aboutTab.addEventListener('click',()=>{
        renderAboutTab();
    });

    aboutButton.addEventListener('click',()=>{
        aboutTab.classList.add('active');
        mainContent.innerHTML = '';
        renderAboutTab();
    })

    coworkingTab.addEventListener('click',()=>{
        renderCoworkingTab();
    });
};

// Initialize tabs and their event listeners
initializeTabs();