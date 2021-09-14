//UI
const tooglebtn = document.getElementById("toggle");
const openbtn = document.getElementById("open");

const modal= document.getElementById("modal");
const closebtn = document.getElementById("close");

//Event Listener NAV
tooglebtn.addEventListener("click",()=>{
    //console.log('hay');
    document.body.classList.toggle("shownav");
});

//Show Modal
openbtn.addEventListener("click", ()=>{
   modal.classList.add('showmodal');
});

//Close Modal
closebtn.addEventListener("click", ()=>{
    modal.classList.remove('showmodal');
});

//Hide Modal On Outside click
// window.addEventListener("click",(e)=>{
//     //nsole.log(e.target);
//
//     if(e.target===modal){
// modal.classList.remove("sowmodal")
// }
//
// });

window.addEventListener("click",(e)=>e.target === modal ? modal.classList.remove("showmodal"):false);