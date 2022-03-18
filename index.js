var width = window.innerWidth
console.log(width)
if (width<500){
    console.log("doing")
    document.getElementById('header').classList.toggle("small");
    console.log("done")

}