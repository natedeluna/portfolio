onload = () => {

}
let globalSwitcher = 0;

window.addEventListener('mousemove', loadHero)
function loadHero() {
    let heroText = document.querySelectorAll('.line');
    let fillTextCont = document.querySelector('.type-anim');
    let fillText = " by Nate  De Luna  //  Architect  //  based in TX, US";
    let cursor = document.querySelector('.blink')
    gsap.fromTo(cursor,{opacity:1, ease:'none'},{opacity:0, repeat:22, duration:.7, ease: 'none'})
    let slowTyping = 0;
    setTimeout(function(){
        for (let i=0; i<fillText.length; i++) {
            let typingSpeed = slowTyping === 2 ? 2000 : 40
            setTimeout( function() {
                addChar = fillText.charAt(i);
                if (addChar === '/') {
                    addChar = '<span style = "color: red; font-weight: 800; font-size: 1.3rem;">/</span>'; 
                }
                fillTextCont.innerHTML = fillTextCont.innerHTML += addChar
            },typingSpeed * (i+1))
        }
    },1240);
    
    setTimeout(function(){
        [...heroText].forEach( function(e, i) {
            setTimeout(function() {
                gsap.fromTo(e,{x: 20, opacity: 0, duration: .9}, {x: 0, opacity: 1, duration: .9});
            }, 450 * (i+1))
        })
    },4000)
    window.removeEventListener('mousemove', loadHero)
}
var x = 0
var y = 0
var radian = window.innerWidth > 500 ? .7 : 2.7;
var opacity = window.innerWidth > 500 ? .65 : .9;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || window.innerWidth < 500){
    let fillTextCont = document.querySelector('.type-anim');
    fillTextCont.parentElement.classList.add('middle');
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

    let SafariToolBarColor = document.querySelector("meta[name=theme-color]");
    let typeAnimCont = document.querySelector('.type-anim-cont')
    if (switchColorYin === '#fafafa') {
        SafariToolBarColor.setAttribute('content', '#cad4db')
        typeAnimCont.style.fontWeight= '700'
    } else {
        SafariToolBarColor.setAttribute('content', '#474e57')
        typeAnimCont.style.fontWeight= '500'
    }
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

