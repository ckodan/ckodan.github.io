document.addEventListener("DOMContentLoaded", function() {
  columnOneScore();
  columnTwoScore();
  columnThreeScore();
  columnFourScore();
  columnFiveScore();
  columnSixScore();

  maxMinScoreOne();
  maxMinScoreTwo();
  maxMinScoreThree();
  maxMinScoreFour();
  maxMinScoreFive();
  maxMinScoreSix();
});


//COLUMNS
function columnOneScore() {
  var score = document.getElementById("c-one-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-one-f-one").value);
    var two = Number(document.getElementById("c-one-f-two").value);
    var three = Number(document.getElementById("c-one-f-three").value);
    var four = Number(document.getElementById("c-one-f-four").value);
    var five = Number(document.getElementById("c-one-f-five").value);
    var six = Number(document.getElementById("c-one-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

function columnTwoScore() {
  var score = document.getElementById("c-two-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-two-f-one").value);
    var two = Number(document.getElementById("c-two-f-two").value);
    var three = Number(document.getElementById("c-two-f-three").value);
    var four = Number(document.getElementById("c-two-f-four").value);
    var five = Number(document.getElementById("c-two-f-five").value);
    var six = Number(document.getElementById("c-two-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

function columnThreeScore() {
  var score = document.getElementById("c-three-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-three-f-one").value);
    var two = Number(document.getElementById("c-three-f-two").value);
    var three = Number(document.getElementById("c-three-f-three").value);
    var four = Number(document.getElementById("c-three-f-four").value);
    var five = Number(document.getElementById("c-three-f-five").value);
    var six = Number(document.getElementById("c-three-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

function columnFourScore() {
  var score = document.getElementById("c-four-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-four-f-one").value);
    var two = Number(document.getElementById("c-four-f-two").value);
    var three = Number(document.getElementById("c-four-f-three").value);
    var four = Number(document.getElementById("c-four-f-four").value);
    var five = Number(document.getElementById("c-four-f-five").value);
    var six = Number(document.getElementById("c-four-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

function columnFiveScore() {
  var score = document.getElementById("c-five-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-five-f-one").value);
    var two = Number(document.getElementById("c-five-f-two").value);
    var three = Number(document.getElementById("c-five-f-three").value);
    var four = Number(document.getElementById("c-five-f-four").value);
    var five = Number(document.getElementById("c-five-f-five").value);
    var six = Number(document.getElementById("c-five-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

function columnSixScore() {
  var score = document.getElementById("c-six-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-six-f-one").value);
    var two = Number(document.getElementById("c-six-f-two").value);
    var three = Number(document.getElementById("c-six-f-three").value);
    var four = Number(document.getElementById("c-six-f-four").value);
    var five = Number(document.getElementById("c-six-f-five").value);
    var six = Number(document.getElementById("c-six-f-six").value);

    var sum = one + two + three + four + five + six;

    if (sum >= 60) {
      sum += 30      
      score.innerHTML = "<p>" + sum + "</p>";
    } else      
      score.innerHTML = "<p>" + sum + "</p>";
  });
};

//MAX MIN
function maxMinScoreOne() {
  var score = document.getElementById("maxMin-c-one-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-one-f-one").value);
    var two = Number(document.getElementById("min-c-one-f-one").value);
    var three = Number(document.getElementById("c-one-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};

function maxMinScoreTwo() {
  var score = document.getElementById("maxMin-c-two-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-two-f-one").value);
    var two = Number(document.getElementById("min-c-two-f-one").value);
    var three = Number(document.getElementById("c-two-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};

function maxMinScoreThree() {
  var score = document.getElementById("maxMin-c-three-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-three-f-one").value);
    var two = Number(document.getElementById("min-c-three-f-one").value);
    var three = Number(document.getElementById("c-three-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};

function maxMinScoreFour() {
  var score = document.getElementById("maxMin-c-four-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-four-f-one").value);
    var two = Number(document.getElementById("min-c-four-f-one").value);
    var three = Number(document.getElementById("c-four-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};

function maxMinScoreFive() {
  var score = document.getElementById("maxMin-c-five-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-five-f-one").value);
    var two = Number(document.getElementById("min-c-five-f-one").value);
    var three = Number(document.getElementById("c-five-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};

function maxMinScoreSix() {
  var score = document.getElementById("maxMin-c-six-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-six-f-one").value);
    var two = Number(document.getElementById("min-c-six-f-one").value);
    var three = Number(document.getElementById("c-six-f-one").value);   

    var sum = (one - two) * three;     
    
    score.innerHTML = "<p>" + sum + "</p>";
   
  });
};