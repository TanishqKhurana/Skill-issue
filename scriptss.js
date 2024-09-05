document.addEventListener("DOMContentLoaded", (event) => {
    window.onload = function () {
        var video = document.getElementById("homevideo");
        video.play();
    };
    // const homevideo = document.querySelector(".homeVideo")
    // setTimeout(() => {
    //     homevideo.play();
    // }, 7000);
    // // Accessibility Toggle
    // function toggleAccessibility() {
    //     let body = document.body;

    //     // Toggle High Contrast Mode
    //     if (!body.classList.contains('high-contrast')) {
    //         body.classList.add('high-contrast');
    //     } else {
    //         body.classList.remove('high-contrast');
    //     }

    //     // Toggle Larger Font Size
    //     if (!body.classList.contains('large-font')) {
    //         body.classList.add('large-font');
    //     } else {
    //         body.classList.remove('large-font');
    //     }
    const toggleElement = document.querySelector('.navbar')

    toggleElement.addEventListener('click', () => {
        toggleElement.classList.toggle('active')
    })
    gsap.registerPlugin(ScrollTrigger);

    let lastScrollTop = 0;
    const header = document.querySelector('header');

    // Create a ScrollTrigger instance to track scrolling
    ScrollTrigger.create({
        onUpdate: self => {
            let scrollTop = self.scroll();

            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide the header
                gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.out' });
            } else {
                // Scrolling up - show the header
                gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.out' });
            }

            lastScrollTop = scrollTop;
        }
    });
})
