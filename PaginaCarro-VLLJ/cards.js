// lo primero que vamos a definir las variables que vamos a fectar del DOM
//y con esto vamos a acceder a los elementos del html que afectan el boton de carritos de compras

const blueColor = document.querySelector(".blue");
const redColor = document.querySelector(".red");
const widthColor = document.querySelector(".width");

const itemTag = document.getElementsByName("h3")[0];

const cartButton = document.getElementById("button");
const imageCard = document.querySelector(".img-container");
const feedbackbtn = document.querySelector(".feedback");


// vamos a hacer modificaciónes en los elementos
// colcando escuchadores de eventos 
// boton azul

blueColor.addEventListener("click", function(){
    cartButton.style.backgroundColor= "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundColor= 'url("img/cards1.jpeg")'
})

redColor.addEventListener("click", function(){
    cartButton.style.backgroundColor= "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundColor= 'url("img/cards2.jpeg")'
})

widthColor.addEventListener("click", function(){
    cartButton.style.backgroundColor= "width";
    itemTag.style.backgroundColor = "width";
    imageCard.style.backgroundColor= 'url("img/cards3.jpeg")'
})
