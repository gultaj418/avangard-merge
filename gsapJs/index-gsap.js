gsap.registerPlugin(ScrollTrigger);

gsap.from("#mainContentPart", 2, {
  delay: 0.1,
  // y: 20,
  x: -300,
  opacity: 0,
  ease: Expo.easeInOut,
});

// Gsap for img lines on default page
gsap.from(".img-lines img", 1, {
  y: 900,
  x: -600,
  stagger: 0.33,
});

gsap.from(".card", 1.5, {
  y: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#cardSection",

    pin: true,
  },
});
gsap.from(".cardHead", 1.5, {
  x: -500,
  opacity: 0,
  scrollTrigger: {
    trigger: "#cardSection",
  },
});

gsap.from(".paraqraf", 1, {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#infoAndProblem",
  },
});

gsap.from(".partnerInfo", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partners",
    // ,
  },
});

gsap.from(".partnerHeading", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -100,
  x: -40,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partners",
    // ,
  },
});

gsap.from(".upsCalculatorImage", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    // ,
  },
});

gsap.from(".upsCalculatorInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    // ,
  },
});

gsap.from(".mapImage", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
    start: "top+=15",
    markers: true,
    pin: true,
    // ,
  },
});

gsap.from(".info", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
    // ,
  },
});

gsap.from(".productHeading", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  x: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productCard",
    // ,
    // scrub: true,
  },
});

gsap.from(".productInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: 200,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productCard",
    // ,
  },
});

// gsap.from(".headerFaq", 0.7, {
//   opacity: 0,
//   stagger: {
//     each: 0.2,
//     from: "top",
//   },
//   x: -20,
//   scale: 0.7,
//   scrollTrigger: {
//     trigger: ".faq",
//     ,
//     scrub: true,
//   },
// });

gsap.from(".questionContainer", 1, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  xPercent: -10,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".faq",
    // ,
  },
});

gsap.from(".footerbg", 0.7, {
  opacity: 0,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".footer",
  },
});
