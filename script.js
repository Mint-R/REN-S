window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    if (scrollPosition < window.innerHeight) {
        page1.style.transform = `translateY(-${scrollPosition}px)`;
    } else {
        page1.style.transform = `translateY(-${window.innerHeight}px)`;
        page2.style.transform = `translateY(-${scrollPosition - window.innerHeight}px)`;
    }
});

