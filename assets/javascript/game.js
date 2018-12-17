var wins = 0;
var losses = 0;

$("#wins").text(0);
$("#losses").text(0);

function playGame() {
  let totalScore = 0;
  const mindStone = Math.floor(Math.random() * 10) + 1;
  const powerStone = Math.floor(Math.random() * 100) + 1;
  const realityStone = Math.floor(Math.random() * 10) + 1;
  const soulStone = Math.floor(Math.random() * 20) + 1;
  const spaceStone = Math.floor(Math.random() * 5) + 1;
  const timeStone = Math.floor(Math.random() * 50) + 1;
  var randomNumber = Math.floor(Math.random() * 500) + 1;
  $("#random_number").text(randomNumber);

  $("#total_score").text(totalScore);

  $("#mind_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += mindStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      resetGame();
    }
  });
  $("#power_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += powerStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      totalScore = 0;
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      totalScore = 0;
      resetGame();
    }
  });
  $("#reality_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += realityStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      totalScore = 0;
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      totalScore = 0;
      resetGame();
    }
  });
  $("#soul_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += soulStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      totalScore = 0;
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      totalScore = 0;
      resetGame();
    }
  });
  $("#space_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += spaceStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      totalScore = 0;
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      totalScore = 0;
      resetGame();
    }
  });
  $("#time_stone").click(function() {
    if (totalScore < randomNumber) {
      console.log(totalScore, randomNumber);
      totalScore += timeStone;
      $("#total_score").text(totalScore);
    } else if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      totalScore = 0;
      resetGame();
    } else {
      losses++;
      $("#losses").text(losses);
      totalScore = 0;
      resetGame();
    }
  });

  function resetGame() {
    randomNumber = Math.floor(Math.random() * 500) + 1;
    $("#random_number").text(randomNumber);
  }
}

playGame();
