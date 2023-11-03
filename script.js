const colorBtn = document.getElementById('color-btn');
const shapeBtn = document.getElementById('shape-btn');

const shapes = ['circle' , 'triangle' , 'square'];
let index = 0;
const genrateRamdomNumber = () => {
  const hexCode = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + hexCode.slice(0,6);
}




const changeBgColor = () => {
    const bgColor = genrateRamdomNumber();
    console.log(bgColor)
    document.getElementById('square').style.backgroundColor = bgColor;
    
}

const changeshape  = () => {
    const ele = document.getElementById('circle');
     shapes.forEach(shape => ele.classList.remove(shape));
     ele.classList.add(shapes[index]); 
     index++;
     if(index >= shapes.length) index = 0;
}


colorBtn.addEventListener('click' , changeBgColor);
shapeBtn.addEventListener('click' , changeshape);