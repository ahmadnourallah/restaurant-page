import Hamburger from "./assets/hamburger.png";

const Menu = (function () {

    function render() {
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu");

        const sectionTitle = document.createElement("h2");
        sectionTitle.classList.add("section-title");
        sectionTitle.innerText = "Menu";
        menuContainer.appendChild(sectionTitle);

        const card = document.createElement("div");
        card.classList.add("card");

        for (let i = 0; i < 5; i++) {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const img = document.createElement("img");
            img.src = Hamburger;
            img.alt = "hamburger";
            menuItem.appendChild(img);

            const details = document.createElement("div");
            details.classList.add("details");
            details.innerHTML = `
                <div class="header">
                    <span class="name">Hamburger</span>
                    <span class="price">$2.49</span>
                </div>
                <div class="body">Buns, patty, tomato, onions, lettuce, and our secret family recipe.</div>
            `;
            menuItem.appendChild(details);

            card.appendChild(menuItem);
        }

        menuContainer.appendChild(card);

        return menuContainer;
    }

    return { render };

})();

export default Menu;