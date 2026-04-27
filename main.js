const boxTop   = document.getElementById("box-top");
const boxLeft  = document.getElementById("box-left");
const boxRight = document.getElementById("box-right");
const outline  = document.getElementById("outline");

boxTop.addEventListener("click", function () {
    boxLeft.children[0].classList.remove("closed-title-vertical");
    boxRight.children[0].classList.remove("closed-title-vertical");

    boxTop.classList.remove("closed");
    boxLeft.classList.add("closed");
    boxRight.classList.add("closed");
    
    outline.classList.remove("left-open");
    outline.classList.remove("right-open");
    outline.classList.add("top-open");
});
boxLeft.addEventListener("click", function () {
    boxLeft.children[0].classList.remove("closed-title-vertical");
    boxRight.children[0].classList.add("closed-title-vertical");

    boxTop.classList.add("closed");
    boxLeft.classList.remove("closed");
    boxRight.classList.add("closed");

    outline.classList.add("left-open");
    outline.classList.remove("right-open");
    outline.classList.remove("top-open");
});
boxRight.addEventListener("click", function () {
    boxLeft.children[0].classList.add("closed-title-vertical");
    boxRight.children[0].classList.remove("closed-title-vertical");

    boxTop.classList.add("closed");
    boxLeft.classList.add("closed");
    boxRight.classList.remove("closed");
    
    outline.classList.remove("left-open");
    outline.classList.add("right-open");
    outline.classList.remove("top-open");
});
