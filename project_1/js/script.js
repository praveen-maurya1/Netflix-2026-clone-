let slider = document.getElementById("slider");

let rightBtn = document.querySelector(".cards-button-container-right");
let leftBtn = document.querySelector(".cards-button-container-left");

function checkButtons() {

    if (slider.scrollLeft <= 0) {
        leftBtn.style.opacity = "0";
        leftBtn.style.pointerEvents = "none";
    } else {
        leftBtn.style.opacity = "1";
        leftBtn.style.pointerEvents = "auto";
    }

    if (Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth) {
        rightBtn.style.opacity = "0";
        rightBtn.style.pointerEvents = "none";
    } else {
        rightBtn.style.opacity = "1";
        rightBtn.style.pointerEvents = "auto";
    }

}

document.querySelector(".next").addEventListener("click", () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: "smooth"
    });
});

document.querySelector(".previous").addEventListener("click", () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: "smooth"
    });
});

slider.addEventListener("scroll", checkButtons);
checkButtons();