window.onbeforeunload = function (e) {
  return "Please click 'Stay on this Page' if you did this unintentionally";
};

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

  BigScoreOne();
  BigScoreTwo();
  BigScoreThree();
  BigScoreFour();
  BigScoreFive();
  BigScoreSix();

  finalScore();
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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
      sum += 30;
      score.innerHTML = "<p>" + sum + "</p>";
    } else score.innerHTML = "<p>" + sum + "</p>";
  });
}

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
}

function maxMinScoreTwo() {
  var score = document.getElementById("maxMin-c-two-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-two-f-one").value);
    var two = Number(document.getElementById("min-c-two-f-one").value);
    var three = Number(document.getElementById("c-two-f-one").value);

    var sum = (one - two) * three;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function maxMinScoreThree() {
  var score = document.getElementById("maxMin-c-three-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-three-f-one").value);
    var two = Number(document.getElementById("min-c-three-f-one").value);
    var three = Number(document.getElementById("c-three-f-one").value);

    var sum = (one - two) * three;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function maxMinScoreFour() {
  var score = document.getElementById("maxMin-c-four-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-four-f-one").value);
    var two = Number(document.getElementById("min-c-four-f-one").value);
    var three = Number(document.getElementById("c-four-f-one").value);

    var sum = (one - two) * three;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function maxMinScoreFive() {
  var score = document.getElementById("maxMin-c-five-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-five-f-one").value);
    var two = Number(document.getElementById("min-c-five-f-one").value);
    var three = Number(document.getElementById("c-five-f-one").value);

    var sum = (one - two) * three;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function maxMinScoreSix() {
  var score = document.getElementById("maxMin-c-six-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("max-c-six-f-one").value);
    var two = Number(document.getElementById("min-c-six-f-one").value);
    var three = Number(document.getElementById("c-six-f-one").value);

    var sum = (one - two) * three;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreOne() {
  var score = document.getElementById("big-c-one-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-one-f-one").value);
    var two = Number(document.getElementById("big-c-one-f-two").value);
    var three = Number(document.getElementById("big-c-one-f-three").value);
    var four = Number(document.getElementById("big-c-one-f-four").value);
    var five = Number(document.getElementById("big-c-one-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreTwo() {
  var score = document.getElementById("big-c-two-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-two-f-one").value);
    var two = Number(document.getElementById("big-c-two-f-two").value);
    var three = Number(document.getElementById("big-c-two-f-three").value);
    var four = Number(document.getElementById("big-c-two-f-four").value);
    var five = Number(document.getElementById("big-c-two-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreThree() {
  var score = document.getElementById("big-c-three-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-three-f-one").value);
    var two = Number(document.getElementById("big-c-three-f-two").value);
    var three = Number(document.getElementById("big-c-three-f-three").value);
    var four = Number(document.getElementById("big-c-three-f-four").value);
    var five = Number(document.getElementById("big-c-three-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreFour() {
  var score = document.getElementById("big-c-four-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-four-f-one").value);
    var two = Number(document.getElementById("big-c-four-f-two").value);
    var three = Number(document.getElementById("big-c-four-f-three").value);
    var four = Number(document.getElementById("big-c-four-f-four").value);
    var five = Number(document.getElementById("big-c-four-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreFive() {
  var score = document.getElementById("big-c-five-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-five-f-one").value);
    var two = Number(document.getElementById("big-c-five-f-two").value);
    var three = Number(document.getElementById("big-c-five-f-three").value);
    var four = Number(document.getElementById("big-c-five-f-four").value);
    var five = Number(document.getElementById("big-c-five-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function BigScoreSix() {
  var score = document.getElementById("big-c-six-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("big-c-six-f-one").value);
    var two = Number(document.getElementById("big-c-six-f-two").value);
    var three = Number(document.getElementById("big-c-six-f-three").value);
    var four = Number(document.getElementById("big-c-six-f-four").value);
    var five = Number(document.getElementById("big-c-six-f-five").value);

    var sum = one + two + three + four + five;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}

function finalScore() {
  var score = document.getElementById("final-score");

  score.addEventListener("click", function() {
    var one = Number(document.getElementById("c-one-score").textContent);
    var two = Number(document.getElementById("c-two-score").textContent);
    var three = Number(document.getElementById("c-three-score").textContent);
    var four = Number(document.getElementById("c-four-score").textContent);
    var five = Number(document.getElementById("c-five-score").textContent);
    var six = Number(document.getElementById("c-six-score").textContent);
    var seven = Number(document.getElementById("maxMin-c-one-score").textContent);
    var eight = Number(document.getElementById("maxMin-c-two-score").textContent);
    var nine = Number(document.getElementById("maxMin-c-three-score").textContent);
    var ten = Number(document.getElementById("maxMin-c-four-score").textContent);
    var eleven = Number(document.getElementById("maxMin-c-five-score").textContent);
    var twelve = Number(document.getElementById("maxMin-c-six-score").textContent);
    var thirteen = Number(document.getElementById("big-c-one-score").textContent);
    var fourteen = Number(document.getElementById("big-c-two-score").textContent);
    var fifteen = Number(document.getElementById("big-c-three-score").textContent);
    var sixteen = Number(document.getElementById("big-c-four-score").textContent);
    var seventeen = Number(document.getElementById("big-c-five-score").textContent);
    var eighteen = Number(document.getElementById("big-c-six-score").textContent);

    var sum =
      one +
      two +
      three +
      four +
      five +
      six +
      seven +
      eight +
      nine +
      ten +
      eleven +
      twelve +
      thirteen +
      fourteen +
      fifteen +
      sixteen +
      seventeen +
      eighteen;

    score.innerHTML = "<p>" + sum + "</p>";
  });
}
