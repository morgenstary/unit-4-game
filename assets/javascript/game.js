// Crystal Collector
// Start Game
// Setup Variables
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var magicNumber; 
    var crystal1Value;
    var crystal2Value;
    var crystal3Value;
    var crystal4Value;
    var totalScore = 0;
    // Generate random numbers for crystals and magic number
    function randomGen(min, max) {
        var rand = Math.floor(Math.random() * max + min);
        return rand;
    }

    function getNewNumbers() {
        var output = {
            magicNumber: randomGen(1, 120),
            crystal1Value: randomGen(1, 12),
            crystal2Value: randomGen(1, 12),
            crystal3Value: randomGen(1, 12),
            crystal4Value: randomGen(1, 12)
        }
        return output;
    }

    function start() {
        reset();
    }
    start();

    // Render to the page
    function updateDisplay() {
        $('#magicNumber').text(magicNumber);
        $('#crystal1').attr("data-value", crystal1Value);
        $('#crystal2').attr("data-value", crystal2Value);
        $('#crystal3').attr("data-value", crystal3Value);
        $('#crystal4').attr("data-value", crystal4Value);
        $('#totalScore').text(totalScore);
        $('#wins').text(wins);
        $('#losses').text(losses);

        // console.log($('#magicNumber').text());

        console.log($('#losses').text());
       
    }



    //Capture user input
    $('.crystal').on('click', function () {
        var value = parseInt($(this).attr("data-value"));
        totalScore = totalScore + value;
        //Increment Scores
        $('#totalScore').text(totalScore);

        if (totalScore === magicNumber) {
			youWin();
		} else if (totalScore > magicNumber) {
            youLose();
            start();
        }
        
        // console.log(totalScore);
    });


    // Button hover feature
    $(".crystal").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});
    
    

    //Check for win/loss

    function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		
	}
    


    //Reset the gamee
    function reset() {
        
        var numbers = getNewNumbers();
        magicNumber = numbers.magicNumber;
        crystal1Value = numbers.crystal1Value;
        crystal2Value = numbers.crystal2Value;
        crystal3Value = numbers.crystal3Value;
        crystal4Value = numbers.crystal4Value;
        totalScore = 0;
        
        updateDisplay();
        
        // console.log("MagicNumber is: " + magicNumber);
        // console.log("Crystal 1 is: " + crystal1Value);
        // console.log("Crystal 2 is: " + crystal2Value);
        // console.log("Crystal 3 is: " + crystal3Value);
        // console.log("Crystal 4 is: " + crystal4Value);
    }


     //Reset the gamee
     function resetScore() {
        
        var numbers = getNewNumbers();
        magicNumber = numbers.magicNumber;
        crystal1Value = numbers.crystal1Value;
        crystal2Value = numbers.crystal2Value;
        crystal3Value = numbers.crystal3Value;
        crystal4Value = numbers.crystal4Value;
        totalScore = 0;
        wins = 0;
        losses = 0;
        
        updateDisplay();
        
        // console.log("MagicNumber is: " + magicNumber);
        // console.log("Crystal 1 is: " + crystal1Value);
        // console.log("Crystal 2 is: " + crystal2Value);
        // console.log("Crystal 3 is: " + crystal3Value);
        // console.log("Crystal 4 is: " + crystal4Value);
    }
   


    
        


    $(".btn").on("click", function() {
        
		resetScore();
	});
    

})
