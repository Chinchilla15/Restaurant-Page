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
    
    mainDiv.classList.add('mainAboutDiv');
    aboutText.classList.add('aboutText');
    hoursDiv.classList.add('hours');
    locationDiv.classList.add('location');
    creatorDiv.classList.add('creator');

    aboutHeader.innerHTML = "For the coffe lovers";
    aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Auctor eu augue ut lectus arcu bibendum. Id venenatis a condimentum vitae sapien pellentesque habitant. Quis viverra nibh cras pulvinar mattis nunc. Nisl purus in mollis nunc sed id semper risus. Ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Egestas congue quisque egestas diam in arcu. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Praesent tristique magna sit amet purus gravida quis';


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
    }

    locationLabel.innerHTML = "LOCATION";
    location.innerHTML = "SOMWHERE OUT THERE";

    creatorDiv.innerHTML = 'CREATED BY <a href="https://github.com/Chinchilla15" target="_blank">ALESSANDRO CH.</a>';

    mainContent.appendChild(mainDiv);
    mainDiv.append(aboutHeader,aboutText, hoursDiv, locationDiv, creatorDiv);
    locationDiv.append(locationLabel, location);
};