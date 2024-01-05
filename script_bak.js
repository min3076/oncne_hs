gsap.registerPlugin(ScrollTrigger);
    let speed = 100;

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".sec1", // 객체기준범위
      pin: true, // 고정
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      scrub: 1, // 모션바운스
      markers: true, // 개발가이드선
      onLeave: function(){
        console.log('end');
      }
    });



//배경
// scene1.add('start0')
// scene1.to('.cir_red', {opacity: 1,x: -20 , y: -100, scale:2,ease: "power1.in" })
// scene1.to('.sqa', {duration: 100, x: -200, y: -200, scale:2,ease: "power1.in" })
// scene1.to('.cir_yellow', {delay:10,duration: 100, opacity: 1, y: 200, scale:4,ease: "power1.in" })


// scene1.add('start1')
// scene1.to('.sqa', {delay:10,duration: 100,y: 100, scale:4,ease: "power1.in" },'start1')
// scene1.to('.cir_yellow', {delay:20,duration: 100, opacity: 1, y: -20, scale:3,ease: "power1.in" },'start1')


//   ~출발선이 평등한~ 충남교육 등장
scene1.to('.sec1_tit1', {duration:600, opacity: 1, y: 0,ease: "power1.in" },'start1')
scene1.to('.sec1_tit1', {duration:600, y: -100,ease: "power1.in" })

scene1.to('.sec1_tit2', {delay:600,duration:600, opacity: 1, y: 0})
scene1.to('.sec1_tit2', {duration: 0, delay:600})
scene1.to('.sec1_tit2', {delay:600, duration:600, y: -10})

//   ~출발선이 평등한~ 충남교육 작아지기
scene1.add('start3')
scene1 .to('.sec1_tit1', {delay:300,duration:100, scale: .8, y: -230},'start3')
.to('.sec1_tit2', {delay:300,duration:100, scale: .8, y: -160},'start3')

scene1.to('.sec1_tit3', {duration: 300, opacity: 1, y: 0})
.to('.sec1_tit3', {duration: 300, y: -30})

scene1.to('.sec1_tit3 .on0', {duration: 0, x:0,scale:.7})
.to('.sec1_tit3 .on_kor', {delay:100, duration: 0,opacity: 1,})
.to('.sec1_tit3 .on1', {duration:600, opacity: 1, x:80})
.to('.sec1_tit3 .on0', {delay:600,duration: 100, opacity: 1, x:20})

scene1.to('.sec1_tit1', {duration: 0, opacity:0, y: -200})
.to('.sec1_tit2', {duration: 0, opacity:0, y: -160})
.to('.sec1_tit3', {duration: 0, y: -60})

scene1.to('.sec1_tit3 .on_txt',  {delay:100, duration: 100, opacity:0, scale:0})
.to('.sec1_tit3 .on_en', {duration: 100, opacity: 1, x:20})
  
// ~으로 시작합니다 없어지기
scene1.add('logo')
scene1.to('.cir', {delay:20,duration:100, opacity: 1, y: -20, scale:3,ease: "power1.in" },'logo')
scene1.to('.sec1_tit3 .txt', {duration:600,delay:1000, opacity:0, x: 100, ease: "power1.in" },'logo')
scene1.to('.sec1_tit3 .on0', {duration:600,delay:300, x: 100, ease: "power1.in"  },'logo')
scene1.to('.sec1_tit3 .on1',  { duration:600, x:200},'logo')

//   로고정지
scene1.to('.sec1_tit3 .on0', {duration:600, x:230, y:20, scale:1,ease: "power1.in" })
scene1.to('.sec1_tit3 .logo_copy',{duration:600, y:0, opacity: 1,ease: "power1.in" })



// 스위치켜기
scene1.to('.sec1_tit3 .on_en', {delay:300,duration:600, opacity:0,  x: 100})
scene1.to('.sec1_tit3 .on_kor', {duration:600, x: 180})
scene1.to('.sec1_tit3 .on_kor_txt', {duration:600, opacity:0,  x: 100})
scene1.to('.sec1_tit3 .logo_copy', {duration:600, opacity:0,  y: 100})
scene1.add('start')
scene1.to('.sec1_tit3 .on_switch', {backgroundColor:'#040B24'})
scene1.to('.sec1_tit3 .slide', {backgroundColor:'#52CDF9'},'start')
scene1.to('.sec1_tit3 .slide', {delay:300,duration:600, x:40, backgroundColor:'#52CDF9'})
scene1.to('.mv', {delay:600,opacity:1})
// 영상열리기
scene1.add('start2')
scene1.to('.mv', {opacity:1,duration:1000,scale:1,clipPath: "circle(100%)"  },'start2',1)
scene1.to('.sec1_tit3 .on0', {delay:600,duration:800,opacity:0 },'start2')
scene1.to('.text1', {opacity:1,delay:1000,duration:600,y:-200})
scene1.to('.text2', {opacity:1,delay:1000,duration:600,y:-100,ease: "power2.out",})


/* Clouds  */
/*   Bird   */
gsap.fromTo(".sec2 header", { opacity: 0,  y: 60,}, {
  y: 0,
  x: 0,
  opacity: 1 ,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".scrollElement",
      start: "15% top",
      end: "60% 100%",
      scrub: 4,
  }
})

