document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.getElementById('flipCard');
    let isFlipped = false;

    // Add click event listener to flip the card
    flipCard.addEventListener('click', function() {
        isFlipped = !isFlipped;
        
        if (isFlipped) {
            flipCard.classList.add('flipped');
        } else {
            flipCard.classList.remove('flipped');
        }
    });

    // Optional: Add keyboard support for accessibility
    flipCard.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            flipCard.click();
        }
    });

    // Make the card focusable for keyboard navigation
    flipCard.setAttribute('tabindex', '0');

    // Add subtle animation on load
    setTimeout(() => {
        flipCard.style.opacity = '1';
        flipCard.style.transform = 'translateY(0)';
    }, 100);
});