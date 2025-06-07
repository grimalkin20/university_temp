
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