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
    norma: [
        {
            name: 'super burger',
            img: '../images/poloOne.png',
            price:100
        },
        {
            name: 'pro burger',
            img: './images/photo_2023-03-24_20-27-05.jpg',
            price:150
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price:180
        },
    ],
    batal: [
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
    brend: [
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
    ],
    sportCost: [
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

const norma = data.norma
const batal = data.batal
const brend = data.brend
const sportCost = data.sportCost
const all = [...norma,...batal,...brend,...sportCost]

const categories = (data) =>{
    console.log(data);
    const output = document.querySelector('.output')
    output.innerHTML=''
    data.forEach(el=>{
        const col = document.createElement('div')
        const box = document.createElement('div')
        const img = document.createElement('img')
        const name = document.createElement('p')
        // const price = document.createElement('p')

        col.className='col-4'
        box.className='categories__box'
        name.className = 'name__item'

        img.src=el.img
        name.textContent=el.name
        // price.textContent=`${el.price}₽`


        box.append(img,name)
        col.append(box)
        output.append(col)
    })
}
categories(all)

const categoryChoise = [
    {
        title:'Все',
        data:all
    },
    {
        title:'Норма',
        data:norma
    },
    {
        title:'Батал',
        data:batal
    },
    {
        title:'Бренд',
        data:brend
    },
    {
        title:'Спорт.кост',
        data:sportCost

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
