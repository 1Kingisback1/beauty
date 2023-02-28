let listAdress = document.querySelector("#list__container-adress");
listAdress.addEventListener('click', function (event) {
    let item = document.querySelector("#list__item-adress");
    item.classList.toggle("active");
});
let listNumber = document.querySelector("#list__container-number");
listNumber.addEventListener('click', function (event) {
    let item = document.querySelector("#list__item-number");
    item.classList.toggle("active");
});