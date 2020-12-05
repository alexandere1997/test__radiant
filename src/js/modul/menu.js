let menu = () => {
    const nav = document.querySelector(".nav"),
          btn = document.querySelector(".header__line");

    btn.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        btn.classList.toggle("header__line_active");
    })
}

export default menu;