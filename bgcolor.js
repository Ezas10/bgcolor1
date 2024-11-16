let color=document.getElementById("color")
let radius=document.getElementById("radius")
let image=document.querySelector("img");

function colorChange(c){
    // console.log(c)
    if(c.key==="Enter"){
        document.body.style.backgroundColor=color.value
    }
}

function RadiusChange(r){
    console.log(r)
    if(r.key=="Enter")
        image.style.borderRadius=`${radius.value}px`
}


