
const tl = gsap.timeline();
tl.to('.sec1_tit1', {y:-140,opacity:1,duration: 1})
  .to('.sec1_tit2', {y:-60,opacity:1, duration: 1})
//   ~출발선이 평등한~ 충남교육 작아지기,없어지기
.add('start00')
.to('.sec1_tit1', {delay:1,duration:.5, scale: .8, y: -180},'start00')
.to('.sec1_tit2', {delay:1,duration:.5, scale: .8, y: -118},'start00')
.to('.sec1_tit3', {duration: 1, opacity: 1, y: 0},)
.to('.sec1_tit3', {duration: 1, y: -20,})



gsap.registerPlugin(ScrollTrigger);
    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".sec1", // 객체기준범위
      pin: true, // 고정
      pinSpacing: false,
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      // end: "+=1000", // 끝점
      scrub: .2, // 모션바운스
      markers: false, // 개발가이드선
      onLeave: function(){
        console.log('end');
      }
    });


  gsap.fromTo(".start_copy", { opacity: 0 }, {

    opacity: 1,
    ease: "power2.out",
    // scrollTrigger: {
    //     trigger: "#wrap",
    //     start: "15% top",
    //     end: "60% 100%",
    //     scrub:1,
    //     onEnter: function() { gsap.to(".cir_blue", {  scale:2 }) },
    //     onLeave: function() { gsap.to(".cir_blue", {  scale:1 }) },
    // }
  })

  


//배경

// scene1.to('.sec1',{duration:1})

scene1.to('.cir_red', {opacity:0,x: 200 , y: 200, scale:2,ease: "power1.in" })
scene1.to('.star', {scale:0})
scene1.to('.cir', {opacity:0,scale:0,ease: "power1.in" })


//  on으로 시작합니다. 등장
scene1.add('start1')
scene1.to('.cir_red', {duration:1,opacity: 1,x: 400 , y: 250, scale:2,ease: "power1.in" },'start1')
scene1.to('.star', {duration:1,opacity: 1, scale:1,rotation:180, ease: "power1.in" },'start1')
scene1.to('.cir_yellow', {delay:1,opacity: 1,duration:6, y: 200, scale:4,ease: "power1.in" },'start1')
scene1.to('.slash', {delay:1,duration:1, opacity: 1, x:0, y: -200,ease: "power1.in" },'start1')
scene1.to('.sec1_tit1', {duration:1, opacity: 0},'start1')
scene1.to('.sec1_tit2', {duration:1, opacity: 0},'start1')
scene1.to('.sec1_tit3', {duration:2, y: -60},'start1')


scene1.add('start2')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 300 , y: 100, scale:2,ease: "power1.in" },'start2')
scene1.to('.star', {duration:6000,x:-100,y:300,rotation:280, ease: "power1.in" },'start2')
scene1.to('.cir_yellow', {duration: 6000, y:100,x:10,scale:6,ease: "power1.in" },'start2')
scene1.to('.slash', {duration: 6000, x:0, y: -100,ease: "power1.in" },'start2')
// scene1.to('.sec1_tit2', {delay:600,duration:600, opacity: 1, y: 0},'start2')
// scene1.to('.sec1_tit2', {delay:600, duration:600, y: -10},'start2')


scene1.add('start3')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 400 , y: 150, scale:1,ease: "power1.in" },'start3')
scene1.to('.star', {duration:6000,x:-150,y:400,rotation:320, scale:4, ease: "power1.in" },'start3')
scene1.to('.cir_yellow', {duration: 6000, y:0,x:-100,scale:8,ease: "power1.in" },'start3')
scene1.to('.slash', {duration: 6000, x:-100, y: -200,ease: "power1.in" },'start3')




// scene1.add('text_start')
// scene1.to('.sec1_tit1', {duration: 0, opacity:0, y: -200},'text_start')
// scene1.to('.sec1_tit2', {duration: 0, opacity:0, y: -160},'text_start')


scene1.to('.sec1_tit3 .on1', {delay:1000, duration:60, opacity: 1, x:80},)

