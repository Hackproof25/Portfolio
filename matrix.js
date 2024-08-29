// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16; // Increased font size for better visibility
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slightly darker background for better visibility
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Neon green color
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33); // Draw at approximately 30 frames per second

// Terminal interaction
const terminalBody = document.querySelector('.terminal-body');
const terminalInput = document.querySelector('.terminal-input');

const commands = {
    about: 'Navigating to About page...',
    education: 'Navigating to Education page...',
    skills: 'Navigating to Skills page...',
    certificates: 'Navigating to Certificate page...',
    projects: 'Navigating to Projects page...',
    hobbies: 'Navigating to Hobbies page...',
    contact: 'Navigating to Contacts page...',
    clear: 'Terminal cleared.' // Added clear command
};

// Initial welcome message
const welcomeMessage = '<p>PORTFOLIO-[$]~ Welcome to the terminal . . . <br><br>[$]~ Type your commands below:</p>';

function handleCommand(command) {
    if (command === 'clear') {
        terminalBody.innerHTML = welcomeMessage; // Keep the welcome message
        return;
    }

    const response = commands[command] || 'Unknown command. Try: about, education, skills, certificates, projects, hobbies, contact.';
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
