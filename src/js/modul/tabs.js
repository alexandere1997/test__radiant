let tabs = () => {
    const notranja__button = document.querySelectorAll(".notranja__button a");

    if(document.documentElement.clientWidth < 575) {
        return;
    }
    else {
        notranja__button.forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                let tab = document.querySelector(el.getAttribute('href'));
                document.querySelector('#tabNav .notranja__active')
                .classList.remove('notranja__active');
                document.querySelector('#tabsWrap .notranja__box_active')
                .classList.remove('notranja__box_active');

                el.classList.add('notranja__active');
                tab.classList.add('notranja__box_active');
            })
        })
    }

}
export default tabs;