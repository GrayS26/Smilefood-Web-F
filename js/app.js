(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const simplicity = document.querySelector(".simplicity");
    if (simplicity) {
        const banerStart = document.querySelector(".simplicity__start");
        let banerText = banerStart.innerHTML;
        const banerSpanStart = `<span class="simplicity__start">${banerText}</span>`;
        function animationBanerText() {
            let screenWidth = 0;
            let textWidth = 0;
            let spanQuantity = 0;
            let banerWidth = 0;
            let textMarginRight = +getComputedStyle(banerStart).marginRight.replace("px", "");
            screenWidth = document.documentElement.clientWidth;
            textWidth = banerStart.clientWidth + textMarginRight;
            spanQuantity = Math.ceil(screenWidth / textWidth);
            if (spanQuantity > 1) banerWidth = spanQuantity * textWidth + textWidth + 10; else banerWidth = (spanQuantity + 1) * textWidth + textWidth;
            simplicity.style.width = banerWidth + "px";
            for (let i = 0; i < spanQuantity; i++) banerStart.insertAdjacentHTML("afterEnd", banerSpanStart);
            document.querySelectorAll(".simplicity__start").forEach((item => {
                item.animate([ {
                    transform: "translate(0, 0)"
                }, {
                    transform: "translate(+" + `${textWidth}` + "px, 0)"
                } ], {
                    duration: 25e3,
                    iterations: 1 / 0
                });
            }));
        }
        animationBanerText();
    }
    const creativity = document.querySelector(".creativity");
    if (creativity) {
        const banerStart = document.querySelector(".creativity__start");
        let banerText = banerStart.innerHTML;
        const banerSpanStart = `<span class="creativity__start">${banerText}</span>`;
        function animationBanerText() {
            let screenWidth = 0;
            let textWidth = 0;
            let spanQuantity = 0;
            let banerWidth = 0;
            let textMarginRight = +getComputedStyle(banerStart).marginRight.replace("px", "");
            screenWidth = document.documentElement.clientWidth;
            textWidth = banerStart.clientWidth + textMarginRight;
            spanQuantity = Math.ceil(screenWidth / textWidth);
            if (spanQuantity > 1) banerWidth = spanQuantity * textWidth + textWidth + 10; else banerWidth = (spanQuantity + 1) * textWidth + textWidth;
            creativity.style.width = banerWidth + "px";
            for (let i = 0; i < spanQuantity; i++) banerStart.insertAdjacentHTML("afterEnd", banerSpanStart);
            document.querySelectorAll(".creativity__start").forEach((item => {
                item.animate([ {
                    transform: "translate(0, 0)"
                }, {
                    transform: "translate(-" + `${textWidth}` + "px, 0)"
                } ], {
                    duration: 2e4,
                    iterations: 1 / 0
                });
            }));
        }
        animationBanerText();
    }
    const organicity = document.querySelector(".organicity");
    if (organicity) {
        const banerStart = document.querySelector(".organicity__start");
        let banerText = banerStart.innerHTML;
        const banerSpanStart = `<span class="organicity__start">${banerText}</span>`;
        function animationBanerText() {
            let screenWidth = 0;
            let textWidth = 0;
            let spanQuantity = 0;
            let banerWidth = 0;
            let textMarginRight = +getComputedStyle(banerStart).marginRight.replace("px", "");
            screenWidth = document.documentElement.clientWidth;
            textWidth = banerStart.clientWidth + textMarginRight;
            spanQuantity = Math.ceil(screenWidth / textWidth);
            if (spanQuantity > 1) banerWidth = spanQuantity * textWidth + textWidth + 10; else banerWidth = (spanQuantity + 1) * textWidth + textWidth;
            organicity.style.width = banerWidth + "px";
            for (let i = 0; i < spanQuantity; i++) banerStart.insertAdjacentHTML("afterEnd", banerSpanStart);
            document.querySelectorAll(".organicity__start").forEach((item => {
                item.animate([ {
                    transform: "translate(0, 0)"
                }, {
                    transform: "translate(-" + `${textWidth}` + "px, 0)"
                } ], {
                    duration: 2e4,
                    iterations: 1 / 0
                });
            }));
        }
        animationBanerText();
    }
    const baner = document.querySelector(".marquee-baner");
    if (baner) {
        const banerStart = document.querySelector(".marquee-box");
        const images = document.querySelectorAll(".marquee-box__title");
        const banerMove = document.querySelectorAll(".marquee-box__title");
        const clonedItem = banerStart.cloneNode(true);
        clonedItem.classList.add("second");
        baner.appendChild(clonedItem);
        let banerWidth = 0;
        for (let i = 0; i < images.length; i++) {
            banerWidth += +banerMove[i].getBoundingClientRect().width;
            const styles = window.getComputedStyle(banerMove[i]);
            const marginRight = parseInt(styles.marginRight, 10);
            banerWidth += marginRight;
        }
        function animationBanerText() {
            document.querySelectorAll(".marquee-box__title").forEach((item => {
                item.animate([ {
                    transform: "translate(0, 0)"
                }, {
                    transform: "translate(-" + `${banerWidth - 12}` + "px, 0)"
                } ], {
                    duration: 2e4,
                    iterations: 1 / 0
                });
            }));
        }
        animationBanerText();
    }
    window["FLS"] = true;
    isWebp();
    menuInit();
})();