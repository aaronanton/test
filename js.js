//prompt('GO! GO! GO!')
var saludoId = document.getElementById('saludo');
saludoId.innerHTML = 'Hola Soy el primer titulo';

var userId = document.querySelector('#nickname'),
    addrId = document.querySelector('#address'),
    eShoId = document.querySelector('#eShop'),
    listId = document.querySelector('#listItems'),
    btnId  = document.getElementById('btn');

btnId.addEventListener('click',getObj);

function getObj(){
    fetch('https://api.mercadolibre.com/users/34238/')
    .then(res => res.json())
    .then(user => {
        console.log(user)
        fillPage(user)
    });
    fetch('https://api.mercadolibre.com/sites/MLV/search?nickname=AARONANTONB')
    .then(res => res.json())
    .then(items => {
        console.log(items)
        for (let i of items.results){
            console.log(i.title)
            listId.innerHTML += ` <img src="${i.thumbnail}" width="100p">  <li>${i.title}</li> `
        }
    });
}
var fillPage = user => {
    userId.innerHTML += `  ${user.nickname}  `
    addrId.innerHTML += `  ${user.address.city}  ${user.address.state}  `
    eShoId.innerHTML += `  ${user.permalink}  `
    
}
//function fillPage(user)