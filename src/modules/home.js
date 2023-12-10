export default function initLoad(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const main = document.createElement('div');
    const info = document.createElement('div');
    const hours = document.createElement('div');
    const contact = document.createElement('div');
    const nav = document.createElement('nav');
    const list = document.createElement('ul')
    const listItem0 = document.createElement('li')
    const listItem1 = document.createElement('li')
    const listItem2 = document.createElement('li')
    const listItem3 = document.createElement('li')

    const footer = document.createElement('footer');

    main.classList.add("main");
    info.classList.add('homeCard');
    hours.classList.add('homeCard');
    contact.classList.add('homeCard');
    listItem0.classList.add('tab')
    listItem1.classList.add('tab');
    listItem2.classList.add('tab');
    listItem3.classList.add('tab');

    title.innerHTML = "Nitro Coffee";
    description.innerHTML = "Coffee Shop & Co-Working Space";

    listItem0.innerHTML = "HOME"
    listItem1.innerHTML = "MENU"
    listItem2.innerHTML = "ABOUT"
    listItem3.innerHTML = "LOCATION"

    info.innerHTML = "INFO";
    hours.innerHTML = "HOURS";
    contact.innerHTML = "CONTACT"
    
    footer.innerHTML = "FOOTER"

    header.append(title,description,nav)

    nav.appendChild(list)
    list.append(listItem0 ,listItem1, listItem2, listItem3)

    content.append(header, main, footer)

    main.append(info, hours, contact);
}