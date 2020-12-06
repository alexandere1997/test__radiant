let tabs = () => {
    const notranja__button = document.querySelectorAll(".notranja__button a");

    if(document.documentElement.clientWidth < 575) {
        const notranja__btn_button = document.querySelector(".notranja__btn_button");
        const notranja__btn_one = document.querySelector(".notranja__btn_one");
        const box1 = document.querySelector(".notranja__inner");
        const box2 = document.querySelector(".notranja__wrapper");
    
        notranja__btn_button.addEventListener("click", (e) => {
            e.preventDefault();
            box2.classList.toggle("active__dispaly_f");
            box2.classList.remove("notranja__box_active")
        });
        notranja__btn_one.addEventListener("click", (e) => {
            e.preventDefault();
            box1.classList.toggle("active__dispaly_b");
        })
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