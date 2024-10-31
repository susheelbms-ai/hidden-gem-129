document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Hide all sections
        document.querySelector('.main-content').style.display = 'none';
        document.querySelector('.about-section').style.display = 'none';
        document.querySelector('.projects-section').style.display = 'none'; // Hide projects section
        document.querySelector('.contact-section').style.display = 'none'; // Hide contact section

        // Show the clicked section
        const target = this.getAttribute('href');
        if (target === '#home') {
            document.querySelector('.main-content').style.display = 'block'; // Show main content
        } else if (target === '#about') {
            document.querySelector('.about-section').style.display = 'block'; // Show about section
        } else if (target === '#projects') {
            document.querySelector('.projects-section').style.display = 'block'; // Show projects section
        } else if (target === '#contact') {
            document.querySelector('.contact-section').style.display = 'block'; // Show contact section
        }
    });
});

// To show the main content by default
document.querySelector('.main-content').style.display = 'block'; // This will display the main content initially




// for handling search button


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    // Define your search logic
    switch (query) {
        case 'home':
            document.querySelector('.main-content').style.display = 'block';
            document.querySelector('.about-section').style.display = 'none';
            document.querySelector('.projects-section').style.display = 'none';
            document.querySelector('.contact-section').style.display = 'none';
            break;
        case 'about':
            document.querySelector('.main-content').style.display = 'none';
            document.querySelector('.about-section').style.display = 'block';
            document.querySelector('.projects-section').style.display = 'none';
            document.querySelector('.contact-section').style.display = 'none';
            break;
        case 'projects':
            document.querySelector('.main-content').style.display = 'none';
            document.querySelector('.about-section').style.display = 'none';
            document.querySelector('.projects-section').style.display = 'block';
            document.querySelector('.contact-section').style.display = 'none';
            break;
        case 'contact':
            document.querySelector('.main-content').style.display = 'none';
            document.querySelector('.about-section').style.display = 'none';
            document.querySelector('.projects-section').style.display = 'none';
            document.querySelector('.contact-section').style.display = 'block';
            break;
        default:
            alert('Page not found!'); // Handle invalid input
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const instagramLink = document.querySelector('.social-link[href="https://www.instagram.com/susheel_sj/"]');
    const facebookLink = document.querySelector('.social-link[href="https://www.facebook.com"]');
    const linkedinLink = document.querySelector('.social-link[href="https://www.linkedin.com"]');

    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(instagramLink.href, '_blank');
    });

    facebookLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(facebookLink.href, '_blank');
    });

    linkedinLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(linkedinLink.href, '_blank');
    });
});
























































