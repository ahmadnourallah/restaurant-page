const Contact = (function () {

    function render() {
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact");
        contactContainer.innerHTML = `
            <h2 class="section-title">Contact us</h2>

            <div class="card">
                <div class="contact-details">
                    <div class="location">
                        <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg>
                        <p>1024 Oakwood Ave <br> San Diego, CA 22434</p>    
                    </div>

                    <div class="time">
                        <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path></svg>
                        <p>Mon-Thurs:8am-8pm <br> Fri-Sun:8am-11pm</p>
                    </div>

                    <div class="phone">
                        <svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 640 179C 640 179 640 179 640 179C 662 156 692 140 724 139C 763 140 796 169 823 195C 853 222 865 262 859 301C 847 538 676 751 455 830C 391 851 323 870 254 861C 206 844 160 809 137 763C 129 729 145 692 169 668C 210 642 258 633 303 617C 355 600 404 631 446 658C 481 651 512 619 541 595C 590 550 632 495 657 431C 623 412 587 373 597 334C 605 281 614 226 640 179" transform="rotate(90, 500, 500) "></path></svg>
                        <p>(222)-888 5555</p>
                    </div>
                </div>


                <div class="contact-form">
                    <form action="" onsubmit="event.preventDefault();">
                        <div class="name">
                            <input type="text" name="name" id="name" placeholder="">
                            <label for="name">Full Name</label>
                        </div>

                        <div class="email">
                            <input type="email" name="email" id="email" placeholder="">
                            <label for="email">Email</label>    
                        </div>

                        <div class="message">
                            <textarea name="message" id="message" placeholder=""></textarea>
                            <label for="message">Type your message...</label>    
                        </div>
                        
                        <button>Send</button>
                    </form>
                </div>

                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald's!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>`;
        
        return contactContainer;
    }

    return { render };

})();

export default Contact;