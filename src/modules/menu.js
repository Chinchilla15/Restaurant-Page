export default function renderMenuTab(){
    
    const mainContent = document.querySelector('main');

    const menuDiv = document.createElement('div');
    const hotDrink = document.createElement('p');
    const coldDrink = document.createElement('p');
    
    let text = ["item0", "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11"];
    for(let i = 0; i < text.length; i += 1) {
    const menuItem = document.createElement("div");
    menuItem.classList.add('menuItem')
    menuItem.innerHTML = text[i];
    menuDiv.appendChild(menuItem)
}   


    menuDiv.classList.add('menuDiv');
    hotDrink.classList.add('hotDrink');
    coldDrink.classList.add('coldDrink');

    hotDrink.innerHTML = 'Hot Drinks';
    coldDrink.innerHTML = 'Cold Drinks'

    menuDiv.append(hotDrink,coldDrink)

    mainContent.appendChild(menuDiv);

}