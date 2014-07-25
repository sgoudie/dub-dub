context = new webkitAudioContext();

var delaySwitch = 0; //0=off, 1=on

var delayLength = 0.5;
var delayFeedback = 0.8;
var delayResonance = 2000;

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

        var hookup = function (noteSource){
            if(delaySwitch == 1){
            var delay = context.createDelay();
            delay.delayTime.value = delayLength;
            var feedback = context.createGain();
            feedback.gain.value = delayFeedback;
            var filter = context.createBiquadFilter();
            filter.frequency.value = delayResonance;
            delay.connect(feedback);
            feedback.connect(filter);
            filter.connect(delay);
            noteSource.connect(delay);
            noteSource.connect(context.destination);
            filter.connect(context.destination); 
            }else{
                noteSource.connect(context.destination);
            }  
        }

        $("#delayToggle").click(function(){
            if(delaySwitch == 0){
                delaySwitch = 1;
                $("#delayToggle").html("On");
                $("#delayToggle").addClass("selected");
            }else{
                delaySwitch = 0;
                $("#delayToggle").html("Off");
                $("#delayToggle").removeClass("selected");
            }
        });



        $("#timeCtrl").change(function(){
           delayLength = this.value;
           console.log('Delay Time: ' + delayLength);
        });

        $("#resCtrl").change(function(){
           delayResonance = this.value;
           console.log('Resonance: ' + delayResonance);
        });

        $("#feedbackCtrl").change(function(){
           delayFeedback = this.value;
           console.log('Feedback: ' + delayFeedback);
        });    




    	$("#note1").mouseenter(function(){
            var note1 = context.createBufferSource();
            note1.buffer = (buffers.note1);
    		hookup(note1);
            note1.start(0);
		});

		$("#note2").mouseenter(function(){
            var note2 = context.createBufferSource();
            note2.buffer = (buffers.note2);
            hookup(note2);
            note2.start(0);
		});

		$("#note3").mouseenter(function(){
            var note3 = context.createBufferSource();
            note3.buffer = (buffers.note3);
            hookup(note3);
            note3.start(0);
		});

		$("#note4").mouseenter(function(){
            var note4 = context.createBufferSource();
            note4.buffer = (buffers.note4);
            hookup(note4);
            note4.start(0);
		});

		$("#note5").mouseenter(function(){
            var note5 = context.createBufferSource();
            note5.buffer = (buffers.note5);
            hookup(note5);
            note5.start(0);
		});

		$("#note6").mouseenter(function(){
    		var note6 = context.createBufferSource();
    		note6.buffer = (buffers.note6);
    		hookup(note6);
    		note6.start(0);
		});

		$("#note7").mouseenter(function(){
    		var note7 = context.createBufferSource();
    		note7.buffer = (buffers.note7);
    		hookup(note7);
    		note7.start(0);
		});

		$("#note8").mouseenter(function(){
    		var note8 = context.createBufferSource();
    		note8.buffer = (buffers.note8);
    		hookup(note8);
    		note8.start(0);
		});

		$("#note9").mouseenter(function(){
    		var note9 = context.createBufferSource();
    		note9.buffer = (buffers.note9);
    		hookup(note9);
    		note9.start(0);
		});

		$("#note10").mouseenter(function(){
    		var note10 = context.createBufferSource();
    		note10.buffer = (buffers.note10);
    		hookup(note10);
    		note10.start(0);
		});




		$("#perc1").mouseenter(function(){
    		var perc1 = context.createBufferSource();
    		perc1.buffer = (buffers.perc1);
    		hookup(perc1);
    		perc1.start(0);
		});

		$("#perc2").mouseenter(function(){
    		var perc2 = context.createBufferSource();
    		perc2.buffer = (buffers.perc2);
    		hookup(perc2);
    		perc2.start(0);
		});

		$("#perc3").mouseenter(function(){
    		var perc3 = context.createBufferSource();
    		perc3.buffer = (buffers.perc3);
    		hookup(perc3);
    		perc3.start(0);
		});

		$("#perc4").mouseenter(function(){
    		var perc4 = context.createBufferSource();
    		perc4.buffer = (buffers.perc4);
    		hookup(perc4);
    		perc4.start(0);
		});

		$("#perc5").mouseenter(function(){
    		var perc5 = context.createBufferSource();
    		perc5.buffer = (buffers.perc5);
    		hookup(perc5);
    		perc5.start(0);
		});

		$("#perc6").mouseenter(function(){
    		var perc6 = context.createBufferSource();
    		perc6.buffer = (buffers.perc6);
    		hookup(perc6);
    		perc6.start(0);
		});

		$("#perc7").mouseenter(function(){
    		var perc7 = context.createBufferSource();
    		perc7.buffer = (buffers.perc7);
    		hookup(perc7);
    		perc7.start(0);
		});

		$("#perc8").mouseenter(function(){
    		var perc8 = context.createBufferSource();
    		perc8.buffer = (buffers.perc8);
    		hookup(perc8);
    		perc8.start(0);
		});

		$("#perc9").mouseenter(function(){
    		var perc9 = context.createBufferSource();
    		perc9.buffer = (buffers.perc9);
    		hookup(perc9);
    		perc9.start(0);
		});

		$("#perc10").mouseenter(function(){
    		var perc10 = context.createBufferSource();
    		perc10.buffer = (buffers.perc10);
    		hookup(perc10);
    		perc10.start(0);
		});




		$("#stab1").mouseenter(function(){
    		var stab1 = context.createBufferSource();
    		stab1.buffer = (buffers.stab1);
    		hookup(stab1);
    		stab1.start(0);
		});

		$("#stab2").mouseenter(function(){
    		var stab2 = context.createBufferSource();
    		stab2.buffer = (buffers.stab2);
    		hookup(stab2);
    		stab2.start(0);
		});

		$("#stab3").mouseenter(function(){
    		var stab3 = context.createBufferSource();
    		stab3.buffer = (buffers.stab3);
    		hookup(stab3);
    		stab3.start(0);
		});

		$("#stab4").mouseenter(function(){
    		var stab4 = context.createBufferSource();
    		stab4.buffer = (buffers.stab4);
    		hookup(stab4);
    		stab4.start(0);
		});

		$("#stab5").mouseenter(function(){
    		var stab5 = context.createBufferSource();
    		stab5.buffer = (buffers.stab5);
    		hookup(stab5);
    		stab5.start(0);
		});

});

