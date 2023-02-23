
let currentMode = 'color';
let presentColor ='#333333';



function colorMode(newMode){
   
    currentMode = newMode;
    console.log(currentMode);


    
}
function setCurrentColor(newColor){
    presentColor = newColor;
}


const colorChoice = document.getElementById('colorChoice');
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const erase = document.getElementById('erase');
const reset = document.getElementById('reset');
const res = document.querySelector('.res');
const grid = document.getElementById('squareGrid');
const slider = document.getElementById('res');



colorChoice.oninput = (event) => setCurrentColor(event.target.value);
color.onclick = ()=> colorMode('color');
rainbow.onclick = ()=> colorMode('rainbow');
erase.onclick = ()=> colorMode('erase');
reset.addEventListener('click', ()=>{
   resetSlider();
    
});

slider.addEventListener('input',()=>{
    updateSlider();
})


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function fillBoard(size){
    let squareGrid = document.getElementById('squareGrid');

    squareGrid.style.gridTemplateColumns =`repeat(${size} , 1fr)`;
    squareGrid.style.gridTemplateRows =`repeat(${size} , 1fr)`;
    let amount = size*size;
   
    for(let i = 0 ; i < amount ; i++){
        
        let square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover',(event)=>{
            if (event.type === 'mouseover' && !mouseDown) return;
            if (currentMode === 'rainbow'){
                const ranR = Math.floor(Math.random() * 256);
                const ranG = Math.floor(Math.random() * 256);
                const ranB = Math.floor(Math.random() * 256);
                square.style.backgroundColor =`  rgb(${ranR} ${ranG} ${ranB})`;
                console.log(currentMode);
                
            }
            else if(currentMode === 'color'){
                square.style.backgroundColor= presentColor;
                console.log(currentMode);
            }
            else if (currentMode === 'erase'){
                square.style.backgroundColor= "white";
                console.log(currentMode);
                
            } 

        });

        squareGrid.insertAdjacentElement('beforeend',square);
        res.textContent = `${size}X${size}`;
        
        
}
}
fillBoard(16);

function resetSlider(){
    grid.innerHTML = '';
    fillBoard(16);
    slider.value = 16;
}
function updateSlider(){
    grid.innerHTML='';
}


  



function changeSize(input){
    fillBoard(input); 
}