scene1.add('texton')
scene1.to('.sec1_tit3 .on_txt',  {duration: 100, opacity:0, scale:0},'texton')
scene1.to('.sec1_tit3 .on_en', {duration:100, opacity: 1, x:20},'texton')
scene1.to('.sec1_tit3 .on_kor', {delay:1000, duration: 0,opacity: 1,},'texton')

// ~으로 시작합니다 없어지기
scene1.add('logo')
scene1.to('.cir', {delay:20,duration:1000, opacity: 1, scale:3,ease: "power1.in" },'logo')
scene1.to('.star', {duration:6000,x:-100,y:340,scale:1.5,rotation:360, ease: "power1.in" },'logo')
scene1.to('.cir_yellow', {duration: 6000, y:-100,x:80,scale:12,ease: "power1.in" },'logo')

scene1.to('.sec1_tit3 .txt', {duration:6000, opacity:0, x: 100, ease: "power1.in" },'logo')
scene1.to('.sec1_tit3 .on0', {duration:6000,x: 100, ease: "power1.in"  },'logo')


// 로고정지
scene1.add('logo2')
scene1.to('.cir', {delay:20,duration:1000, scale:4,ease: "power1.in" },'logo2')
scene1.to('.sec1_tit3 .on0', {duration:6000, x:230, y:20, scale:1,ease: "power1.in" },'logo2')
scene1.to('.sec1_tit3 .logo_copy',{duration:6000, y:0, opacity: 1,ease: "power1.in" },'logo2')

scene1.to('.cir', {duration:20000, scale:3,ease: "power1.in" })


// 스위치켜기
scene1.add('logo3')
scene1.to('.sec1_tit3 .on_en', {delay:6000,duration:600, opacity:0,  x: 100},'logo3')
scene1.to('.sec1_tit3 .on_kor', {delay:6000,duration:6000, x: 180},'logo3')
scene1.to('.sec1_tit3 .on_kor_txt', {delay:6000,duration:6000, opacity:0,  x: 100},'logo3')
scene1.to('.sec1_tit3 .logo_copy', {delay:6000,duration:6000, opacity:0,  y: 100},'logo3')

scene1.add('start')
scene1.to('.sec1_tit3 .on_switch', {backgroundColor:'#040B24'})
scene1.to('.sec1_tit3 .slide', {backgroundColor:'#52CDF9'},'start')
scene1.to('.sec1_tit3 .slide', {delay:3000,duration:60, x:40, backgroundColor:'#52CDF9'},'start')
scene1.to('.mv', {delay:600,opacity:1})
// 영상열리기
scene1.add('movie')
scene1.to('.mv', {opacity:1,duration:1000,scale:1,clipPath: "circle(100%)"  },'movie')
scene1.to('.sec1_tit3 .on0', {delay:1000,duration:8000,opacity:0 },'movie')
scene1.add('mvtxt')
scene1.to('.mv', {duration:1},'mvtxt')
scene1.to('.text1', {opacity:1,duration:1000,y:-200},'mvtxt')
scene1.to('.text2', {opacity:1,delay:200,duration:1000,y:-100,ease: "power2.out"},'mvtxt')



gsap.to(".sec2 header", {
  y: 0,
  x: 0,
  opacity: 1 ,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".sec2",
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      scrub: 4,
  }
})




// gsap.fromTo(".cir_blue", { opacity: 1 }, {
//   y: -250,
//   x: -200,
//   ease: "power2.out",
//   scrollTrigger: {
//       trigger: "#wrap",
//       start: "15% top",
//       end: "60% 100%",
//       scrub:1,
//       onEnter: function() { gsap.to(".cir_blue", {  scale:2 }) },
//       onLeave: function() { gsap.to(".cir_blue", {  scale:1 }) },
//   }
// })


/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: "#wrap",
    start: "top top", // 시작점
    end: "bottom bottom", // 끝점
    scrub: 1,
});

clouds.to(".slash", { x: 500 }, 0)
clouds.to(".slash", { x: 600}, 0)
clouds.to(".slash", { x: 700 }, 0)
