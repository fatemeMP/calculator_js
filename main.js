let displaybox = document.querySelector(".display");

// button
function showDisplay (event){
    const x = event.target.innerText;
    if(displaybox.innerHTML == 0){
        return displaybox.innerHTML = x;
    }else {
        return displaybox.innerHTML += x ;
    }
}
let list = document.querySelectorAll(".show-display");
list.forEach(item =>{
    item.addEventListener("click" , showDisplay)
})

// =
function calculate (){
    let result = displaybox.innerText;
    displaybox.innerText = eval(result);
};
document.querySelector(".calculate").addEventListener("click" ,calculate);

// ac
function allclaer(){
    displaybox.innerText = 0 ;
};
document.querySelector(".all-clear").addEventListener("click",allclaer);

//c
function clear(){
    let text = displaybox.innerText;
    if ( text.length ===1){
       displaybox.innerText = 0;
    }else{
        displaybox.innerText = text.substring( 0 ,text.length -1)
    }
};
document.querySelector(".clear-last").addEventListener("click" ,clear);


