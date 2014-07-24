$(document).ready(function(){

    // loop through all triggers, grab the note attribute and map into a array
    sounds = $('.trigger').map(function(){
        return $(this).data('note')
    })

    //loads in sounds to ionsound
    $.ionSound({
        sounds: sounds,
        path: "sounds_64/",
        multiPlay: true,
        volume: "1.0"
    });
    //attaches sounds to triggers
    $(".trigger").mouseenter(function(){
        $.ionSound.play($(this).data('note'));
    });

    (function(){
        var context = new AudioContext();
        var audioElement = $('audio')[0];

        audioElement.addEventListener('play', function(){
            var source = context.createMediaElementSource(audioElement);

            var delay = context.createDelay();
            delay.delayTime.value = 0.5;

            var feedback = context.createGain();
            feedback.gain.value = 0.8;

            var filter = context.createBiquadFilter();
            filter.frequency.value = 1500;

            delay.connect(feedback);
            feedback.connect(filter);
            filter.connect(delay);

            source.connect(delay);
            source.connect(context.destination);
            filter.connect(context.destination);
        });
    })();

});