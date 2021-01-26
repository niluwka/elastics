try {
    let botToken = '1572870805:AAHUc6vOrWzByKZjlW7iI_O4mQuWqqd4ex8',
    botid = '576592925';

 const btnContact = document.querySelector('.form__button'),        
       freeInput = [...document.querySelectorAll('.form__item .contact-bot')];
      
    
       btnContact.addEventListener('click', (e) => {
     e.preventDefault();
     let file = {
         'Имя': `${freeInput[0].value}`,
         'Адрес': `${freeInput[1].value}`,
         'Сообщение': `${freeInput[2].value}`
         
       };
       let txt = '';
       for (const it of Object.entries(file)) {
         txt += `\n${it[0]}: ${it[1]}\n%0A`;
       }
       
        
          fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${botid}&parse_mode=html&text=${txt}`,{
           method: 'POST'
           }) 
     
        setTimeout(() => {
     for (let i = 0; i < freeInput.length; i++) {
         freeInput[i].value = '';
        
     }
 }, 3000);
 })

} catch (e) {
 console.log(e);
} 