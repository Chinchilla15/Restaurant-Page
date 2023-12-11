import initLoad from "./modules/home";
import renderMenuTabenuTab from "./modules/menu";
import renderAboutTab from "./modules/about";
import './styles/main.css';

initLoad();
 
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const homeTab = document.querySelector('.homeTab');
    const menuTab = document.querySelector('.menuTab');
    const aboutTab = document.querySelector('.aboutTab');
    const mainContent = document.querySelector('main');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log(`Clicked on ${tab.textContent}`);
           
            if (tab !== homeTab) {
                mainContent.innerHTML = ''; 
            };

            // Add logic to load content for each tab 
        });
    });

    homeTab.addEventListener('click', () => {
        const wholeContent = document.querySelector('#content');

        if (mainContent.innerHTML === "") {
            wholeContent.innerHTML = "";
            initLoad(); 

            // Reinitialize the tabs and their event listeners
            initializeTabs();
        };
    });
};

// Initialize tabs and their event listeners
initializeTabs();

/*
menuTab.addEventListener('click',()=>{
    mainContent.innerHTML = ""
    console.log('test')
})

aboutTab.addEventListener('click',()=>{
    mainContent.innerHTML = ""
})
*/