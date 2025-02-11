function loadNavbar() {
    fetch('../HTML File/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            checkLoginStatus();
            document.getElementById('logoutLink').addEventListener('click', logoutUser);
        });
}

function loadFooter() {
    fetch('../HTML File/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');

    if (loggedInUser) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
    } else {
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'home.html';
}

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
});