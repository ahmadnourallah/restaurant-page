import "./styles.css";
import Home from "./home";
import Menu from "./menu";

const Display = (function () {
    const contentContainer = document.getElementById("content");
    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const aboutBtn = document.querySelector(".about-btn");

    homeBtn.addEventListener("click", event => {
        event.preventDefault();
        contentContainer.replaceChildren();
        displayHome();
    });

    menuBtn.addEventListener("click", event => {
        event.preventDefault();
        contentContainer.replaceChildren();
        displayMenu();
    });

    function toggleActive(btn) {
        const currentBtn = document.querySelector(".nav li.active");
        if (currentBtn) currentBtn.classList.remove("active");

        btn.classList.add("active");
    }

    function displayHome() {
        toggleActive(homeBtn);
        contentContainer.replaceChildren();
        contentContainer.appendChild(Home.render(displayMenu));
    }
    
    function displayMenu() {
        toggleActive(menuBtn);
        contentContainer.replaceChildren();
        contentContainer.appendChild(Menu.render());
    }

    return { displayHome };

})();

Display.displayHome();