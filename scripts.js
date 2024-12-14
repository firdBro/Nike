document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-button');
    const contactForm = document.getElementById('contact-form');
    const logo = document.querySelector('.logo h1');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    });

    logo.addEventListener('click', function() {
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });

    // Меню для мобильных устройств
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarUl = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function() {
        navbarUl.classList.toggle('active');
    });

    // Функция для анимации элементов при прокрутке
    function animateOnScroll() {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    animateOnScroll();

    // Плавная прокрутка к секциям при клике на ссылки в навигации
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Эффекты при наведении на изображения
    const mediaElements = document.querySelectorAll('.product img');
    mediaElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3s ease-in-out';
        });
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.transition = 'transform 0.3s ease-in-out';
        });
    });

    // Анимация для заголовков и текста при наведении
    const textElements = document.querySelectorAll('h2, h3, p, label');
    textElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.3s ease-in-out';
        });
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.transition = 'transform 0.3s ease-in-out';
        });
    });

    // Отображение приветственного сообщения при загрузке страницы
    setTimeout(() => {
        alert('Добро пожаловать в наш Магазин Одежды! Наслаждайтесь покупками.');
    }, 1000);

    // Скрытие верхнего бардюра при прокрутке вниз и показ при прокрутке вверх
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px'; // Скрыть хедер
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильных устройств
    });

    // Показ нижнего бардюра только тогда, когда дойдешь до конца страницы
    const footer = document.querySelector('.footer');
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.style.position = 'static'; // Показать футер при скроллинге до низа
        } else {
            footer.style.position = 'fixed';
            footer.style.bottom = '-100px';
        }
    });
});
