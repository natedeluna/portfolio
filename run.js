


window.addEventListener('mousemove', (e) => {
    let radian = (Math.atan2(e.y, e.x) * (360 / Math.PI)*.001);
    console.log()
    document.querySelector(':root').style.setProperty('--gradient', `conic-gradient(from ${radian}turn at 0% 0%, #fce0c0f3, 100deg,  #a7bac2, 150deg, #c4ddff)`)
})


window.addEventListener('wheel', animOnScroll)

let x = 0;
function animOnScroll() {
    var elit = document.querySelectorAll('.fade-down');
    for(let i = 0; i< elit.length; i++) {
        console.log(elit.length)
        if (elit[i].getBoundingClientRect().top <= 600){
            elit[i].classList.remove('fade-down');
            elit[i].classList.add('anim-active');
            var animActive = document.querySelectorAll('.anim-active');
            gsap.fromTo(animActive[x],
                {
                    y: 0,
                    opacity: 0,
                },
            
                {
                    y: 25,
                    opacity: 1,
                    duration: 1
                })
            x++
        }
    }
    if (elit.length === 0){
        window.removeEventListener('wheel', animOnScroll)
        console.log('removed')
    }
}