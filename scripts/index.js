document.addEventListener('DOMContentLoaded', function(e) {
    var form = document.getElementsByTagName('form')[0],
        title = document.getElementsByClassName('title')[0],
        logo = document.getElementsByClassName('logo')[0];
    setTimeout(() => {
        title.classList.add('show');
        setTimeout(() => {
            form.classList.add('show');
            jediSide.classList.add('scale');
            darkSide.classList.add('scale');
        }, 1000);
    }, 11000);

    var soundJedi = document.getElementById('sound-jedi'),
        jediSide = document.getElementsByClassName('light')[0];

    jediSide.addEventListener('click', function() {
        soundJedi.play();
    })
    var soundDark = document.getElementById('sound-dark'),
        darkSide = document.getElementsByClassName('dark')[0];
    darkSide.addEventListener('click', function() {
        soundDark.play();
    })


})