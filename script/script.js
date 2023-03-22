window.onscroll = () => scrollHeader();

const scrollHeader = () =>{
    if(document.documentElement.scrollTop>100 || document.body.scrollTop > 100){
        document.querySelector('header').classList.add('header-fixed')
    }else{
        document.querySelector('header').classList.remove('header-fixed')
    }
}

// catalog

const data = {
    burgers: [
        {
            name: 'super burger',
            img: '../images/poloOne.png',
            price:100
        },
        {
            name: 'pro burger',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
            price:150
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price:180
        },
    ],
    pizzas: [
        {
            name: 'italian pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
            price:300
        },
        {
            name: 'meat pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
            price:400
        },

    ],
    drinks: [
        {
            name: 'pivo',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
            price:500
        },
        {
            name: 'vino',
            img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
            price:1000
        },
        {
            name: 'vodka',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
            price:2000
        },
        {
            name: 'tequila',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
            price:3000
        },
    ]
}

const burgers = data.burgers
const pizzas = data.pizzas
const drinks = data.drinks
const all = [...burgers,...pizzas,...drinks]

const categories = (data) =>{
    console.log(data);
    const output = document.querySelector('.output')
    output.innerHTML=''
    data.forEach(el=>{
        const col = document.createElement('div')
        const box = document.createElement('div')
        const img = document.createElement('img')
        const name = document.createElement('p')
        const price = document.createElement('p')

        col.className='col-4'
        box.className='categories__box'
        name.className = 'name__item'

        img.src=el.img
        name.textContent=el.name
        price.textContent=`${el.price}₽`


        box.append(img,name,price)
        col.append(box)
        output.append(col)
    })
}
categories(all)

const categoryChoise = [
    {
        title:'all',
        data:all
    },
    {
        title:'burgers',
        data:burgers
    },
    {
        title:'pizzas',
        data:pizzas
    },
    {
        title:'drinks',
        data:drinks
    }
]

const clickOnButtonRenderCategory = () =>{
   const categoryOutput = document.querySelector('.category__choose')
    categoryChoise.forEach(el=>{
        console.log(el);
        const button = document.createElement('button')
        button.className='btn'
         button.textContent=el.title
         button.addEventListener('click',()=>{
            categories(el.data)
         })

    categoryOutput.append(button)
   })
}
clickOnButtonRenderCategory()