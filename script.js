// locomotive for smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});








// gsap to animate
gsap.from(".nlink", {
  y: -45,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  x: 100,
});

gsap.from(".anim2", {
  y: 300,
  duration: 2,
  stagger: 0.2,
  // scale:0.9,
  opacity: 0,
  ease: Power2,
});

// shery js to animate the images accordingly
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Shery.imageMasker(".mask-target" /* Element to target.*/, {
//   //Parameters are optional.
//   mouseFollower: true,
//   text: "Shery",
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

Shery.textAnimate(".ephermalfont h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect("#main .mask-target", {
  style: 2, //Select Style
  debug: false, // Debug Panel
  config: {
    /* Config made from debug panel */
    resolutionXY: { value: 100 },
    distortion: { value: true },
    mode: { value: -10 },
    mousemove: { value: 3 },
    modeA: { value: 1 },
    modeN: { value: 0 },
    speed: { value: 1.03, range: [-500, 500], rangep: [-10, 10] },
    frequency: { value: 39.74, range: [-800, 800], rangep: [-50, 50] },
    angle: { value: 2.54, range: [0, 3.141592653589793] },
    waveFactor: { value: 1.4, range: [-3, 3] },
    color: { value: 10212607 },
    pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
    quality: { value: 6.09, range: [0, 10] },
    contrast: { value: 1, range: [-25, 25] },
    brightness: { value: 1, range: [-1, 25] },
    colorExposer: { value: 0.32, range: [-5, 5] },
    strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
    exposer: { value: -75.64, range: [-100, 100] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6650947453532859 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

gsap.from(".ephermalimage img", {
  z: -13,
  duration: 2,
  opacity: 0,
});

// Shery.imageEffect(".mask-target", {
//     style: 6/*OR 5 for different variant */,
//     debug: true,
// });

Shery.imageEffect(".leftpicimg ", {
  style: 5,
  // debug:true,
  gooey: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.76, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.5628742410104303 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 32 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

const video = document.querySelector(".video");
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
  gsap.to("video", {
    opacity: 1,
    duration: 3,
    y: 89,
  });
  // video.style.opacity=1
});

btn.addEventListener("mouseleave", () => {
  gsap.to("video", {
    opacity: 0,
    // display:none,
    duration: 2,
  });
  // video.style.opacity = 0;
});
