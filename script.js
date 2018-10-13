const resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', function(){
        window.location.reload();
})

const newBtn = document.querySelector('.newBtn');
    newBtn.addEventListener('click',function(){
        usersGridChoice();
        
})

function usersGridChoice(){
    let gridSize = prompt('Enter a number between 0 and 100');
    if(gridSize < 0 || gridSize > 100 ){
        alert('The number you entered is not in range. Try again.')
    }else{
        createGrid(gridSize);
    }
}

function createGrid(gridSize){
    let mainDiv = document.querySelector('#gridContainer');
    document.body.removeChild(mainDiv);
    mainDiv = document.createElement('div');
    mainDiv.setAttribute('id','gridContainer');
    document.body.appendChild(mainDiv);
    
    mainDiv.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    mainDiv.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;

    for (let i=0 ; i < (gridSize*gridSize) ; i++){
        const divs = document.createElement('div');
        divs.classList.add('box');
        divs.addEventListener('mouseover' , ()=>{ 
            divs.style.backgroundColor = `rgb(${Math.round(getRandom())},${Math.round(getRandom())},${Math.round(getRandom())})`; 
        });
        mainDiv.appendChild(divs);
    }
}

function getRandom(){
    return (Math.random()*250);
}