
const images = ["0.jpg","1.jpg","2.jpg"];
//get random image
const chosenImage = images[Math.floor(Math.random()*images.length)];
//길이를 곱해주는걸로도 충분하다. 
console.log(chosenImage)
const bgImage = document.createElement("img");
bgImage.src =`image/${chosenImage}`//자바스크립으로 html 만들기
document.body.appendChild(bgImage)
//appenChild = adding code to html
