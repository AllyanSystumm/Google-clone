// Google Search Button Functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    performSearch();
});

// I'm Feeling Lucky Button Functionality
document.querySelector('.lucky-btn').addEventListener('click', function() {
    showLuckyMessage();
});

// Input Search Functionality
const searchInput = document.querySelector('.search-box');
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Perform search function
function performSearch() {
    const query = document.querySelector('.search-box').value;
    if (query.trim() === '') {
        showAlert('Please enter a search query.');
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Show alert when search query is empty
function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.innerText = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Display a message when 'I'm Feeling Lucky' is clicked
function showLuckyMessage() {
    const luckyMessage = document.createElement('div');
    luckyMessage.classList.add('lucky-message');
    luckyMessage.innerText = "Good luck! We're feeling lucky too!";
    document.body.appendChild(luckyMessage);

    setTimeout(() => {
        luckyMessage.remove();
    }, 3000);
}

// Additional effects for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.classList.add('hovered');
    });

    button.addEventListener('mouseleave', function() {
        button.classList.remove('hovered');
    });
});

// Additional animations for search box focus
searchInput.addEventListener('focus', function() {
    searchInput.style.boxShadow = '0 4px 8px rgba(66, 133, 244, 0.2)';
});

searchInput.addEventListener('blur', function() {
    searchInput.style.boxShadow = 'none';
});

// Creating more interaction with the footer
const footer = document.querySelector('.footer');
footer.addEventListener('mouseenter', function() {
    footer.style.color = '#000';
});

footer.addEventListener('mouseleave', function() {
    footer.style.color = '#70757a';
});

// Simulating a loading effect on button click
function simulateLoading(button) {
    button.disabled = true;
    button.innerText = 'Loading...';

    setTimeout(() => {
        button.disabled = false;
        button.innerText = button.classList.contains('search-btn') ? 'Google Search' : 'I\'m Feeling Lucky';
    }, 2000);
}

document.querySelector('.search-btn').addEventListener('click', function() {
    simulateLoading(this);
});

document.querySelector('.lucky-btn').addEventListener('click', function() {
    simulateLoading(this);
});

// Disabling buttons after form submission
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Enabling buttons after some time
function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    });
}

document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    disableButtons();
    setTimeout(() => {
        enableButtons();
    }, 2000);
});

// Random Google Search suggestions (for demo purposes)
const suggestions = [
    "Weather today",
    "Latest news",
    "Top programming languages 2024",
    "How to learn Python",
    "Best laptops for developers",
    "AI trends in 2024",
    "HTML, CSS, and JS tutorials",
    "Upcoming movies 2024"
];

function displayRandomSuggestion() {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    searchInput.setAttribute('placeholder', suggestions[randomIndex]);
}

// Display a random suggestion when the page loads
window.onload = displayRandomSuggestion;

// Clear search box on double-click
searchInput.addEventListener('dblclick', function() {
    searchInput.value = '';
});
