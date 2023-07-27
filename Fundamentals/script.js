/* GSAP : The GreenSock Animation Platform (GSAP for short) is a powerful JavaScript library 
  that enables front-end developers and designers to create robust timeline based animations. */

/* gsap.to("#box", {
import { gsap } from 'gsap'
    x: 900,
    y: 300,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    rotate: 360,
    scale: 0.5,
}) */

// in gsap : 'to' & 'from' works oppositely between a starting point and final point

/* gsap.from("#box", {
    x: 900,
    y: 300,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    rotate: 360,
    scale: 0.5,
}) */

/* gsap.to("h1", {
    x: 600,
    color: "orange",
    deuration: 2,
    delay: 1,
})
gsap.to("h2", {
    x: 600,
    color: "salmon",
    deuration: 2,
    delay: 2,
})
gsap.to("h3", {
    x: 600,
    color: "black",
    deuration: 2,
    delay: 3,
}) */

/* gsap.to("h1", {
  x: 600,
  deuration: 1,
  delay: 0.5,
  stagger: 0.5, // delay between each element of same type
  repeat: -1, // repeat the animation infinitely
  yoyo: true, // reverse the animation
}); */

// using timeline
/* let tl = gsap.timeline();

tl.to("h1", {
  x: 600,
  duration: 1,
});
tl.to("h2", {
  x: 700,
  duration: 1,
});
tl.to("h3", {
  x: 800,
  duration: 1,
}); */

gsap.from("#page1 #box", {
  scale: 0,
  delay: 0.8,
  duration: 1,
  rotate: 360,
});
gsap.from("#page2 #box", {
  scale: 0,
  delay: 0.8,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true, // for understanding the trigger
    start: "top 70%",
    end: "bottom 30%",
    scrub: 3,
  },
});
