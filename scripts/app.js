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
        colorElement = document.createElement('p'),
        blurElement = document.createElement('p'),
        radioElement = document.createElement('p');


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

    colorElement.textContent = `background-color: rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${event.target.value});`;
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
    blur.style.backdropFilter = `blur(${valor}px) contrast(${rangeContrast.value}%) saturate(${rangeSaturation.value}%)`;
    blurElement.textContent = `backdrop-filter: blur(${valor}px) contrast(${rangeContrast.value}%) saturate(${rangeSaturation.value}%);`;
    bgCopy2.appendChild(blurElement);

});

rangeContrast.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.backdropFilter = `blur(${rangeBlear.value}px) contrast(${valor}%) saturate(${rangeSaturation.value}%)`;
    blurElement.textContent = `backdrop-filter: blur(${rangeBlear.value}px) contrast(${valor}%) saturate(${rangeSaturation.value}%);`;
    bgCopy2.appendChild(blurElement);

});

rangeSaturation.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.backdropFilter = `blur(${rangeBlear.value}px) contrast(${rangeContrast.value}%) saturate(${valor}%)`;
    blurElement.textContent = `backdrop-filter: blur(${rangeBlear.value}px) contrast(${rangeContrast.value}%) saturate(${valor}%);`;
    bgCopy2.appendChild(blurElement);

});

rangeSize.addEventListener('input', event =>{

    let valor = event.target.value;
    square.style.width = `${valor}rem`;
    square.style.height = `${valor}rem`;

});

rangeRadio.addEventListener('input', event =>{

    let valor = event.target.value;
    blur.style.borderRadius = `${valor}%`;
    square.style.borderRadius = `${valor}%`;
    radioElement.textContent = `border-radius: ${valor}%;`;
    bgCopy3.appendChild(radioElement);
    
});

