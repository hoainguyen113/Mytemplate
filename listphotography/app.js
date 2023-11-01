const filter = document.querySelector('.productFilterIcon')
const productFilterList = document.querySelector('.productFilterList')
const sortby = document.querySelector('.productFilterItem:last-child span')
const sortByList = document.querySelector('.sortByList')
const listPhoto = document.querySelector('.listPhoto')
const listPhotoArr = []; //24

let initValue = 31
for (let i = 0; i < 24; i++) {
    let number = '1' + initValue      
    let imgSrc = `../listImagePhotography/Rectangle ${number}.png`
    listPhotoArr.push(imgSrc)
    initValue++;
}

listPhotoArr.map((photo) => {    
    listPhoto.innerHTML += ` <li class="listphotoItem"><img src="${photo}" alt="" ></li>`
})

filter.addEventListener('click', () => {
    productFilterList.classList.toggle('animationFilter')
})
sortby.onclick = () => {
    sortByList.classList.toggle('hide')
}






