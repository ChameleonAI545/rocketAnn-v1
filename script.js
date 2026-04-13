// Navigation logic for the Home/Faculty SPA (Single Page App) screens
function navTo(targetScreenId) {
    // Pause any playing videos before switching
    document.querySelectorAll('video').forEach(vid => vid.pause());

    // Hide all internal screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const target = document.getElementById(targetScreenId);
    if(target) {
        target.classList.add('active');
    }
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Prevent default behavior for placeholder links so page doesn't jump
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.action-link[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This would open the feedback form in a new tab.');
        });
    });
});