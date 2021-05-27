
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