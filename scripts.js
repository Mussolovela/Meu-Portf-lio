
    var menunav = document.querySelector('.fexar')
    
    menunav.addEventListener('click',()=>{
      
    var navbar = document.querySelector('.navbar')
      if(navbar.style.left==='0%'){
        navbar.style.left='-100%'
        
        menunav.innerHTML='&#9776;'
        menunav.style.background='url()'
        menunav.style.backgroundColor='#160000'
      } else {
        navbar.style.left='0%'
        menunav.style.background='url(fexar.png)'
        menunav.innerHTML=''
        menunav.style.backgroundSize='cover'
        menunav.style.backgroundColor='#160000'
      }
    })
    

