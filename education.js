// Handle loading screen visibility
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000); // 1000 milliseconds = 1 second
});

// Terminal interaction
const terminalBody = document.querySelector('.terminal-body');
const terminalInput = document.querySelector('.terminal-input');

const commands = {
    index: 'Navigating to Home page...',
    about: 'Navigating to About page...',
    skills: 'Navigating to Skills page...',
    certificates: 'Navigating to Certificate page...',
    projects: 'Navigating to Projects page...',
    hobbies: 'Navigating to Hobbies page...',
    contact: 'Navigating to Contacts page...',
    clear: 'Terminal cleared.' // Added clear command
};

// Initial welcome message
const welcomeMessage = '<p>PORTFOLIO-[$]~ Welcome to the terminal . . . <br><br>[$]~ USE COMMANDS:-</p>1. index<br>2. about<br>3. skills<br>4. certificates<br>5. projects<br>6. hobbies<br>7. contact<br>8. clear';

function handleCommand(command) {
    if (command === 'clear') {
        terminalBody.innerHTML = welcomeMessage; // Keep the welcome message
        return;
    }

    const response = commands[command] || 'Unknown command. Try above commands:';
    terminalBody.innerHTML += `<p>[$] ~ ${response}</p>`; // Add prefix before response

    if (command in commands && command !== 'clear') {
        setTimeout(() => {
            window.location.href = `${command}.html`;
        }, 1000); // Wait 1 second before redirecting
    }
}

function processInput(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        terminalBody.innerHTML += `<p>[$] ~ ${command}</p>`; // Add prefix before command
        handleCommand(command);
        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight; // Scroll to bottom
    }
}

document.addEventListener('keydown', processInput);

// Set initial welcome message when the page loads
window.onload = () => {
    terminalBody.innerHTML = welcomeMessage;
};