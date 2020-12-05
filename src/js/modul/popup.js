let popup = () => {
    const btn = document.querySelectorAll(".notranja__arrow"),
          box = document.querySelectorAll(".notranja__item");
          btn.forEach((item, ind1 ) => {
              item.addEventListener("click", () => {
                box.forEach((count, ind2) => {
                      if(ind1 == ind2) {
                        count.classList.toggle("active");
                        item.classList.toggle("active__btn");
                      }
                  })
              })
          })

}

export default popup;