import {dataJ} from "./js/dataJ.js";
import {dataP} from "./js/dataP.js";
import {dataF} from "./js/dataF.js";
import {dataR} from "./js/dataR.js";

const conteinerNavCarCompra= document.querySelector(".conteiner__nav__car-compra")


//Agregar a Stock

const conteinerStoreJordan = document.querySelector(".conteiner__store-Jordan")
let htmlJ=" <h2>Jordan</h2>";
dataJ.forEach(({id,name,price,stock,urlImages}) => {
    htmlJ += `
<div class="conteiner__store__card" id="${id}">
    <img src="${urlImages}" alt="${name}">
    <h3>${name}</h3>
    <p>Precio:${price}</p>
    <p id="stock">Stock:${stock}</p>
    <button class ="btn btn__add ">Agregar</button>
</div>
`;
});

conteinerStoreJordan.innerHTML = htmlJ;


const conteinerStorePirma = document.querySelector(".conteiner__store-Pirma")
let htmlP=" <h2>Pirma</h2>";
dataP.forEach(({id,name,price,stock,urlImages}) => {
    htmlP += `
<div class="conteiner__store__card" id="${id}">
    <img src="${urlImages}" alt="${name}">
    <h3>${name}</h3>
    <p>Precio:${price}</p>
    <p id="stock">Stock:${stock}</p>
    <button class ="btn btn__add ">Agregar</button>
</div>
`;
});

conteinerStorePirma.innerHTML = htmlP;


const conteinerStoreFila = document.querySelector(".conteiner__store-Fila")
let htmlF=" <h2>Fila</h2>";
dataF.forEach(({id,name,price,stock,urlImages}) => {
    htmlF += `
<div class="conteiner__store__card" id="${id}">
    <img src="${urlImages}" alt="${name}">
    <h3>${name}</h3>
    <p>Price:${price}</p>
    <p>Stock:${stock}</p>
    <button class ="btn btn__add ">Agregar</button>
</div>
`;
});
conteinerStoreFila.innerHTML = htmlF;

const conteinerStoreReebok = document.querySelector(".conteiner__store-Reebok")
let htmlR=" <h2>Reebok</h2>";
dataR.forEach(({id,name,price,stock,urlImages}) => {
    htmlR += `
<div class="conteiner__store__card" id="${id}">
    <img src="${urlImages}" alt="${name}">
    <h3>${name}</h3>
    <p>Price:${price}</p>
    <p id="stock" >Stock:${stock}</p>
    <button class ="btn btn__add ">Agregar</button>
</div>
`;
});
conteinerStoreReebok.innerHTML = htmlR;

//Filtrar Stock

// const filtJordan = document.querySelector(".Filt-Jordan");
// const conteinerStorePirmaShow = document.querySelector(".conteiner__store-Pirma-show")

// filtJordan.addEventListener("click", function () {
//     conteinerStorePirmaShow.classList.toggle(".conteiner__store-Pirma")
// });



//Icono de Menu-Abrir//

const iconMenu = document.querySelector("#iconMenu");
const menu = document.querySelector("#menu");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
});

//Icono de Carrito-Abrir//
 
const iconCar = document.querySelector("#iconCar");
const car = document.querySelector("#Car");

iconCar.addEventListener("click", function () {
    car.classList.toggle("car__show");
});


//Icono de Carrito-Cerrar
const closeX = document.querySelector("#close");
closeX.addEventListener("click", function () {
    car.classList.toggle("car__show");
})
 
//Cerrar Menu //
const HomeC = document.querySelector("#Home-C");

HomeC.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
})

//const CategoriasC = document.querySelector("#Categorias-C");

//CategoriasC.addEventListener("click", function () {
//    menu.classList.toggle("menu__show");
//})

const StoreC = document.querySelector("#Store-C");

StoreC.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
})

const TopC = document.querySelector("#Top-C");

TopC.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
})

const InformacionC = document.querySelector("#Informacion-C");

InformacionC.addEventListener("click", function () {
    menu.classList.toggle("menu__show");
})


