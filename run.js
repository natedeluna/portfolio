onload = () => {

}
window.addEventListener('mousemove', loadHero)
function loadHero() {
    let heroText = document.querySelectorAll('.line');
    let fillText = "Nate De Luna // Engineer // TX, US ";
    let fillTextCont = document.querySelector('.type-anim');
    let cursor = document.querySelector('.blink')
    gsap.fromTo(cursor,{opacity:1, ease:'none'},{opacity:0, repeat:12, duration:.7, ease: 'none'})
    setTimeout(function(){
        for (let i=0; i<fillText.length; i++) {
            setTimeout( function() {
                addChar = fillText.charAt(i);
                fillTextCont.innerHTML = fillTextCont.innerHTML += addChar
            },100 * (i+1))
        }
    },1240);

    setTimeout(function(){
        [...heroText].forEach( function(e, i) {
            setTimeout(function() {
                gsap.fromTo(e,{x: 20, opacity: 0, duration: .9}, {x: 0, opacity: 1, duration: .9});
            }, 450 * (i+1))
        })
    },6000)
    window.removeEventListener('mousemove', loadHero)
}
var x = 0
var y = 0
var radian = window.innerWidth > 500 ? .7 : 2.7;
var opacity = window.innerWidth > 500 ? .65 : .9;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || window.innerWidth < 500){
    let mobileGradient = document.querySelector('#mobileBG');
    document.querySelector('canvas').remove();
    mobileGradient.style.background = `conic-gradient(from ${.1}turn at 0% 0%,#34ace0, 45deg, #e39686)`;
    // mobileGradient.style.filter = "blur(60px)";
    let root = document.querySelector(':root');
    root.style.setProperty('--noise-opacity', '.015')
 
  } else{
    document.querySelector('#mobileFilter').remove();
    console.log("not mobile device");
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    canvas.style.cssText = `
        filter: blur(200px); 
        position: fixed; 
        opacity: ${opacity};
        `;
    updateGradient(radian);
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('pointermove', (e) => {
        x = e.screenX;
        y = e.screenY;
        radian = (Math.atan2(y, x) * (360 / Math.PI)*.01);
        updateGradient(radian)
    })
    function updateGradient(xx) {
        gradient = ctx.createConicGradient(xx, 0, 0,)
        gradient.addColorStop(.1, "#ffb881");  //red
        gradient.addColorStop(.9, "#99caf7");   //blue
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
}
    
  
    // drawOnScroll();
    // animOnScroll();
    // window.addEventListener('wheel', animOnScroll)
    // window.addEventListener('wheel', drawOnScroll)
    
 

    function animOnScroll () {
        var elit = document.querySelectorAll('.line-anim');
        for(let i = 0; i< elit.length; i++) {
            if (elit[i].getBoundingClientRect().top <= 5000) {
                elit[i].classList.remove('line-anim');
                elit[i].classList.add('line-anim-active');
                var animActive = document.querySelectorAll('.line-anim-active');
                gsap.fromTo(animActive[animActive.length-1], {y: -28, opacity: 0},{y: -3, opacity: 1, duration: 1})
        
                console.log(elit.length)
            }
        }
        if (elit.length === 0){
            window.removeEventListener('wheel', animOnScroll)
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
        let switchColorYin = (getComputedStyle(rootColors).getPropertyValue('--dark') ==='#000000') ? '#fafafa' : '#000000';
        let switchColorYang = (getComputedStyle(rootColors).getPropertyValue('--light') ==='#fafafa') ? '#000000' : '#fafafa';
        let inner = document.querySelector('.inner')
        let outer = document.querySelector('.outer')
        rootColors.style.setProperty('--dark', `${switchColorYin}`);
        rootColors.style.setProperty('--light', `${switchColorYang}`);
        inner.setAttribute('fill', switchColorYang)
        outer.setAttribute('stroke', switchColorYang)
    }
    if (window.innerWidth > 700) {
        switchMode();
    }
    function selectText(id){
        var sel, range;

        var el = document.getElementById(id); //get element id
        if (window.getSelection && document.createRange) { //Browser compatibility
          sel = window.getSelection();
          if(sel.toString() == ''){ //no text selection
             window.setTimeout(() =>{
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range);//add Range to a Selection.
            },1);
          }
        }
        el.style.background = "#26b0fa30"
        el.style.borderRadius = "5px"
    }

