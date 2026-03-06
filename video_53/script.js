
let slider = document.getElementById("slider");

let rightBtn = document.querySelector(".cards-button-container-right");
let leftBtn = document.querySelector(".cards-button-container-left");

function checkButtons() {

    if (slider.scrollLeft <= 0) {
        leftBtn.style.opacity = "0";
    } else {
        leftBtn.style.opacity = "1";
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        rightBtn.style.opacity = "0";
    } else {
        rightBtn.style.opacity = "1";
    }

}

document.querySelector(".next").addEventListener("click", () => {
    slider.scrollLeft += slider.clientWidth;
});

document.querySelector(".previous").addEventListener("click", () => {
    slider.scrollLeft -= slider.clientWidth;
});


// important line
slider.addEventListener("scroll", checkButtons);

// page load par bhi check
checkButtons();