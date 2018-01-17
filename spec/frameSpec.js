describe("Frame", function() {
	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	it("should return the number of pins down at the first roll", function(){
		numberPinsDown([5]);
		expect(frame.addTotalFramePoints()).toEqual(5);
	});

	it("should return the total points after 2 rolls", function(){
		numberPinsDown([5,3]);
		expect(frame.addTotalFramePoints()).toEqual(8);
	});

	var numberPinsDown = function(pinsDown) {
		for(var i = 0; i < pinsDown.length; i++) {
			frame.appendNumberPinsDown(pinsDown[i]);
		}
	};
});


// $("#buttons").on("click", function(){
// 	// console.log("testing", clickButton(1))
// 	displayRoll($("#buttons button:eq(2)").html(5))
// });

// function clickButton() {
// 	// for(var i = 0; i < 11; i++) {
// 		$("#buttons button:eq(1)").html(1)
// 	// }
// }

// beforeEach(function(){
// 	scoreSheet = new ScoreSheet();
// });
//
// describe("Scoring results", function(){
// 	it("should add the result of a frame to the scoreSheet", function(){
// 		frameRoll([5,0]);
// 		expect(scoreSheet.frames[0].roll).toEqual([5,0]);
// 	});

// console.log("test")
// console.log(frameRoll([4,2]))
// console.log(scoreSheet.frames[0])
//

	// var frameRoll = function(pinsDown) {
	// 	var frame = new Frame();
	// 	for(var i = 0; i < pinsDown.length; i++) {
	// 		frame.appendNumberPinsDown(pinsDown[i]);
	// 	}
	// 	scoreSheet.addNewFrame(frame);
	// };
