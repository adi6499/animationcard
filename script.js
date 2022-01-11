let contain = document.querySelector(".contain")
for(let i=0;i< 800;i++){
    contain.innerHTML += `<div class="image"></div>`
    let image = document.querySelectorAll(".image")
    let random = Math.floor(Math.random() * 50)
    image[i].style.animationDelay=`${i * random}ms`
}