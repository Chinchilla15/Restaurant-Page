import initLoad from "./modules/home";
import renderMenuTab from "./modules/menu";
import renderAboutTab from "./modules/about";
import renderCoworkingTab from "./modules/coworking";
import './styles/main.css';
import './styles/menu.css';
import './styles/about.css';

initLoad();
 
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const homeTab = document.querySelector('.homeTab');
    const menuTab = document.querySelector('.menuTab');
    const aboutTab = document.querySelector('.aboutTab');
    const coworkingTab = document.querySelector('.coworkingTab')
    const mainContent = document.querySelector('main');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {         
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

    aboutTab.addEventListener('click',()=>{
        renderAboutTab();
    });

    coworkingTab.addEventListener('click',()=>{
        renderCoworkingTab();
    });
};

// Initialize tabs and their event listeners
initializeTabs();