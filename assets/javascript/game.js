// Initialise page

$(document).ready(function () {

    var magicNumber;
    var totalScore = 0;
    $("#totalScore").html(totalScore);
    var wins = 0;
    $("#wins").html(wins);
    var losses = 0;
    $("#losses").html(losses);
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);

    var magicNumber = Math.floor(Math.random() * 119 + 1);
    $("#magicNumber").html(magicNumber);


    
    
    
    $("#crystal1").on("click", function () {
        $("#crystal1").attr("crystalvalue", crystal1);
        $("#totalScore").text(totalScore += crystal1);
      
        
        // console.log(crystal1);
    })

    $("#crystal2").on("click", function () {
        $("#crysta21").attr("crystalvalue", crystal2);
        $("#totalScore").text(totalScore += crystal2);
        
        // console.log(crystal2);
    })

    $("#crystal3").on("click", function () {
        $("#crystal3").attr("crystalvalue", crystal3);
        $("#totalScore").text(totalScore += crystal3);
        
        // console.log(crystal3);
    })

    $("#crystal4").on("click", function () {
        $("#crystal4").attr("crystalvalue", crystal4);
        $("#totalScore").text(totalScore += crystal4);
        
        // console.log(crystal4);
    })

    

    function logic() {
        if (totalScore === magicNumber) {
            alert("win");
        } else if (totalScore > magicNumber) {
           alert("lose"); 
        }
    }


    console.log(magicNumber);
    console.log(totalScore);

});







