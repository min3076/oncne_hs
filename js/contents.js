
//향상지원센터-드로잉라인
(function () {
	const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
	if(isAnimationOk) {
		setupAnimations();
	}
	function setupAnimations() {
		gsap.registerPlugin(MotionPathPlugin);
		gsap.from(".stroke__wide", {
			drawSVG: "0%",
			// delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "10% top",
				end: "bottom+=10% bottom",
				scrub: 10
			}
		});
	}
}());


//향상지원센터
const hide = (item) => {
    gsap.set(item, {autoAlpha: 0});
}

const animate = (item) => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if(item.classList.contains("reveal_LTR")){
        x = -100;
        y = 0;
    } else if(item.classList.contains("reveal_BTT")){
        x = 0;
        y = 100;
    } else if(item.classList.contains("reveal_TTB")){
        x = 0;
        y = -100;
    } else {
        x = 100;
        y = 0;
    }

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y}, 
        {autoAlpha: 1, x: 0, y: 0, duration: 1.25, overwrite: "auto", ease: "expo"}
    );
}

gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
        onEnter: () => {animate(item)}, 
    });
});


let tl = gsap.timeline();

tl.to('.s_visual', {clipPath: "circle(200% at 100% 100%)",duration:.6})
    .from('.s_visual h2', {y:140,opacity:0, delay:.5, duration:1}, '0')
    .from('.s_visual p', {y:60,opacity:0, delay:1, duration:1}, '0')
    .from('.s_visual .obj', {x:100,opacity:0, delay:1.5, duration:2}, '0')
    // .to('.s_visual', {borderRadius:"0 0 300 0", duration:.2}, '0')
    .to('.s_visual .bg', {scale:1.5, duration:10}, '0')
    .from('.sv_bg', { opacity:0, y:300, delay:1, duration:1}, '0')
    

    


let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".wrapper", // 객체기준범위
    pinSpacing: false,
    start: "top top", // 시작점
    end: "bottom bottom", // 끝점
    // end: "+=1000", // 끝점
    scrub: .2, // 모션바운스
    markers: false, // 개발가이드선

});
scene1.to('.sv_bg', {clipPath: "inset(0%)",duration:10}, '0')
scene1.to('.bgimg', {y:200, duration:10}, '0')
scene1.to('#parallax__nav', {opacity:1,delay:1,duration:1}, '0')




// 온채움
let links = gsap.utils.toArray("#parallax__nav ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href")),
    
    linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link)
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}


// 공통 탭
$(document).ready(function() {
    // 탭 메뉴를 1번으로 초기화
    $('ul.tabs li:eq(0)').addClass('current');
    $('#tab-1').addClass('current');
});

//탭 바 클릭 이벤트
// 클릭할 때 마다 포커스 되는 
$('ul.tabs').on("click","li",function(event){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
 });
