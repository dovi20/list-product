
let iphones = [{
    name : 'iphonex',
    id : 001,
    stock : 7,
    price : 1800,
    add: addQuantity,
    remove: removeQuantity,
},
{
    name : 'iphone11',
    id : 002,
    stock : 5,
    price : 2000,
    add: addQuantity,
    remove: removeQuantity,
},
{
    name : 'iphone12',
    id : 003,
    stock : 9,
    price : 2500,
    add: addQuantity,
    remove: removeQuantity,
},
{
    name : 'iphone13',
    id : 004,
    stock : 2,
    price : 3000,
    add: addQuantity,
    remove: removeQuantity,
},
{
    name : 'iphone14',
    id : 004,
    stock : 2,
    price : 3000,
    add: addQuantity,
    remove: removeQuantity,
}]
let check = true;
function removeQuantity (){
    if(this.stock > 0){
        check = true
        this.stock-=1;
    }else{
        check = false
    }
}

function addQuantity (){
    this.stock+=1
}
let list = document.getElementById('list')
let cart = document.getElementById('cart')
for (i of iphones){
    let newLi = document.createElement('li');
    list.appendChild(newLi)
    newLi.className = i.name
    newLi.innerText = `name: ${i.name} | price: ${i.price}`
    newLi.onclick = click
}

function click(e) {
    search = e.target.classList; 
    let find = searchByName(search)
    find.remove()
    if (check) {
        addToCart(e)
    }else{
        alert('finish')
    }
}
function addToCart(e) {
    let newLi = document.createElement('li');
    cart.appendChild(newLi)
    newLi.classList.add()
    newLi.innerText = e.target.innerText
    newLi.ondblclick = dbClick
}
function dbClick() {
    alert()
    
}
function searchByName(word) {
    return iphones.find((v)=> (v.name.includes(word))) 
}