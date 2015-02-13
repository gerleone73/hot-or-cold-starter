
$(document).ready(function() {

	 $(".new").click(function() {
        window.location.reload();



    });


    /*--------------- Declare variables ------------------*/
    var guessCount = 0;
    var guess;
    var num = Math.floor((Math.random() * 100) + 1);


    
    /*---------- Display information modal box -----------*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*-------------------- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });


    /*-------------------clear form  -----------------------*/
    function clearForm() {
      
        $("#userGuess").val('');
    };


    /*------------------- choose random number  ---------*/

   // console.log(num);


    /*----------------- change header  ------------------*/
    var changeHeader = function(text, color) {
     

        $("#feedback").text(text);
        $("h2").css("background", color);

    };



    /*-------------collect input  -----------------------*/
    $("#guessButton").click(function() {  // removed (e)
       // console.log(e);
       // debugger;
       // e.preventDefault();

        guess = Number($('#userGuess').val());

        if (isNaN(guess)|| guess == " " || guess > 100) {
            changeHeader("Enter a number between 1 & 100", "#FF5B50");
            clearForm();
       
        } else {

            increaseCount();
            postNum();
            compareNum();
            clearForm();
        }


    });

  



    /*-------------------post number  -----------------------*/
    function postNum() {
     

        $("#guessList").append("<li>" + guess + "</li>");
    };


    /*-------------------increase count ----------------------*/
    function increaseCount() {
        guessCount ++;
        
        $("#count").text(guessCount);
    };





    


    /*-------------------compare number ----------------------*/
    function compareNum() {

        var diff = Math.abs(guess-num);
     

    	if (guess === num) {
        changeHeader("You Guessed It!", "#FF2643");
      }else if (diff >= 50){
              changeHeader ("Ice Cold!", "#006EE8");
      }else if(diff >=30) {
              changeHeader ("Cold", "#6491E8");
      }else if(diff >=20) {
              changeHeader ("LukeWarm", "#ffcccc");
      }else if (diff >= 10) {
              changeHeader ("Warm", "#ffb2b2");
       }else if (diff = 9) {
              changeHeader ("Warmer", "#ff7f7f");
        }else if (diff = 8) {
              changeHeader ("Getting Hot", "#ff6666");
         }else if (diff = 7) {
              changeHeader ("Quite Hot", "#ff4c4c");
          }else if (diff = 6) {
              changeHeader ("Hot", "#ff3232");
           }else if (diff = 5) {
              changeHeader ("Hotter", "#ff1919");
              }else if (diff = 4) {
              changeHeader ("Hot Hot", "##e50000");
          		}else if (diff = 3) {
              changeHeader ("Hot hot hot", "#cc0000");
          }else if (diff = 2) {
              changeHeader ("Sunburn Hot", "#b20000");


      }else {
              changeHeader ("Scalding Hot!", "#990000"); 
      }; 

    }      
         
});


