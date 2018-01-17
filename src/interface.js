$(document).ready(function() {

	var scoreSheet = new ScoreSheet();
	var counter = 0

	for(var i = 0; i < 11; i++) {
		clickButton(i);
	}

	function displayRoll(rollDisplay) {
		var frameId = $("[data-frame-id=" + counter + "]")
		frameId.html(rollDisplay);
	}

	function incrementFrame(){
		return counter += 1
	}

	function clickButton(i) {
		$("#bt" + i).on("click", function(){
			$("#buttons button:eq(i)").html(i);
			displayRoll(i);
			incrementFrame();
		});
	}
});
