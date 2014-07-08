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

});