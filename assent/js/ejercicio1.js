let img = document.querySelector("img")
let img2 = false;

img.addEventListener('click', () =>{
    if (img2 == false) {
        document.querySelector("img").style.border = "solid 3px red"
        img2 = true
}else {
    document.querySelector("img").style.border = ""
        img = false
        

        }
})

