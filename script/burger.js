const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const backdropBurger = document.querySelector('.backdrop-burger')


const handleRemove = () =>{
    nav.classList.remove('show-nav')
    burger.classList.remove('show-mobile-btn')
}


const handleToggle = () =>{
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
}


navItems.forEach(el=>{
    el.addEventListener('click',()=>{
        handleRemove()
    })
})

burger.addEventListener('click',()=>{
    handleToggle()
})

