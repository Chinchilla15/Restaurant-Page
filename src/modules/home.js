export default function initLoad(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const nav = document.createElement('nav');
    const list = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const aboutTab = document.createElement('li');
    const locationTab = document.createElement('li');
    const main = document.createElement('main');
    const article = document.createElement('article');
    const mainText = document.createElement('h1');
    const subText1 = document.createElement('p');
    const subText2 = document.createElement('p');
    const buttonBox = document.createElement('div')
    const menuButton = document.createElement('button');
    const infoButton = document.createElement('button');

    const footer = document.createElement('footer');

    homeTab.classList.add('tab', 'homeTab');
    menuTab.classList.add('tab', 'menuTab');
    aboutTab.classList.add('tab', 'aboutTab');
    locationTab.classList.add('tab', 'locationTab');
    mainText.classList.add('mainText');
    subText1.classList.add('subText1');
    subText2.classList.add('subText2');
    buttonBox.classList.add('buttonBox');
    menuButton.classList.add('articleButton');
    infoButton.classList.add('articleButton');

    title.innerHTML = "Nitro Coffee";
    description.innerHTML = "Coffee Shop & Co-Working Space";

    homeTab.innerHTML = "HOME";
    menuTab.innerHTML = "MENU";
    aboutTab.innerHTML = "ABOUT";
    locationTab.innerHTML = "LOCATION";

    mainText.innerHTML = "You don't have to stay home <br> to feel like home.";
    subText1.innerHTML = "Visit our unique space and let your creativity flow. You bring the ideas, we provide the energy.";
    subText2.innerHTML = "Quote";
    menuButton.innerHTML = "Menu";
    infoButton.innerHTML = "Learn More";
    
    header.append(title,description,nav);

    nav.appendChild(list);
    list.append(homeTab ,menuTab, aboutTab, locationTab);

    main.appendChild(article);
    
    article.append(mainText, subText1,buttonBox,subText2);
    buttonBox.append(menuButton,infoButton)

    content.append(header, main, footer);

}
