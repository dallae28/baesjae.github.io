const images = ["0.jpeg", "1.jpeg","2.jpeg"];
const imTag = document.querySelector(".image");
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width = "1400";
bgImage.height = "800";

console.log(bgImage);

document.body.appendChild(bgImage);

