import "./styles.css";
import Home from "./home";

const Display = (function () {
    const contentContainer = document.getElementById("content");
    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const aboutBtn = document.querySelector(".about-btn");

    homeBtn.addEventListener("click", event => {
        event.preventDefault();
        displayHome();
    });

    function emptyContentContainer() {
        contentContainer.replaceChildren();
    }

    function displayHome() {
        emptyContentContainer();
        contentContainer.appendChild(Home.render(() => console.log("ok")));
    }
    
    return { displayHome };

})();

Display.displayHome();