let menuNav = document.querySelectorAll('.linksSection a');

const btnTelefono = document.getElementById('menu_telefono');
const linksSection= document.querySelector('.linksSection');


btnTelefono.addEventListener("click",()=>{
    linksSection.classList.toggle("show");
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

menuNav.forEach(posado =>{
    posado.addEventListener('click', function(event){
        menuNav.forEach(posado => posado.classList.remove('active'));
        this.classList.add('active');
    })
})


