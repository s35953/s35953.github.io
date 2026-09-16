document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".hero-text, .hero-visual, .project-card, .value, .about-text, .contact-card"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";

        element.style.transform = "translateY(20px)";

        element.style.transition =
            `opacity .7s ease ${index * 0.08}s,
             transform .7s ease ${index * 0.08}s`;

    });


    setTimeout(() => {

        elements.forEach(element => {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        });

    }, 100);


});
