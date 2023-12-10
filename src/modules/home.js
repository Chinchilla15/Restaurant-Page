export default function initLoad(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const nav = document.createElement('nav');
    const list = document.createElement('ul');
    const listItem0 = document.createElement('li');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');
    const main = document.createElement('main');
    const article = document.createElement('article');
    const mainText = document.createElement('h1');
    const subText1 = document.createElement('p');
    const subText2 = document.createElement('p');

    const footer = document.createElement('footer');

    listItem0.classList.add('tab');
    listItem1.classList.add('tab');
    listItem2.classList.add('tab');
    listItem3.classList.add('tab');
    mainText.classList.add('mainText');
    subText1.classList.add('subText1');
    subText2.classList.add('subText2');

    title.innerHTML = "Nitro Coffee";
    description.innerHTML = "Coffee Shop & Co-Working Space";

    listItem0.innerHTML = "HOME";
    listItem1.innerHTML = "MENU";
    listItem2.innerHTML = "ABOUT";
    listItem3.innerHTML = "LOCATION";

    mainText.innerHTML = "You don't have to stay home <br> to feel like home.";
    subText1.innerHTML = "Visit our unique space and let your creativity flow. You bring the ideas, we provide the energy.";
    subText2.innerHTML = "A unique space in the city, where you can taste the best-in-class coffee straight from El Salvador, work from our shop with dedicated spaces or come hang out with friends and family.";
    
    header.append(title,description,nav);

    nav.appendChild(list);
    list.append(listItem0 ,listItem1, listItem2, listItem3);

    main.appendChild(article);
    
    article.append(mainText, subText1,subText2);

    content.append(header, main, footer);
}