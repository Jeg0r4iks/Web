function darkmode() {
    var element = document.body; 
    element.classList.toggle("dark-mode");

    var darkModeButton = document.querySelector('.nav-menu button');
    if (element.classList.contains("dark-mode")) {
        darkModeButton.style.backgroundColor = 'rgba(43, 42, 42, 0.986)';
        darkModeButton.textContent = 'Light mode';
    } else {
        darkModeButton.style.backgroundColor = 'rgb(252, 250, 238)';
        darkModeButton.textContent = 'Dark mode';
    } 
}

function openModal(title, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

window.addEventListener('resize', function () {
const navMenu = document.querySelector('.nav-menu');
if (window.innerWidth > 768) {
    navMenu.classList.remove('active'); 
}
});

document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function () {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
