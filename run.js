


    // let video = document.querySelector('.video');

    // setTimeout(() =>{video.firstElementChild.play()},1300)

    // let tl = gsap.timeline({delay: 5.8});
    //     tl.fromTo(video,{duration: 2.5, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}, { duration: 1, clipPath: "polygon(51% 46%, 54% 46%, 46% 61%, 43% 61%)"});
    //     tl.to(video, { duration: .5, clipPath: "polygon(41% 46%, 44% 46%, 36% 61%, 33% 61%)"});
    //     tl.to(video, { duration: .5, clipPath: "polygon(8% 8%, 9% 8%, 9% 9%, 8% 9%)"});
    //     tl.add(() => {video.remove()});
    //     tl.to('.header-name-v', {opacity:"1"})
    //     tl.to('.header-name-v', { duration: 2.3, width: "47px"}, ">-.4")
    //     tl.add(() => {animOnScroll();
    //         drawOnScroll();}, ">-1.6")
    // tl.play();

    // window.addEventListener('mousemove', (e) => {
    //     let radian = (Math.atan2(e.y, e.x) * (Math.PI * 36)*.001);
    //     gradientChange.style.background = `conic-gradient(from ${radian}turn at 0% 0%, #eca6a4, 48deg,  #a7bac2, 150deg, #c4ddff)`
    // })

    
// window.onload = function () {
//     const canvas = dcument.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerWidth
//     const bgGradient = new BGGradient (ctx, canvas.width, canvas.height)
// }
    
// class BGGradient {
//     #ctx
//     #width
//     #height
//     constructor(ctx, width, height) {
//         this.#ctx = ctx;
//         this.#width = width;
//         this.#height = height;
//         this.#ctx = 
//     }
//     #calcRadian(pointerX, pointerY) {
//         this.#ctx
//     }
//     connectedCallback() {
//         window.addEventListener('pointermove', (e) => {
            
//         })
//     }
// } 
    var x = 0
    var y = 0
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.cssText = `
    filter: blur(200px); 
    position: fixed; 
    opacity: .65;`
 
    
    window.addEventListener('resize', resizeCanvas, false);
    document.addEventListener('pointermove', (e) => {
        x = e.screenX;
        y = e.screenY;
        updateGradient()
    })
    function updateGradient() {
        let radian = (Math.atan2(y, x) * (360 / Math.PI)*.01);
        gradient = ctx.createConicGradient(radian, 0, 0,)
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        gradient.addColorStop(.1, "#ffb881");  //red
        gradient.addColorStop(.9, "#99caf7");   //blue
        // gradient.addColorStop(.3, "#0c3c52");
        // gradient.addColorStop(.5, "#f5ebf7");
        ctx.fillStyle = gradient;
        // window.requestAnimationFrame(updateGradient);
    }
        // Add five color stops
        // function drawGradient (e) {
        //     // gradient.addColorStop(2, "#c4ddff");
        // } 
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
  
    // drawOnScroll();
    // animOnScroll();
    // window.addEventListener('wheel', animOnScroll)
    // window.addEventListener('wheel', drawOnScroll)
    
 

    function animOnScroll () {
        var elit = document.querySelectorAll('.fade-down');
        for(let i = 0; i< elit.length; i++) {
            if (elit[i].getBoundingClientRect().top <= 5000) {
                elit[i].classList.remove('fade-down');
                elit[i].classList.add('fade-down-active');
                var animActive = document.querySelectorAll('.fade-down-active');
                gsap.fromTo(animActive[animActive.length-1], {y: -28, opacity: 0},{y: -3, opacity: 1, duration: 1})
        
                console.log(elit.length)
            }
        }
        if (elit.length === 0){
            window.removeEventListener('wheel', animOnScroll)
            console.log('removed')
        }
    }

    function drawOnScroll () {
        let svgEl = document.querySelectorAll('.setVB')
        for (let v=0; v<svgEl.length; v++) {
            svgEl[v].setAttribute("viewBox", `0 0 ${window.innerWidth * 1.5} 2`)
            svgEl[v].firstElementChild.setAttribute("d", `M-31 1H${window.innerWidth * 1.5}`)
            console.log(svgEl[v])
        }

        var draw = document.querySelectorAll('.svg-draw');

        for(let n = 0; n< draw.length; n++) {
            if (draw[n].getBoundingClientRect().top <= 2000) {
                gsap.from(draw[n], {strokeDashoffset: "2000", strokeDasharray: "2000"})
                gsap.to(draw[n], {duration: 4, strokeDashoffset: "0", ease: "power4.out"})
                // draw[n].style.animation="draw 5s cubic-bezier(.08,.47,.07,.81) forwards"
            }
        }
    }
    
    function switchMode() {
    
        let rootColors = document.querySelector(':root');
        let switchColorYin = (getComputedStyle(rootColors).getPropertyValue('--dark') !=='#000000') ? '#000000' : '#ffffff';
        let switchColorYang = (getComputedStyle(rootColors).getPropertyValue('--light') !=='#ffffff') ? '#ffffff' : '#000000';
        let inner = document.querySelector('.inner')
        let outer = document.querySelector('.outer')
        console.log(outer)
        rootColors.style.setProperty('--dark', `${switchColorYin}`);
        rootColors.style.setProperty('--light', `${switchColorYang}`);
        inner.setAttribute('fill', switchColorYang)
        outer.setAttribute('stroke', switchColorYang)
    }
    if (window.innerWidth > 700) {
        switchMode();
    }

