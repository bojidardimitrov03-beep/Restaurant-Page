import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

// Load the home page initially
loadHome();

// Set home button as active initially
document.getElementById('home-btn').classList.add('active');

// Get all navigation buttons
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

// Function to clear content
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// Function to set active button
function setActiveButton(activeBtn) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Event listeners for tab switching
homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
    setActiveButton(homeBtn);
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
    setActiveButton(menuBtn);
});

contactBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
    setActiveButton(contactBtn);
});