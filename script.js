$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        width: 300,
        navElement:true,
        nav:true,
        dots:false,
        responsive:{
            200:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
})

const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.doctors_section',
        start:'top 80%',
    }
})

tl1.to('.doctors_section',{
    opacity:1,
    top:0
})

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.immune_def',
        start: 'top 80%'
    }
})

tl2.to('.imm_desc',{
    opacity:1,
    transform:'scale(1)',
    stagger:0.2
})

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.faq_section',
        start:'top 80%'
    }
})

tl3.to('.faq_section #accordion .card',{
    top:0,
    opacity:1,
    stagger:0.3
})