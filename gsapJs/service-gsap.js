gsap.registerPlugin(ScrollTrigger);

gsap.from(".mainServicesContent", 1.5, {
  opacity: 0,
  scale: 0.57,

  // pin: true,
});

gsap.from("#servicesBtn", 1.5, {
  opacity: 0,
  x: 100,
});
const tl = gsap.timeline();

gsap.from(".servicesPageContent", 2, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-700",
    end: "-400rem",
    trigger: ".servicesPageContent",
  },
});

gsap.from("#serviceContact", 2, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-300",
    end: "-200rem",
    trigger: ".serviceContact",
  },
});

gsap.from(".footerbg", 0.7, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-700",
    end: "-400rem",
    trigger: ".footer",
  },
});
