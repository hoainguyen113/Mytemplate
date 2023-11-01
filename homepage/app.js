const blocks = document.querySelectorAll('.card-item');
const prev = document.querySelector('#lastestBodyLeft');
const next = document.querySelector('#lastestBodyRight');

const [block1, block2, block3] = blocks

const blockObject = [
    {
        id: 1,
        block: block1    
    },
    {
        id: 2,
        block: block2   
    },
    {
        id: 3,
        block: block3    
    }
]

next.addEventListener('click',() => {
    blockObject.forEach((block) => {
        if(block.id === 1){
            block.block.style.left = "unset"
            block.block.style.right = "0"
            block.block.classList.remove("upLevel")
            block.block.classList.remove('animationSlideNext')
            block.block.classList.remove('animationSlidePrev')
            block.block.classList.remove("animationOneToTwo")
        } else
        if(block.id === 2){
            block.block.style.width = "200px"
            block.block.style.height = "300px"
            block.block.classList.remove("upLevel")
            block.block.classList.add('animationSlideNext')       
            block.block.classList.remove('animationSlidePrev')
            block.block.classList.remove("animationOneToTwo")
        } else if(block.id === 3){         
            block.block.style.right = "275px"     
            block.block.style.width = "300px"
            block.block.style.height = "400px"
            block.block.classList.add("upLevel")
            block.block.classList.remove('animationSlideNext')
            block.block.classList.remove('animationSlidePrev')
            block.block.classList.remove("animationOneToTwo")

        }
    })
    blockObject.forEach((block) => {
        block.id = changeIDBlockNext(block.id)
    })
    
})
prev.addEventListener('click',() => {
    blockObject.forEach((block) => {
        if(block.id === 1){                  
            block.block.style.width = "300px"
            block.block.style.height = "400px"
            block.block.classList.add("upLevel")
            block.block.classList.add("animationOneToTwo")
            block.block.classList.remove('animationSlideNext')
            block.block.classList.remove('animationSlidePrev')
        } 
        else if(block.id === 2){ 
            block.block.style.right = '0'
            block.block.style.left = 'unset'         
            block.block.style.width = "200px"
            block.block.style.height = "300px"
            block.block.classList.remove("upLevel")
            block.block.classList.remove('animationSlideNext')
            block.block.classList.remove('animationSlidePrev')
            block.block.classList.remove("animationOneToTwo")
        } 
        else if(block.id === 3){           
            block.block.style.width = "200px"
            block.block.style.height = "300px"             
            block.block.classList.remove("upLevel")
            block.block.classList.add('animationSlidePrev')
            block.block.classList.remove('animationSlideNext')
            block.block.classList.remove("animationOneToTwo")
        }
    })
    blockObject.forEach((block) => {
        block.id = changeIDBlockPrev(block.id)
    })
    
})

function changeIDBlockNext(id) {
    if(id === 1){
        return 3
    }
    if(id === 2){
        return 1
    }
    if(id === 3){
        return 2
    }
}
function changeIDBlockPrev(id) {
    if(id === 1){
        return 2
    }
    if(id === 2){
        return 3
    }
    if(id === 3){
        return 1
    }
}

//fade image
const svgTag = document.querySelector('.imgFadeWrapper svg')
const contentImgFade = document.querySelector('.imgFade p')
const imgFade = document.querySelector('.imgFade')
const mainWrapper = document.querySelector('.mainwrapper')
const body = document.querySelector('body')
console.log(imgFade, mainWrapper);
svgTag.addEventListener('mouseover', () => {
    setTimeout(() => {
        contentImgFade.classList.remove('hide')
        contentImgFade.classList.remove('hideAnimation')
        contentImgFade.classList.add('show')
    }, 400)
})
svgTag.addEventListener('mouseout', () => {    
    setTimeout(() => {
        contentImgFade.classList.add('hideAnimation')
        contentImgFade.classList.remove('show')
    }, 400)
})

function disPlayImgFade() {
    body.style.overflow = 'hidden'
    imgFade.classList.remove('hide')
    imgFade.classList.add('show')
    mainWrapper.classList.add('hide')
}








