document.addEventListener('DOMContentLoaded', function () {
    const messageArea = document.querySelector('.message-area');
    const inputField = document.querySelector('.message-input');
    const sendButton = document.querySelector('.send-button');

    // Function to simulate receiving new messages
    function receiveMessage() {
        const messages = [
            'Hello! How are you?',
            'What are you working on?',
            'Let\'s catch up soon!',
            'Check out this cool feature!',
            'Did you see the latest update?'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = randomMessage;
        messageArea.appendChild(newMessage);
        messageArea.scrollTop = messageArea.scrollHeight; // Auto-scroll to bottom
    }

    // Simulate new messages every 10 seconds
    setInterval(receiveMessage, 10000);

    // Handle sending messages
    sendButton.addEventListener('click', function () {
        const messageText = inputField.value.trim();
        if (messageText) {
            const newMessage = document.createElement('div');
            newMessage.className = 'message user-message';
            newMessage.textContent = messageText;
            messageArea.appendChild(newMessage);
            inputField.value = ''; // Clear input field
            messageArea.scrollTop = messageArea.scrollHeight; // Auto-scroll to bottom
        }
    });

    // Dropdown functionality
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
