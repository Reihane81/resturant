
const controls_container = document.querySelector('.bill-controls-container');

const slider = tns({
    "container": '#bill-container',
    "items": 1,
    "nav": false,
    "axis": 'vertical',
    'mouseDrag': true,
    'constrolsPosition': 'bottom',
    "controlsContainer": controls_container,
    "speed": 400,
    "gutter":40,
    "center": true
});

const img = document.querySelectorAll(".hambrg");

img.forEach((i) => {
    i.addEventListener("click", (e) => {
        e.target.style.transform = "scale(2,3)";
    });
});


img.forEach((i) => {
    i.addEventListener("click", (e) => {
        const isScaled = e.target.getAttribute("scaled");
        !isScaled || isScaled == "false"
            ? (e.target.style.transform = "scale(1.5,2)")
            : (e.target.style.transform = "scale(1,1)");
        e.target.setAttribute(
            "scaled",
            !isScaled || isScaled == "false" ? true : false
        );
    });
});

//   const slider = tns({
//     container: "#artist-item-container",
//     items: 1,
//     mouseDrag: true,
//     swipeAngle: false,
//     fixedWidth: 325,
//     speed: 300,
//     nav: true,
//     navPosition: "bottom",
//     rewind: true,
//     controlsPosition: "bootom",
//     navContainer: navContainer,
//     controlsContainer: controlsContainer,
//     // autoplay: true,
//     // autoplayHoverPause: true,
//     // autoplayTimeout: 3500,
// });