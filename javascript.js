let canvas = document.querySelector('.canvas');
let options = document.querySelector('.options');
let current = document.querySelector('.current');
let randomizer = document.querySelector('.randomizer');
let isBrushBlack = true;
for (let i = 0; i < 64*64; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'border-color: white; border-width: 1px; border-style: solid; height: 6.25px; width: 6.25px;';
    div.classList.add('dots');
    canvas.appendChild(div);
    
}

function brush(boolean){
    if(boolean){
        return 'black';
    }else{
        let r = Math.floor(Math.random()*255)+1;
        let g = Math.floor(Math.random()*255)+1;
        let b = Math.floor(Math.random()*255)+1;
        return `rgb(${r},${g},${b})`;
    }
}

canvas.addEventListener('mouseover', function(e){
    if (e.target.classList.value==='dots') {
        let color = brush(isBrushBlack);
        e.target.style['background-color'] = color;
        e.target.style['border-color'] = color;
    }
}, false)
options.addEventListener('click', function(e){
    if (e.target.classList.value==='ratio') {
        let sign = prompt('choose a one-to-one ratio that doesnt exceed 100');
        while (parseInt(sign)>100) {
            sign = prompt('choose a one-to-one ratio that doesnt exceed 100');            
        }
    
        let newRatio = parseInt(sign);
        let newPixel = 400/newRatio;
        canvas.replaceChildren();
        for (let i = 0; i < newRatio*newRatio; i++) {
            const div = document.createElement('div');
            div.style.cssText = `border-color: white; border-width: 1px; border-style: solid; height: ${newPixel}px; width: ${newPixel}px;`;
            current.textContent = `Current ratio: ${newRatio}X${newRatio}`
            div.classList.add('dots')
            canvas.appendChild(div);
            
        }
        
    }else if (e.target.classList.value==='randomizer') {
        isBrushBlack = false;
    }else if (e.target.classList.value==='black') {
        isBrushBlack = true;
    } 
}, false)
