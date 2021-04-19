const btn = document.getElementById('btn')
const menu = document.querySelector('#menu')

btn.addEventListener('click', () =>{
    let value = menu.classList.contains('navbar__collapse')


    // This checks if the navbar__collapse and change classes are added to 
    // the menu ul if not it should add
    if(value){
       menu.classList.remove('navbar__collapse')
       btn.classList.remove('change')
    }else{
        menu.classList.add('navbar__collapse')
        btn.classList.add('change')
    }
} )
