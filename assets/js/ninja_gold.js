$(document).ready(function () {

	// Basepath for links will either be "https://www.travterrell.com/ninjagold" or "http://localhost:8888/ (<-localhost port address may change)"
	var basePath = "http://localhost:8888/";

	// This adds a date string to each image to make sure that the images are not cached to keep loading fade animation consistent
	$('img').each(function(){
      var date = new Date;
      // add the current unix timestamp in microseconds to the the image src as a query string
      this.src = this.src + '?' + date.getTime();
   	});

    $('#ninja_gold_title').bind('load', function(){ // image ready
    	// alert("Image loaded");
    	$("#fadebg").css({"opacity": "0"});
		setTimeout(function(){ 
			$("#fadebg").css({"z-index": "-1"});
		}, 300);
    });

	function updateActivityMessage() {
		$.ajax({
    		url: basePath + "/ninjas/activity", 
    		success: function(result){
	        	$("#activities").html(result);
	    	}
		});
	}

	function updateActivityClass() {
		$.ajax({
    		url: basePath + "/ninjas/activity_class", 
    		success: function(result){
	        	$('#activities').removeClass();
				$('#activities').addClass(result);
	    	}
		});
	}
	
	$("#farm").click(function(){
    	
    	$.ajax({
    		url: basePath + "/ninjas/farm", 
    		success: function(result){
	        	updateActivityClass();
				updateActivityMessage();
	        	$("#gold").html("Gold: " + result);
	        	playGoldFX();
	    	}
		});

	});

	$("#cave").click(function(){
    	
    	$.ajax({
    		url: basePath + "/ninjas/cave", 
    		success: function(result){
	        	updateActivityClass();
				updateActivityMessage();
	        	$("#gold").html("Gold: " + result);
	        	playGoldFX();
	    	}
		});

	});

	$("#house").click(function(){
    	
    	$.ajax({
    		url: basePath + "/ninjas/house", 
    		success: function(result){
    			updateActivityClass();
				updateActivityMessage();
	        	$("#gold").html("Gold: " + result);
	        	playGoldFX();
	    	}
		});
		
	});

	$("#casino").click(function(){
    	
    	$.ajax({
    		url: basePath + "/ninjas/casino", 
    		success: function(result){
    			var goldH1 = document.querySelector("#gold").textContent;
    			var previousGold = Number(goldH1.substring(6, (goldH1.length)));
    			// alert(previousGold);
    			// alert(result);
    			updateActivityClass();
				updateActivityMessage();
	        	$("#gold").html("Gold: " + result);
	        	if (previousGold < result) {
	        		playGoldFX();
	        	} else {
	        		playSwipeFX();
	        	}
	    	}
		});

	});

	var music = document.getElementById("music");
	var playing = true;
	// music.pause();
	$("#music_button").click(function(){
		if (playing == true) {
			music.pause();
			playing = false;
			music.currentTime = 0;
			$("#music_button").html("Play Music");
		} else {
			music.play();
			playing = true;
			$("#music_button").html("Stop Music");
		}
	});

	fx_on = true;
	function toggleFX() {
		if (fx_on == true) {
			fx_on = false;
			$("#fx_button").html("Start FX");
		} else {
			fx_on = true;
			$("#fx_button").html("Stop FX");
		}
	}

	// Workaround when music doesn't autoplay on mobile. Sets music button to 'Play Music' and hides fx button.
	setTimeout(function(){
		if (music.paused == true) {
			playing = false;
			music.currentTime = 0;
			$("#music_button").html("Play Music");
			toggleFX();
			$("#fx_button").hide();
		}
	}, 500);

	$("#fx_button").click(function(){
		toggleFX();
	});

	var goldFX = document.getElementById("gold_fx");
	function playGoldFX() {
		if (fx_on == true) {
			goldFX.play();
		}
	}

	var swipeFX = document.getElementById("swipe_fx");
	function playSwipeFX() {
		if (fx_on == true) {
			swipeFX.play();
		}
	}

});