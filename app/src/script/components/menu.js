try{
  const menu = $('.nav__list'),
      menuBtn =$('.header__btn')
      
menuBtn.addEventListener('click', () => {
    menu.classList.add('active')
})
document.addEventListener('click', e => {
    if (menu.classList.contains('active')
     &&  e.target != menu 
     && e.target  != menuBtn
     && e.target.className != 'nav__list-link'
    ) menu.classList.remove('active')
    
})  
} catch(e){
    console.log(e);
}
