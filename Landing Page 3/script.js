const tl = gsap.timeline();

function time() {
  let a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 150);
}

tl.to("#loader h1", {
  delay: 0.3,
  duration: 1.1,
  onStart: time(),
});

tl.to("#loader", {
  top: "-100vh",
  delay: 0.4,
  duration: 1.2,
});

tl.to("#page1 h1", {
  transform: "translateX(-130%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    satrt: "top 0",
    end: "top -200%",
    scrub: 3,
    pin: true,
  },
});
