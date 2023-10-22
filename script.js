const toggleBtn = document.querySelector('.toggle-btn');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})