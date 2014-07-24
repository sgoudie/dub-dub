context = new webkitAudioContext();

var assets = new AbbeyLoad( [{
     'note1': 'sounds_64/1Asharp.ogg',
     'note2': 'sounds_64/2C.ogg',
     'note3': 'sounds_64/3D.ogg',
     'note4': 'sounds_64/4Dsharp.ogg',
     'note5': 'sounds_64/5F.ogg',
     'note6': 'sounds_64/6G.ogg',
     'note7': 'sounds_64/7A.ogg',
     'note8': 'sounds_64/8Bflat.ogg',
     'note9': 'sounds_64/9Csharp.ogg',
     'note10': 'sounds_64/10D.ogg',
     'perc1': 'sounds_64/keyscrape.ogg',
     'perc2': 'sounds_64/knock1.ogg',
     'perc3': 'sounds_64/knock2.ogg',
     'perc4': 'sounds_64/scrape.ogg',
     'perc5': 'sounds_64/scuff1.ogg',
     'perc6': 'sounds_64/scuff2.ogg',
     'perc7': 'sounds_64/tap1.ogg',
     'perc8': 'sounds_64/tap2.ogg',
     'perc9': 'sounds_64/woodknock1.ogg',
     'perc10': 'sounds_64/woodknock2.ogg',
     'stab1': 'sounds_64/drop1.ogg',
     'stab2': 'sounds_64/drop2.ogg',
     'stab3': 'sounds_64/dropsmall.ogg',
     'stab4': 'sounds_64/knockhard.ogg',
     'stab5': 'sounds_64/gliss.ogg',
    }], function (buffers) {

    	$("#note1").mouseenter(function(){
    		var note1 = context.createBufferSource();
    		note1.buffer = (buffers.note1);
    		note1.connect(context.destination);
    		note1.start(0);
		});

		$("#note2").mouseenter(function(){
    		var note2 = context.createBufferSource();
    		note2.buffer = (buffers.note2);
    		note2.connect(context.destination);
    		note2.start(0);
		});

		$("#note3").mouseenter(function(){
    		var note3 = context.createBufferSource();
    		note3.buffer = (buffers.note3);
    		note3.connect(context.destination);
    		note3.start(0);
		});

		$("#note4").mouseenter(function(){
    		var note4 = context.createBufferSource();
    		note4.buffer = (buffers.note4);
    		note4.connect(context.destination);
    		note4.start(0);
		});

		$("#note5").mouseenter(function(){
    		var note5 = context.createBufferSource();
    		note5.buffer = (buffers.note5);
    		note5.connect(context.destination);
    		note5.start(0);
		});

		$("#note6").mouseenter(function(){
    		var note6 = context.createBufferSource();
    		note6.buffer = (buffers.note6);
    		note6.connect(context.destination);
    		note6.start(0);
		});

		$("#note7").mouseenter(function(){
    		var note7 = context.createBufferSource();
    		note7.buffer = (buffers.note7);
    		note7.connect(context.destination);
    		note7.start(0);
		});

		$("#note8").mouseenter(function(){
    		var note8 = context.createBufferSource();
    		note8.buffer = (buffers.note8);
    		note8.connect(context.destination);
    		note8.start(0);
		});

		$("#note9").mouseenter(function(){
    		var note9 = context.createBufferSource();
    		note9.buffer = (buffers.note9);
    		note9.connect(context.destination);
    		note9.start(0);
		});

		$("#note10").mouseenter(function(){
    		var note10 = context.createBufferSource();
    		note10.buffer = (buffers.note10);
    		note10.connect(context.destination);
    		note10.start(0);
		});




		$("#perc1").mouseenter(function(){
    		var perc1 = context.createBufferSource();
    		perc1.buffer = (buffers.perc1);
    		perc1.connect(context.destination);
    		perc1.start(0);
		});

		$("#perc2").mouseenter(function(){
    		var perc2 = context.createBufferSource();
    		perc2.buffer = (buffers.perc2);
    		perc2.connect(context.destination);
    		perc2.start(0);
		});

		$("#perc3").mouseenter(function(){
    		var perc3 = context.createBufferSource();
    		perc3.buffer = (buffers.perc3);
    		perc3.connect(context.destination);
    		perc3.start(0);
		});

		$("#perc4").mouseenter(function(){
    		var perc4 = context.createBufferSource();
    		perc4.buffer = (buffers.perc4);
    		perc4.connect(context.destination);
    		perc4.start(0);
		});

		$("#perc5").mouseenter(function(){
    		var perc5 = context.createBufferSource();
    		perc5.buffer = (buffers.perc5);
    		perc5.connect(context.destination);
    		perc5.start(0);
		});

		$("#perc6").mouseenter(function(){
    		var perc6 = context.createBufferSource();
    		perc6.buffer = (buffers.perc6);
    		perc6.connect(context.destination);
    		perc6.start(0);
		});

		$("#perc7").mouseenter(function(){
    		var perc7 = context.createBufferSource();
    		perc7.buffer = (buffers.perc7);
    		perc7.connect(context.destination);
    		perc7.start(0);
		});

		$("#perc8").mouseenter(function(){
    		var perc8 = context.createBufferSource();
    		perc8.buffer = (buffers.perc8);
    		perc8.connect(context.destination);
    		perc8.start(0);
		});

		$("#perc9").mouseenter(function(){
    		var perc9 = context.createBufferSource();
    		perc9.buffer = (buffers.perc9);
    		perc9.connect(context.destination);
    		perc9.start(0);
		});

		$("#perc10").mouseenter(function(){
    		var perc10 = context.createBufferSource();
    		perc10.buffer = (buffers.perc10);
    		perc10.connect(context.destination);
    		perc10.start(0);
		});




		$("#stab1").mouseenter(function(){
    		var stab1 = context.createBufferSource();
    		stab1.buffer = (buffers.stab1);
    		stab1.connect(context.destination);
    		stab1.start(0);
		});

		$("#stab2").mouseenter(function(){
    		var stab2 = context.createBufferSource();
    		stab2.buffer = (buffers.stab2);
    		stab2.connect(context.destination);
    		stab2.start(0);
		});

		$("#stab3").mouseenter(function(){
    		var stab3 = context.createBufferSource();
    		stab3.buffer = (buffers.stab3);
    		stab3.connect(context.destination);
    		stab3.start(0);
		});

		$("#stab4").mouseenter(function(){
    		var stab4 = context.createBufferSource();
    		stab4.buffer = (buffers.stab4);
    		stab4.connect(context.destination);
    		stab4.start(0);
		});

		$("#stab5").mouseenter(function(){
    		var stab5 = context.createBufferSource();
    		stab5.buffer = (buffers.stab5);
    		stab5.connect(context.destination);
    		stab5.start(0);
		});


		(function(){
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

