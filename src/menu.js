export function loadMenu() {
    const content = document.getElementById('content');
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');
    
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    menuDiv.appendChild(title);
    
    // Appetizers Section
    const appetizersSection = document.createElement('div');
    appetizersSection.classList.add('menu-section');
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'Appetizers';
    appetizersSection.appendChild(appetizersTitle);
    
    const appetizers = [
        { name: 'Bruschetta', description: 'Toasted bread with fresh tomatoes, basil, and garlic', price: '$12' },
        { name: 'Calamari Fritti', description: 'Crispy fried squid with marinara sauce', price: '$15' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze', price: '$14' }
    ];
    
    appetizers.forEach(item => {
        appetizersSection.appendChild(createMenuItem(item));
    });
    
    menuDiv.appendChild(appetizersSection);
    
    // Main Courses Section
    const mainsSection = document.createElement('div');
    mainsSection.classList.add('menu-section');
    
    const mainsTitle = document.createElement('h2');
    mainsTitle.textContent = 'Main Courses';
    mainsSection.appendChild(mainsTitle);
    
    const mains = [
        { name: 'Filet Mignon', description: 'Prime beef tenderloin with roasted vegetables and red wine reduction', price: '$42' },
        { name: 'Lobster Ravioli', description: 'Handmade pasta filled with lobster in a cream sauce', price: '$38' },
        { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter and asparagus', price: '$35' },
        { name: 'Chicken Marsala', description: 'Pan-seared chicken breast with mushroom marsala wine sauce', price: '$28' }
    ];
    
    mains.forEach(item => {
        mainsSection.appendChild(createMenuItem(item));
    });
    
    menuDiv.appendChild(mainsSection);
    
    // Desserts Section
    const dessertsSection = document.createElement('div');
    dessertsSection.classList.add('menu-section');
    
    const dessertsTitle = document.createElement('h2');
    dessertsTitle.textContent = 'Desserts';
    dessertsSection.appendChild(dessertsTitle);
    
    const desserts = [
        { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', price: '$10' },
        { name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar crust', price: '$12' },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center and vanilla ice cream', price: '$11' }
    ];
    
    desserts.forEach(item => {
        dessertsSection.appendChild(createMenuItem(item));
    });
    
    menuDiv.appendChild(dessertsSection);
    
    content.appendChild(menuDiv);
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    
    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;
    
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDesc);
    
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = item.price;
    
    menuItem.appendChild(itemInfo);
    menuItem.appendChild(itemPrice);
    
    return menuItem;
}