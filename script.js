// ===============================
// NAVBAR AU SCROLL
// ===============================

const navbar = document.querySelector(".custom-navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


// ===============================
// ANIMATION APPARITION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


// ===============================
// HALO QUI SUIT LA SOURIS
// ===============================

const mouseLight = document.querySelector(".mouse-light");

if (mouseLight) {

    document.addEventListener("mousemove", (event) => {

        mouseLight.style.left = `${event.clientX}px`;

        mouseLight.style.top = `${event.clientY}px`;

    });

}