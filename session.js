document.write("hiral");
document.write(1234);
document.write(2.4);


document.write(true);
document.write(false);

console.log("hiral");
console.log(2345);
console.log(3.3);
console.log(true);
console.log(false);


// alert(2345);
// alert(2.3);
// alert(true);
// alert(false);
// alert("hiral");



var toy="girl"
console.log(toy)
// alert(toy)

var a=1234.5;
console.log(a)
// alert(a)

var b=3.5;
console.log(b)

var c =true;
console.log(c)

var d =false;
console.log(d)

var a = 12;
var b = 12;

document.write(a+b)
document.write(a*b)
document.write(a/b)
document.write(a-b)
// --------------------------

function moveValue(){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");

    div2.innerHTML=div1.innerHTML;
    div1.innerHTML=""
}
   
function addInput(){
   var inpcon=document.getElementById("inputcontainer");
    document.getElementById("inputcontainer").innerHTML +="<input value='input' class='inp1'>"
} 

function readAlert(){
    alert("Hello everyone ....")
}
function readPara(){
    var para1=document.getElementById("para1");
    alert(para1.innerHTML)
}
function addText(){
   document.getElementById("para2").innerHTML+= "text"
}

// ==============
// Callback Examples

// console.log("start")
// function displayName(name){
//     setTimeout(()=>{
//         console.log("Inside setTimeOut")
// return name;

//     },2000)

// }

// let nm= displayName('Ankita')
// console.log(nm)
// console.log("end")

// ============================================
// Resolve above problem in using callback

// console.log("start");
// function temp2(callback){
//     console.log("hi 2")
//      callback()
// }


// function temp1(){
//     console.log("hi 1")
// }
// temp2(temp1)

function addHtmlTag(){
    document.getElementById("para3").innerHTML+="<p><b><i>Nimap Infotech</i></b></p>"
}

function addImage(){
    var imgcont1=document.getElementById("imgcontainer1")
    imgcont1.innerHTML="<img src='./logo1.png'></img>"
}

function useClassName(){
var a=document.getElementsByClassName("text1");
a[0].style.backgroundColor="yellow";
a[0].style.color="red";
a[1].innerHTML+="<b><i>text new1</i></b>"
a[1].style.border="2px solid blue"
}

function backgroundImage(){
   
var div3=document.getElementsByClassName("div3")
    div3[0].style.backgroundImage="url(./img1.avif)"
    div3[1].style.backgroundImage="url(./img2.avif)"
}

function applyClass(){
 document.getElementById("applyclass").className+=" appclass2"
}
function readLinkByAttribute(){
    let a=document.getElementById("readlink").getAttribute("href")
    alert(a)
}

function setAttributeEx(){
var a=document.getElementById("img1").setAttribute("src","./logo1.png")
}

function setAttributeEx2(){
    document.getElementById("div5").setAttribute("class","attr1")
}

function displayValue(){
    var getinp1=document.getElementById("inp1").value;
    var getpara4=document.getElementById("para-4").innerHTML=getinp1
}

function addBorder(){
    document.getElementById("table1").setAttribute("border",1)
}