//Agregar a Carrito//
const cart={};
const precioTotal=document.querySelector("#precio-total")
const AmountTotal=document.querySelector(".AmountTotal")
function PrintJInCart() {

    let sumTotal=0;    
    let html="";
    let concart=0;
    const arrayCart = Object.values(cart);

    arrayCart.forEach(({id,name,price,stock,urlImages,amount})=>{
        html +=`
        <div class="conteiner__car__card" id${id}>
            <div class="conteiner__car__card-img">
                <img src="${urlImages}" alt="${name}">
            </div>
            <div class="conteiner__car__card-info">
                <h3>${name}</h3>
                <p>Price:${price}</p>
                <p>Stock:${stock}</p> 
            </div>
            <div class="conteiner__nav__car__card-btns" id="${id}">
                <i class='bx bxs-plus-circle' ></i></i> <span id="amount">${amount}</span> <i class='bx bxs-minus-circle' ></i>
            </div>
            <div class="conteiner__nav__car__card-trash" id="${id}">
                <i class='bx bxs-trash' ></i>
            </div>
       
    </div>

        `
        sumTotal+=amount*price
        concart+= amount;
    });
    precioTotal.textContent=sumTotal;
    AmountTotal.textContent=concart

    conteinerNavCarCompra.innerHTML = html

}

//Agregando Jordan
 
conteinerStoreJordan.addEventListener("click",(e) => {
    if(e.target.classList.contains("btn__add")){
      const idJordan= +e.target.parentElement.id;
       const findJordan= dataJ.find((item)=> item.id==idJordan);
       

       if(cart[idJordan]){
            if (cart[idJordan].amount==5) {
                 return;
            }
            cart[idJordan].amount++
       }else {
        cart[idJordan]= findJordan;
        cart[idJordan].amount=1;
       }

       PrintJInCart();

    }
        
});

//Agregando Pirma

conteinerStorePirma.addEventListener("click",(e) => {
    if(e.target.classList.contains("btn__add")){
      const idPirma= +e.target.parentElement.id;
       const findPirma= dataP.find((item)=> item.id==idPirma);
       

       if(cart[idPirma]){
            if (cart[idPirma].amount==5) {
                 return;
            }
            cart[idPirma].amount++
       }else {
        cart[idPirma]= findPirma;
        cart[idPirma].amount=1;
       }

       PrintJInCart();

    }
        
});

//Agregando Fila

conteinerStoreFila.addEventListener("click",(e) => {
    if(e.target.classList.contains("btn__add")){
      const idFila= +e.target.parentElement.id;
       const findFila= dataF.find((item)=> item.id==idFila);
       

       if(cart[idFila]){
            if (cart[idFila].amount==5) {
                 return;
            }
            cart[idFila].amount++
       }else {
        cart[idFila]= findFila;
        cart[idFila].amount=1;
       }

       PrintJInCart();

    }
        
});

//Agregando Fila

conteinerStoreReebok.addEventListener("click",(e) => {
    if(e.target.classList.contains("btn__add")){
      const idReebok= +e.target.parentElement.id;
       const findReebok= dataR.find((item)=> item.id==idReebok);
       

       if(cart[idReebok]){
            if (cart[idReebok].amount==5) {
                 return;
            }
            cart[idReebok].amount++
       }else {
        cart[idReebok]= findReebok;
        cart[idReebok].amount=1;
       }

       PrintJInCart();

    }
        
});



// Contador de amount

conteinerNavCarCompra.addEventListener("click",(e)=>{

   
    if(e.target.classList.contains("bxs-plus-circle")){
        const idJordan= e.target.parentElement.id
        if (cart[idJordan].amount >= 5) {
            return;
        }else (cart[idJordan].amount++) 
    }
    if(e.target.classList.contains("bxs-minus-circle")){
        const idJordan= e.target.parentElement.id
        cart[idJordan].amount--;
        if (cart[idJordan].amount==0) {
            delete cart[idJordan]
        }
    }
    if(e.target.classList.contains("bxs-trash")){
        const idJordan= e.target.parentElement.id;
        delete cart[idJordan]
    }

    const Total=amount+1;
    console.log(Total);






    PrintJInCart();

    
})




