let navUl = document.querySelector('.nav-ul');
let navMenuBtn= document.querySelector('.nav-menu-btn');

navMenuBtn.addEventListener('click',()=>{
    navUl.classList.toggle('showData');
})
