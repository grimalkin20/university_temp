    document.addEventListener('contextmenu', (e) => e.preventDefault());

        function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
        // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
        if (event.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
            return false;
        }
    };

setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
}, 3000);


document.addEventListener('DOMContentLoaded', function () {
                            var dropdown = document.querySelector('.nav-item.dropdown');
                            if (dropdown) {
                                dropdown.addEventListener('mouseenter', function () {
                                    var menu = dropdown.querySelector('.dropdown-menu');
                                    var toggle = dropdown.querySelector('.dropdown-toggle');
                                    menu.classList.add('show');
                                    toggle.setAttribute('aria-expanded', 'true');
                                });
                                dropdown.addEventListener('mouseleave', function () {
                                    var menu = dropdown.querySelector('.dropdown-menu');
                                    var toggle = dropdown.querySelector('.dropdown-toggle');
                                    menu.classList.remove('show');
                                    toggle.setAttribute('aria-expanded', 'false');
                                });
                            }
                        });



// Show/hide scroll to top button
            const scrollBtn = document.getElementById('scrollToTopBtn');
            window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
            });
            scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            });