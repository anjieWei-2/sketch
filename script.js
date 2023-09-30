const container = document.getElementsByClassName('container')[0]
for (let i=0;i<16*16;i++){
    const squareCreate = document.createElement('div')
    container.append(squareCreate)
}
const squares = container.querySelectorAll('div')
let lightness = 90
function randomColour(lightness){
    hue = Math.floor(Math.random()*360)
    saturation = Math.floor(Math.random()*101)+'%'
    lightness = lightness + '%'
    return `hsl(${hue},${saturation},${lightness})`
}

squares.forEach(function(square){
    square.addEventListener('mouseover',()=>{
        if (lightness>0){
            lightness-=10
        }
        square.style.backgroundColor = randomColour(lightness)    
    })
})



const newBoard = document.getElementById('newBoard')
newBoard.addEventListener('click',()=>{
    lightness=100
    let numSquare 
    while (true) {
        numSquare = Number(prompt('How many squares do you want per side?'))
        if (Number.isInteger(numSquare) && numSquare>0 &&numSquare<100){
            break;
        }else{
            alert('Integer from 1 to 100 only, sorry.')
        }
    }
    
    container.querySelectorAll('div').forEach(function(square){
        square.remove()
    })

    for (let i=0;i<numSquare*numSquare;i++){
        const squareCreate = document.createElement('div')
        container.append(squareCreate)
    }
    
    container.querySelectorAll('div').forEach(function(square){
        let width = (1/numSquare)*100 + '%'
        square.style.flex = '0 0 ' + width
        square.style.height = width
        square.addEventListener('mouseover',()=>{
            if (lightness>0){
                lightness-=10
            }
            square.style.backgroundColor = randomColour(lightness) 
        }) 
    })    
})
