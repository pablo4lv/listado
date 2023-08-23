let item = document.getElementById("item");
let btn = document.getElementById("agregar");
let limp = document.getElementById("limpiar");
let list = document.getElementById("contenedor");
let array = []

btn.addEventListener("click",() => {
    if (item.value){
        array.push(item.value)
        localStorage.setItem("array",JSON.stringify(array));
        mostrar()
    }
})

limp.addEventListener("click",() => {
    list.innerHTML = "";
    localStorage.removeItem("array");
    array = [];
})

function mostrar(){
    let a = JSON.parse(localStorage.getItem("array"))
    list.innerHTML = "";
    a.forEach(element => {
        list.innerHTML += `
        <li>${element}<li/>
    `
    });
    item.value = "";
}

document.addEventListener("DOMContentLoaded",mostrar())