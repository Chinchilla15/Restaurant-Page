export default function renderAboutTab(){
    const mainContent = document.querySelector('main');
    
    const mainDiv = document.createElement('div');
    const aboutHeader = document.createElement('h3');

    mainDiv.classList.add('mainDiv');

    aboutHeader.innerHTML = "For the coffe lovers";


    mainContent.appendChild(mainDiv);
    mainDiv.append(aboutHeader);
};