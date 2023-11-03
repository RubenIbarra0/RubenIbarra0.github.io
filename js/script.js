let menuNav = document.querySelectorAll('.linksSection a');

const typed = new Typed('.typed', {
    strings: [
        'Frontend Developer', 
        'Calistenico',
        'Estudiante'
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


