var metronome = new Metronome();
var tempo = document.getElementById('tempo');
tempo.textContent = metronome.tempo;

var Lancer = document.getElementById('Lancer');


Lancer.addEventListener('click', function() {
    metronome.startStop();

    if (metronome.isRunning) {
        Lancer.innerText = 'Arreter';
    }
    else {
        Lancer.innerText =  'Lancer';
    }

});
