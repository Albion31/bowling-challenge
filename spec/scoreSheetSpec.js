var test=0

describe("ScoreSheet", function(){
	var scoreSheet;

	beforeEach(function(){
		scoreSheet = new ScoreSheet();
	});

	it("should add the result of a frame to the scoreSheet", function(){
		frameRoll([5,0]);
		expect(scoreSheet.frames[0].roll).toEqual([5,0]);
	});

	it("should log the result of the 2nd frame to the scoreSheet", function(){
		frameRoll([0,5]);
		frameRoll([4,3]);
		expect(scoreSheet.frames[0].roll).toEqual([0,5]);
		expect(scoreSheet.frames[1].roll).toEqual([4,3]);
	});

	it("should log the result of a strike on its own on the scoreSheet", function(){
		frameRoll([10]);
		frameRoll([4,3]);
		expect(scoreSheet.frames[0].roll).toEqual([10]);
		expect(scoreSheet.frames[1].roll).toEqual([4,3]);
	});

	it("should add the result of a frame with the added score for the frame", function(){
		frameRoll([5,0]);
		expect(scoreSheet.frames[0].addTotalFramePoints()).toEqual(5);
	});



	var frameRoll = function(pinsDown) {
		var testFrame = new Frame();
		for(var i = 0; i < pinsDown.length; i++) {
			testFrame.appendNumberPinsDown(pinsDown[i]);
		}
		scoreSheet.addNewFrame(testFrame);
	};
});
