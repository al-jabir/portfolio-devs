let menu = document.querySelector('#menu');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times' );
    nav.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times' );
    nav.classList.remove('active');
}