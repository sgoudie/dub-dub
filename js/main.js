$(document).ready(function(){
    //loads in sounds to ionsound
    $.ionSound({
        sounds: [
            "1Asharp",
            "2C",
            "3D",
            "4Dsharp",
            "5F",
            "6G",
            "7A",
            "8Bflat",
            "9Csharp",
            "10D",

        ],
        path: "sounds/",
        multiPlay: true,
        volume: "1.0"
    });
    //attaches sounds to triggers
    $("#note1").mouseenter(function(){
        $.ionSound.play("1Asharp");
    });

    $("#note2").mouseenter(function(){
        $.ionSound.play("2C");
    });

    $("#note3").mouseenter(function(){
        $.ionSound.play("3D");
    });

    $("#note4").mouseenter(function(){
        $.ionSound.play("4Dsharp");
    });

    $("#note5").mouseenter(function(){
        $.ionSound.play("5F");
    });

    $("#note6").mouseenter(function(){
        $.ionSound.play("6G");
    });

    $("#note7").mouseenter(function(){
        $.ionSound.play("7A");
    });

    $("#note8").mouseenter(function(){
        $.ionSound.play("8Bflat");
    });

    $("#note9").mouseenter(function(){
        $.ionSound.play("9Csharp");
    });

    $("#note10").mouseenter(function(){
        $.ionSound.play("10D");
    });
});