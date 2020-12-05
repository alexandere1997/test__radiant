let navbar = () => {
    const header__link = document.querySelectorAll(".header__link");

    header__link.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.preventDefault();
            let countW = item.offsetWidth;
            item.style.setProperty('--sq-color', `${countW}px`)
        })
    })
}

export default navbar;