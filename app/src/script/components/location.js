try {
  let currentLocation = location.href;
  let menuItem = document.querySelectorAll('.nav__list-link') ;
  
  
  for (let i = 0; i < menuItem.length; i++) {
     
     if (menuItem[i].href === currentLocation) {
       
            menuItem[i].classList.add('active')
        
     }      
  }
} catch (e) {
    console.log(e);
}