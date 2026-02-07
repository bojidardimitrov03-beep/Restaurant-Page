export function loadHome() {
    const content = document.getElementById('content');
    
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-page');
    
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800';
    image.alt = 'Restaurant interior';
    
    const headline = document.createElement('h1');
    headline.textContent = 'The Golden Spoon';
    
    const description = document.createElement('p');
    description.textContent = 'Welcome to The Golden Spoon, where culinary excellence meets elegant dining. For over 30 years, we have been serving the finest dishes crafted from locally-sourced ingredients.';
    
    const description2 = document.createElement('p');
    description2.textContent = 'Our award-winning chefs blend traditional techniques with modern innovation to create unforgettable dining experiences. Join us for an evening of exceptional cuisine in a warm, inviting atmosphere.';
    
    const description3 = document.createElement('p');
    description3.textContent = 'Whether you\'re celebrating a special occasion or simply enjoying a night out, The Golden Spoon promises to deliver memories that will last a lifetime.';
    
    homeDiv.appendChild(image);
    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    homeDiv.appendChild(description2);
    homeDiv.appendChild(description3);
    
    content.appendChild(homeDiv);
}