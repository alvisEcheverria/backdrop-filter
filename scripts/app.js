const   color = document.querySelector("input[type=color]"),
        rangeOpacity = document.querySelector("#slider-opacity"),
        rangeSize = document.querySelector("#slider-size"),
        rangeRadio = document.querySelector("#slider-radio"),
        rangeBlear = document.querySelector("#slider-blear"),
        rangeContrast = document.querySelector("#slider-constrast"),
        rangeSaturation = document.querySelector("#slider-saturation"),
        square = document.querySelector(".square"),
        blur = document.querySelector(".blur"),
        bgCopy1 = document.querySelector(".bg-copy-text1"),
        bgCopy2 = document.querySelector(".bg-copy-text2"),
        bgCopy3 = document.querySelector(".bg-copy-text3"),
        bgCopy4 = document.querySelector(".bg-copy-text4"),
        colorElement = document.createElement('p'),
        blurElement = document.createElement('p'),
        contrastElement = document.createElement('p'),
        satureElement = document.createElement('p');


const displayColorNames = () => {

    const hexColor = color.value;
    const splited = hexColor.split("");
    const rgb = [];
    
    for(let i = 1; i < splited.length; i+=2){
        const units = `${splited[i]}${splited[i+1]}`;
        const hexToRGB = parseInt(units, 16);
        rgb.push(hexToRGB);
    }
    
    square.style.backgroundColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rangeOpacity.value})`;

    color.addEventListener('input', () =>{
    
        colorElement.textContent = `background-color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rangeOpacity.value});`;
        bgCopy1.appendChild(colorElement);
    });
    
    rangeOpacity.addEventListener('input', (event) =>{
    
        colorElement.textContent = `background-color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${event.target.value};)`;
        bgCopy1.appendChild(colorElement);
    });
    
};

color.addEventListener('input', displayColorNames); 

rangeOpacity.addEventListener('input', event =>{

    let valor = event.target.value;
    square.style.opacity = valor ;
    
});

rangeBlear.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.backdropFilter = `blur(${valor}px)`;
    blurElement.textContent = `backdrop-filter: blur(${valor}px);`;
    bgCopy2.appendChild(blurElement);

});

rangeContrast.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.backdropFilter = `contrast(${valor}%)`;
    contrastElement.textContent = `backdrop-filter: contrast(${valor}%);`;
    bgCopy3.appendChild(contrastElement);

});

rangeSaturation.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.backdropFilter = `saturate(${valor}%)`;
    satureElement.textContent = `backdrop-filter: sature(${valor}%);`;
    bgCopy4.appendChild(satureElement);

});

rangeSize.addEventListener('input', event =>{

    let valor = event.target.value;
    square.style.width = `${valor}rem`;
    square.style.height = `${valor}rem`;

});

rangeRadio.addEventListener('input', event =>{

    let valor = event.target.value;
    square.style.borderRadius = `${valor}%`;
    
});

