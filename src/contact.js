export function loadContact() {
    const content = document.getElementById('content');
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-page');
    
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    contactDiv.appendChild(title);
    
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    // Phone
    const phoneItem = document.createElement('div');
    phoneItem.classList.add('contact-item');
    
    const phoneTitle = document.createElement('h3');
    phoneTitle.textContent = '📞 Phone';
    
    const phoneText = document.createElement('p');
    phoneText.textContent = '(555) 123-4567';
    
    phoneItem.appendChild(phoneTitle);
    phoneItem.appendChild(phoneText);
    contactInfo.appendChild(phoneItem);
    
    // Address
    const addressItem = document.createElement('div');
    addressItem.classList.add('contact-item');
    
    const addressTitle = document.createElement('h3');
    addressTitle.textContent = '📍 Address';
    
    const addressText = document.createElement('p');
    addressText.textContent = '123 Gourmet Street, Culinary District, Foodville, CA 90210';
    
    addressItem.appendChild(addressTitle);
    addressItem.appendChild(addressText);
    contactInfo.appendChild(addressItem);
    
    // Hours
    const hoursItem = document.createElement('div');
    hoursItem.classList.add('contact-item');
    
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = '🕐 Hours';
    
    const hoursText = document.createElement('p');
    hoursText.innerHTML = 'Monday - Thursday: 5:00 PM - 10:00 PM<br>Friday - Saturday: 5:00 PM - 11:00 PM<br>Sunday: 4:00 PM - 9:00 PM';
    
    hoursItem.appendChild(hoursTitle);
    hoursItem.appendChild(hoursText);
    contactInfo.appendChild(hoursItem);
    
    // Email
    const emailItem = document.createElement('div');
    emailItem.classList.add('contact-item');
    
    const emailTitle = document.createElement('h3');
    emailTitle.textContent = '✉️ Email';
    
    const emailText = document.createElement('p');
    emailText.textContent = 'reservations@goldenspoon.com';
    
    emailItem.appendChild(emailTitle);
    emailItem.appendChild(emailText);
    contactInfo.appendChild(emailItem);
    
    contactDiv.appendChild(contactInfo);
    
    // Map placeholder
    const mapPlaceholder = document.createElement('div');
    mapPlaceholder.classList.add('map-placeholder');
    mapPlaceholder.textContent = 'Map Location';
    contactDiv.appendChild(mapPlaceholder);
    
    content.appendChild(contactDiv);
}