export default function renderAboutTab(){
    const mainContent = document.querySelector('main');
    
    const mainDiv = document.createElement('div');
    const aboutHeader = document.createElement('h3');
    const aboutText = document.createElement('p');
    const hoursDiv = document.createElement('section');
    const hoursLabel = document.createElement('h4')
    const locationDiv = document.createElement('section');
    const locationLabel = document.createElement('h4'); 
    const location = document.createElement('p');
    const creatorDiv = document.createElement('section');
    const map = document.createElement('iframe');

    const locationIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    locationIcon.setAttribute("fill", "currentColor");
    locationIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    locationIcon.setAttribute("viewBox", "0 0 24 24");   
    locationIcon.innerHTML = '<path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" />'

    const hoursIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    hoursIcon.setAttribute("fill", "currentColor");
    hoursIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    hoursIcon.setAttribute("viewBox", "0 0 24 24");   
    hoursIcon.innerHTML = '<path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z" />';

    const gitHubIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gitHubIcon.setAttribute("fill", "currentColor");
    gitHubIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    gitHubIcon.setAttribute("viewBox", "0 0 24 24");   
    gitHubIcon.innerHTML = '<path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />';

    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.46260778172!2d-122.20590397684016!3d37.40296192873275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses-419!2ssv!4v1702569832260!5m2!1ses-419!2ssv";
    map.width = "100%";
    map.height = "400";
    map.style.border = "0";
    map.allowfullscreen = true;
    map.loading = "lazy";
    map.referrerpolicy = "no-referrer-when-downgrade";

    aboutHeader.innerHTML = "For the coffe lovers";
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Auctor eu augue ut lectus arcu bibendum. Id venenatis a condimentum vitae sapien pellentesque habitant. Quis viverra nibh cras pulvinar mattis nunc. Nisl purus in mollis nunc sed id semper risus. Ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Egestas congue quisque egestas diam in arcu. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Praesent tristique magna sit amet purus gravida quis';

    mainDiv.classList.add('mainAboutDiv');
    aboutText.classList.add('aboutText');
    hoursDiv.classList.add('hours');
    locationDiv.classList.add('location');
    creatorDiv.classList.add('creator');

    hoursLabel.innerHTML = 'HOURS';
    hoursDiv.appendChild(hoursLabel);

    const hoursItem = [
        { day: 'Monday', hours: '6:00 a.m - 8:00 p.m'},
        { day: 'Tuesday', hours: '6:00 a.m - 8:00 p.m'},
        { day: 'Wednesday', hours: '6:00 a.m - 8:00 p.m'},
        { day: 'Thursday', hours: '6:00 a.m - 8:00 p.m'},
        { day: 'Friday', hours: '6:00 a.m - 10:00 p.m'},
        { day: 'Saturday', hours: '6:00 a.m - 11:00 p.m'},
        { day: 'Sunday', hours: '6:00 a.m - 11:00 p.m'}
    ];

    for(let i = 0; i < 7; i++){ 
        const hoursData = hoursItem[i];
        const hoursItemElement = document.createElement('p');

        hoursItemElement.textContent = `${hoursData.day}: ${hoursData.hours}`;
    
        hoursDiv.appendChild(hoursItemElement);
    };

    locationLabel.innerHTML = "LOCATION";
    location.innerHTML = "123 Fake Street <br> Silicon Valley, CA";

    creatorDiv.innerHTML = 'Created by <a href="https://github.com/Chinchilla15" target="_blank">Alessandro Ch.</a>';

    mainContent.appendChild(mainDiv);
    mainDiv.append(aboutHeader,aboutText, hoursDiv, locationDiv, creatorDiv);
    locationLabel.appendChild(locationIcon);
    hoursLabel.appendChild(hoursIcon);
    creatorDiv.appendChild(gitHubIcon);
    locationDiv.append(locationLabel, location, map);
};