const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                nav.classList.toggle('active');
            }
        });