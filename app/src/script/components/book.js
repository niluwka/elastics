try {
       let botToken = '1572870805:AAHUc6vOrWzByKZjlW7iI_O4mQuWqqd4ex8',
       botid = '-542072362';

    const btn = document.querySelector('.btn__bot'),        
          freeInput = [...document.querySelectorAll('.book__form-item input')];
         
       
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let file = {
            'дата': `${freeInput[0].value}`,
            'время': `${freeInput[1].value}`,
            'адрес': `${freeInput[2].value}`,
            'имя': `${freeInput[3].value}`,
            'номер': `${freeInput[4].value}`,
            'почта': `${freeInput[5].value}`
            
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
