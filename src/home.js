const Home = (function () {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");

    function render(orderBtnCallback) {
        const h1 = document.createElement("h1");
        h1.innerHTML = "Come on down for <br> some delicious cuisine!";
        homeContainer.appendChild(h1);

        const p = document.createElement("p");
        p.classList.add("sub-heading");
        p.textContent = "Tasty and affordable!";
        homeContainer.appendChild(p);

        const orderBtn = document.createElement("button");
        orderBtn.classList.add("order-btn");
        orderBtn.addEventListener("click", orderBtnCallback);
        orderBtn.innerText = "Order now";
        homeContainer.appendChild(orderBtn);

        const detailsSection = document.createElement("div");
        detailsSection.classList.add("details");
        detailsSection.innerHTML = `
            <div class="location">
                <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg>
                <p>1024 Oakwood Ave<br>San Diego, CA 22434</p>
            </div>

            <div class="time">
                <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path></svg>
                <p>
                    <span>Mon-Thurs:</span> 8am-8pm<br><span>Fri-Sun:</span> 8am-11pm
                </p>
            </div>`;
        homeContainer.appendChild(detailsSection);
    
        return homeContainer;
    }

    return { render };

})();

export default Home;