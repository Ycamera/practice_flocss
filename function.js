// -------------------------------------------------------------------------------------------------------------------------
//タブレット・スマートフォン表示時のナビボタン処理
const navBtn = document.querySelector(".js-nav-btn");
const els = document.getElementsByClassName("js-nav-add-class");

function toggleNav() {
    for (let i = 0; i < els.length; i++) {
        els[i].classList.toggle("is-active");
    }
}
navBtn.addEventListener("click", toggleNav);

//ナビ要素外、またはaタグ要素をクリックするとナビのis-active classを削除
function closeNav(e) {
    const clickNotNav = !e.target.closest(".l-header") || e.target.tagName === "A";

    if (clickNotNav) {
        for (let i = 0; i < els.length; i++) {
            els[i].classList.remove("is-active");
        }
    }
}
document.addEventListener("click", closeNav);
//--------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------
//画面ないに要素が入ったらclassを付加する処理
//class内のis-hideを削除し、is-showを付加

//is-showを付加するclass
const appearEffectClassArr = [".js-about-us", ".js-message", ".js-service"];
appearEffectScroll(appearEffectClassArr);

function appearEffectScroll(classArr) {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;

    classArr.forEach((className) => {
        const el = document.querySelector(className);

        classNameToAdd = "is-show";
        classNameToRemove = "is-hide";

        if (el.classList.contains(classNameToAdd)) return;

        const rect = el.getBoundingClientRect();
        const elementAppearScrollPos = rect.y + scrollY + rect.height / 4;

        if (scrollY >= elementAppearScrollPos - innerHeight) {
            el.classList.remove(classNameToRemove);
            el.classList.add(classNameToAdd);
        }
    });
}

document.addEventListener("scroll", () => {
    appearEffectScroll(appearEffectClassArr);
});
//-----------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------
//底の矢印をクリックするとウェブサイトの一番上までスクロールする

function onClickScrollToTop() {
    window.scrollTo({ top: 0 });
}
const footerUpArrow = document.querySelector(".js-footer__up-arrow");
footerUpArrow.addEventListener("click", onClickScrollToTop);

//-----------------------------------------------------------------------------------------------------------------------
