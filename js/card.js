const touchBox1 = document.querySelector(".touch-1_box");
const touch2 = document.querySelector(".touch-2");
const touch2Box = document.querySelector(".touch-2_box");
const touch3 = document.querySelector(".touch-3");
const touch3Box = document.querySelector(".touch-3_box");

const left = document.querySelector(".left");
const feelings = document.querySelector(".feelings");
const old = document.querySelector(".old");
const dots = document.querySelector(".dots");
const maybe = document.querySelector(".maybe");
const age = document.querySelector(".age");
const hurray = document.querySelector(".hurray");
const dot = document.querySelectorAll(".dot");
const odm = document.querySelector(".odm");
const counter  = document.querySelector(".counter");
const low  = document.querySelector(".low");
const thinking = document.querySelector(".thinking");
const therefore = document.querySelector(".therefore");
const youth = document.querySelector(".youth");
const yay = document.querySelector(".yay");
const drugs = document.querySelector(".drugs");
const drink = document.querySelector(".drink");
const wine = document.querySelector(".wine");


let leftCross = false;
let ageCross = false;
let hurrayCross = false;






left.onmouseleave = function(){
    if (ageCross){
        touch2Box.style.opacity = "0";
        odm.style.opacity = "0";
    }
    old.style.height = "auto";
    old.style.transform = "translateY(-15rem)";
    touchBox1.style.opacity = "0";
    dot.forEach(dot=>{
        dot.style.color = "white";
    })
    if(!leftCross){
        setTimeout(() => {
            leftCross = true;
            feelings.style.opacity = "0";
            old.style.opacity = "1";
            dots.style.opacity = "1";
            maybe.style.opacity = "1";
            touch2.style.opacity = "1";
        }, 1000);
    }

}





age.onmouseleave = function(){
        if(!hurrayCross){
            setTimeout(() => {
                counter.style.opacity = "1";
                counter.style.transform = "translateY(0)";
                thinking.style.opacity = "1";
                thinking.style.transform = "translate(0, 0)";
                therefore.style.opacity = "1";
                therefore.style.transform = "translateY(0) rotateZ(0)";
                touch3.style.opacity = "1";
                low.style.opacity = "1";
            }, 1000);
        }
        ageCross = true;
        touch2Box.style.opacity = "0";
        odm.style.opacity = "0";
        if(hurrayCross){
            low.style.opacity = "0";
            touch3Box.style.opacity = "0";
            setTimeout(() => {
                youth.style.opacity = "1";
                counter.style.transform = "translateY(0)";
                yay.style.opacity = "1";
                drugs.style.transform = "translate(0, 0)";
                therefore.style.opacity = "1";
                therefore.style.transform = "translateY(0) rotateZ(0)";
            }, 1000);
        }
    }








    
hurray.onmouseenter = function(){
    low.style.opacity = "0";
    setTimeout(() => {           
        document.querySelector(".siblings__caption").style.display = "block"
    }, 3000);
}









hurray.onmouseleave = function(){
    drugs.style.opacity = "1";
    low.style.opacity = "0";
    touch3Box.style.opacity = "0";
            setTimeout(() => {
                youth.style.opacity = "1";
                drink.style.transform = "translateY(0)";
                drink.style.opacity = "1";
                wine.style.opacity = "1";
                yay.style.transform = "translateY(0)";
                yay.style.opacity = "1";
                youth.style.transform = "scale(1)";
                therefore.style.opacity = "1";
                therefore.style.transform = "translateY(0) rotateZ(0)";
            }, 1000);
        hurrayCross = true;
        touch2Box.style.opacity = "0";
        odm.style.opacity = "0";
}