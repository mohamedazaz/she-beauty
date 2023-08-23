console.log('filter is working')
// filter 
let list = document.getElementById('list');
let filter =document.querySelector('.filter');

let count = document.getElementById('count');
let listProducts = [
  {
    id: 1,
    name:"isana caffeine shampo",
    price:400,
    image:'img/62405dc8-d41b-4320-8192-0ddc4db2fb3f.jpeg'
   

  },
  {
    id: 2,
    name:"gliss kur 75 ml",
    price:300,
    image:'img/87e8e0f2-3f42-4a67-b62b-47b491ccf6fe.jpeg'
   
  },
  {
    id: 3,
    name:"tonikum coffein",
    price:350,
    image:'img/8c12b066-9cf1-4fd5-99be-91c0c8882e5d.jpeg'
    

  },
  {
    id: 4,
    name:"isana shampoo & conditioner argan oil",
    price:200,
    image:'img/92b9f4a3-5bba-4660-acf3-d645e2598ddb.jpeg'
  },
  {
    id: 5,
    name:"cosrx all in one cream 100g",
    price:150,
    image:'img/aa305eac-c3ea-4c48-be88-491813701695.jpeg'
  },
  {
    id: 6,
    name:"cerave resurfacing retinol serum",
    price:100,
    image:'img/cd3e7f84-b000-436c-997b-b9e7988600f1.jpeg'
  },
  {
    id: 7,
    name:" cosre advanced snail 96 mucin power essence",
    price:125,
    image:'img/9ee82ea3-0335-4f72-aafe-2c7335d66811.jpeg'
  },
  {
    id: 8,
    name:" kopfhaut tonic lovely long 75 ml",
    price:200,
    image:'img/df1f2e58-70b8-49e6-aa4a-0b0531d89c23.jpeg'
  },
  {
    id: 9,
    name:" THE ORDINARY. Niacinamide 10% + Zinc 1%l",
    price:200,
    image:'img/365667282_121926120993219_1766504274888697779_n.jpg'
  },
  {
    id: 10,
    name:" gliss",
    price:450,
    image:'img/366073978_122528190933012_3364666768985968478_n.jpg'
  },
  {
    id: 11,
    name:"balea vitmin c",
    price:500,
    image:'img/366688533_118753874643777_5312286208643292119_n.jpg'
  },
  {
    id: 12,
    name:"alverde Gesichts Öl",
    price:250,
    image:'img/367395318_120076664511498_4730736378199323855_n.jpg'
  },
  {
    id: 13,
    name:"Cosrx Acne Pimple Master Patch",
    price:50,
    image:'img/367399654_120163724502792_4341258423559713860_n.jpg'
  },
  {
    id: 14,
    name:"Pflegecreme You are elephantastic, 30 ml",
    price:80,
    image:'img/367455576_120087647843733_2215576308745252627_n.jpg'
  },
  {
    id: 15,
    name:"The Ordinary Glycolic Acid 7% Toning Solution ",
    price:275,
    image:'img/367993502_121987990987032_5279510262773734835_n.jpg'
  },
  {
    id: 16,
    name:"gliss kur",
    price:300,
    image:'img/368011624_122529167599581_7353936997202900731_n.jpg'
  },
  {
    id: 17,
    name:"The Ordinary Alpha Arbutin 2%",
    price:150,
    image:'img/368014410_121385637713934_5658406392277520579_n.jpg'
  },
  {
    id: 18,
    name:"Beauty Hyaluron Eye & Lip Serum 15ml",
    price:175,
    image:'img/368039603_122528517599646_6987652596881776732_n.jpg'
  },
  {
    id: 19,
    name:"deodorant balea",
    price:200,
    image:'img/368259089_122527860933045_4868381702811862508_n.jpg'
  },
  {
    id: 20,
    name:"balea perfume 100 ml",
    price:200,
    image:'img/368268876_122524254266739_742342284598904811_n.jpg'
  },
  {
    id: 21,
    name:" Balea Hautrein Serum, 30 ml",
    price:185,
    image:'img/368273956_122526387599859_7358950607849750012_n.jpg'
  },
  {
    id: 22,
    name:" serum retinol",
    price:100,
    image:'img/368639273_123148650870966_4887666367612241967_n.jpg'
  },
  {
    id: 23,
    name:" spa gel socks",
    price:70,
    image:'img/366734529_118751874643977_9123823584110483389_n.jpg'
  },
  {
    id: 24,
    name:"Trend it up Coco Loco Caring Nail Oil",
    price:120,
    image:'img/367459238_120094977843000_847449393835022774_n.jpg'
  },
];

let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML="";
    productFilter.forEach(card=>{
        // create new card
        let newCard=document.createElement('div');
        newCard.classList.add('card');
        // create card header
        let cardHeader=document.createElement('div');
        cardHeader.classList.add('card-header');
        newCard.appendChild(cardHeader);
        // create card body
        let cardBody=document.createElement('div');
        cardBody.classList.add('card-body');
        newCard.appendChild(cardBody); 
        // create new image
        let newImage = new Image();
        newImage.classList.add('card-img');
        newImage.src = card.image;
        cardHeader.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('h3');
        newTitle.classList.add('card-local');
        newTitle.innerText = card.name;
        cardBody.appendChild(newTitle);
        // create price 
        let newPrice =document.createElement('p');
        newPrice.classList.add('card-text');
        newPrice.innerText = card.price.toLocaleString() +" LE";
        cardBody.appendChild(newPrice);
        // create button
        let newButton =document.createElement('a')
        newButton.innerText="add to card";
        newCard.appendChild(newButton);


        list.appendChild(newCard);
    })

}
filter.addEventListener('submit',function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(card =>{
        if(valueFilter.name.value != ""){
            if(!card.name.includes(valueFilter.name.value)){
                return false
            }
        }
        // check price
        if(valueFilter.minPrice.value != ""){
            if(card.price < valueFilter.minPrice.value){
                return false
            }
        }
        if(valueFilter.maxPrice.value != ""){
            if(card.price > valueFilter.maxPrice.value){
                return false
            }
        }
        return true;
    })
    showProduct(productFilter);
})
