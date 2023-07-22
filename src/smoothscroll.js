let timeout;

// Function to add the 'show-scrollbar' class on scroll
function showScrollbar() {
    if (timeout) {
        clearTimeout(timeout);
    }

    document.body.classList.add('show-scrollbar');

    timeout = setTimeout(() => {
        document.body.classList.remove('show-scrollbar');
    }, 1000); // Adjust the delay (milliseconds) to hide the scrollbar after scrolling stops
}

// Event listener to detect scrolling
window.addEventListener('scroll', showScrollbar);