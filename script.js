const a=document.querySelector('.barmenu i');
const b=document.querySelector('.navlinks');
a.addEventListener('click',()=>{
    a.classList.toggle('fa-xmark')
    b.classList.toggle('showmenu')
});