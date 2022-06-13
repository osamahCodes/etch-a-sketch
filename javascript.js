let canvas = document.querySelector('.canvas');
let options = document.querySelector('.options');
for (let i = 0; i < 64*64; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'border-color: dimgray; border-width: 1px; border-style: solid; height: 6.25px; width: 6.25px;';
    div.classList.add('dots')
    canvas.appendChild(div);
    
}

canvas.addEventListener('mouseover', function(e){
    if (e.target.classList.value==='dots') {
        e.target.style['background-color'] = 'black';
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
            div.style.cssText = `border-color: dimgray; border-width: 1px; border-style: solid; height: ${newPixel}px; width: ${newPixel}px;`;
            div.classList.add('dots')
            canvas.appendChild(div);
            
        }
        
    }
}, false)
