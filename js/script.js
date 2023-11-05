const menuNav = document.querySelectorAll('.linksSection a');
const btnTelefono = document.getElementById('menu_telefono');
const desplegableLinks= document.querySelector('.desplegableLinks');

btnTelefono.addEventListener("click",function(event){
    event.stopPropagation()
    desplegableLinks.classList.toggle('show');
});
document.addEventListener('click', function(event){
    if(!desplegableLinks.contains(event.target) && desplegableLinks.classList.contains('show')){
        desplegableLinks.classList.remove('show');
    }
});
menuNav.forEach(posado =>{
    posado.addEventListener('click', function(event){
        menuNav.forEach(posado => posado.classList.remove('active'));
        this.classList.add('active');
    })
});

const typed = new Typed('.typed', {
    strings: [
        'Estudiante', 
        'Calistenico',
        'Autodidacta'
    ],
    typeSpeed: 70,
    backSpeed: 75,
    startDelay: 250,
    shuffle: false,
    backDelay: 1300,
    loop: true,
    loopCount: false,
    contentType: 'html'
});


