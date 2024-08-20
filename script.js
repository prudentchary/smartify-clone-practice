 'use strict';
document.querySelector('.openMenu').addEventListener('click', function(){
    document.querySelector('.closeMenu').style.display='flex'
    document.querySelector('.openMenu').style.display='none'
    document.querySelector('.mobileShowLink').classList.remove('d-none')
})

document.querySelector('.closeMenu').addEventListener('click', function(){
    document.querySelector('.closeMenu').style.display='none'
    document.querySelector('.openMenu').style.display='flex'
    document.querySelector('.mobileShowLink').classList.add('d-none')
})