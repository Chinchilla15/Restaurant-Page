export default function renderMenuTab(){
    
    const mainContent = document.querySelector('main');

    const menuDiv = document.createElement('div');
    const hotDrink = document.createElement('p');
    const coldDrink = document.createElement('p');
    
    let items = 12;

    const menuItems = [
       // Hot Brews
       { name: 'Classic Americano', description: 'A single or double shot of espresso with hot water', price: '$2.50' },
       { name: 'Caramel Macchiato', description: 'Espresso with steamed milk and vanilla syrup, topped with caramel', price: '$3.75' },
       { name: 'Mocha', description: 'Espresso with steamed milk, chocolate syrup, and whipped cream', price: '$4.00' },
       { name: 'Flat White', description: 'Espresso with velvety microfoam', price: '$3.50' },
       { name: 'Hazelnut Latte', description: 'Espresso with steamed milk and hazelnut flavor', price: '$3.50' },
       { name: 'Irish Coffee', description: 'Coffee with a shot of Irish whiskey and topped with cream', price: '$5.00' },

       // Cold Brews
       { name: 'Iced Americano', description: 'Chilled espresso with cold water over ice', price: '$3.00' },
       { name: 'Vanilla Iced Latte', description: 'Iced latte with vanilla syrup and milk over ice', price: '$4.25' },
       { name: 'Cold Brew with Cream', description: 'Smooth cold brew coffee with a touch of cream', price: '$3.50' },
       { name: 'Iced Caramel Macchiato', description: 'Iced espresso with milk, vanilla syrup, and caramel drizzle', price: '$4.50' },
       { name: 'Peppermint Mocha Cold Brew', description: 'Cold brew with peppermint syrup, chocolate, and whipped cream', price: '$4.50' },
       { name: 'Almond Milk Cold Brew', description: 'Cold brew coffee with almond milk', price: '$4.00' },
    ];

    
    for(let i = 0; i < items; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add('menuItem');

    const itemName = document.createElement('p');
    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    const menuItemData = menuItems[i];
    itemName.innerHTML = menuItemData.name;
    itemDescription.innerHTML = menuItemData.description;
    itemPrice.innerHTML = menuItemData.price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    menuDiv.appendChild(menuItem);
    }   
    

    menuDiv.classList.add('menuDiv');
    hotDrink.classList.add('hotDrink');
    coldDrink.classList.add('coldDrink');

    hotDrink.innerHTML = 'Hot Drinks';
    coldDrink.innerHTML = 'Cold Drinks'

    menuDiv.append(hotDrink,coldDrink)

    mainContent.appendChild(menuDiv);

}