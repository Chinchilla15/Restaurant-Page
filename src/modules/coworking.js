export default function renderCoworkingTab(){
    const mainContent = document.querySelector('main');
    
    const mainDiv = document.createElement('div');
    const mainText = document.createElement('h3');

    mainDiv.classList.add('mainDiv');
    mainText.classList.add('comingSoon')

    mainText.innerHTML = "Coming Soon!";


    mainContent.appendChild(mainDiv);
    mainDiv.append(mainText);
}