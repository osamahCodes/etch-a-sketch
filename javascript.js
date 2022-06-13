let canvas = document.querySelector('.canvas');
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