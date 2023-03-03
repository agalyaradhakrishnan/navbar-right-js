const  a=document.querySelector('.menu i');
const  b=document.querySelector('ul');

a.addEventListener('click',()=>{
    b.classList.toggle('slide');
    a.classList.toggle('fa-times');

});