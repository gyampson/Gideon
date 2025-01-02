gsap.from(".container h1", {
    x:-200,
    opacity:0,
    duration: 10,
    delay:1,
    ease: "elastic",
     yoyo: true,
     repeat: -1,
   scrollTrigger:{
      trigger: ".container h1",
        toggleActions: "restart none restart restart",
 
   }
})
gsap.set(".logo", {
    borderRadius: 0,
  });
  gsap.to(".logo", {
    borderRadius: 50,
    duration: 1,
    x: -30,
    ease: "power1",
    yoyo: true,
    repeat: -1,
    stagger: {
      amount: 2,
      from: 8,
      each: 5,
    },
  });
  gsap.set("button", {
    borderRadius: 5,
  });
  gsap.to("button", {
    borderRadius: 50,
    duration: 3,
    x: -10,
    ease: "power1",
    yoyo: true,
    repeat: -1,
   
  });

gsap.from("section1 ", {
   opacity : 0,
    duration : 2,
    ease: "elastic",
    scrollTrigger:{
        trigger: ".section1",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})
gsap.from("section2 h1 ", {
    x:-300,
    duration : 2,
    ease: "power1",
    stagger: 0.05,
    scrollTrigger:{
        trigger: "section2 h1",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})

gsap.from("section2 ul li  ", {
    x:-600,
    duration : 4,
    opacity:0,
    delay:1,
    ease: "power1",
    amount: 2,
    stagger: 1,
    scrollTrigger:{
        trigger: "section2 ul li ",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})
gsap.from("section3 h1 ", {
    x:-400,
    duration : 3,
    ease: "power1",
   
    scrollTrigger:{
        trigger: "section3 h1",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})

gsap.from("section3 ul li ", {
    x:-600,
    duration : 4,
    delay:2,
    ease: "power1",
    amount:1,
    stagger:3,
    scrollTrigger:{
        trigger: "section3 ul li",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})
gsap.from(".sect ", {
    x:-600,
    duration : 3,
    delay:1,
    ease: "power1",
    amount:10,
    stagger:1,
    scrollTrigger:{
        trigger: ".sect",
        scroller:"body",
        toggleActions: "restart pause reverse complete",
    }
})


