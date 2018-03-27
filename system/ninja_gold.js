$(document).ready(function () {

	// alert("ninja_gold.js working!");

	function updateActivityMessage() {
		$.ajax({
    		url: "http://34.208.174.131/Ninjas/activity", 
    		success: function(result){
	        	$("#activities").html(result);
	    	}
		});
	}

	function updateActivityClass() {
		$.ajax({
    		url: "http://34.208.174.131/Ninjas/activity_class", 
    		success: function(result){
	        	$('#activities').removeClass();
				$('#activities').addClass(result);
	    	}
		});
	}
	
	$("#farm").click(function(){
    	
    	$.ajax({
    		url: "http://34.208.174.131/farm", 
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
    		url: "http://34.208.174.131/Ninjas/cave", 
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
    		url: "http://34.208.174.131/Ninjas/house", 
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
    		url: "http://34.208.174.131/Ninjas/casino", 
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