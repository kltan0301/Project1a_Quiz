//Trivia Game parameters
var TriviaGame = function(totalQuestions, questions) {
  this.player1Score = 0;
  this.player2Score = 0;
  this.totalQuestions = totalQuestions - 1;
  this.player1Turn = true;
  this.currQnNo = -1;
  this.questions = questions;
  this.rightResponse = ["Like a boss!", "How'd you know that?!","Superb!"];
  this.wrongResponse = ["Uh-oh","Not quite.","Wrong answer!"];
};
//Trivia game functions
TriviaGame.prototype = {
  constructor: TriviaGame,
  //returns number of questions in a game
  numberOfQuestions: function() {
    return this.totalQuestions;
  },
  //return index of current question
  currentQuestion: function() {
    this.currQnNo = Math.floor(Math.random() * this.questions.length);
    return this.currQnNo;
  },
  //return correct answer for current question
  correctAnswer: function() {
    var answer = this.questions[this.currQnNo].answer;
    return this.questions[this.currQnNo].options.indexOf(answer);
  },
  //return number of choices for current question
  numberOfAnswers: function() {
    return this.questions[this.currQnNo].options.length;
  },
  //checks player choice against current answer
  playTurn: function(choice) {
    if (this.currQnNo > -1) {
      if (choice == this.correctAnswer()) {
        if (this.player1Turn) {
          this.player1Score++;
        } else {
          this.player2Score++;
        }
        this.statusUpdate();
        return true;
      } else {
        this.statusUpdate();
        return false;
      }
    } else {
      return true;
    }
  },
  //updates turn switch and question array
  statusUpdate: function() {
    this.player1Turn = !this.player1Turn;
    this.totalQuestions--;
    this.questions.splice(this.currQnNo, 1);
  },
  //checks if any more questions to be asked for game
  gameOver: function() {
    if (this.totalQuestions <= 0) {
      return true;
    } else {
      return false;
    }
  },
  //checks for draws or wins
  whoWon: function() {
    if (this.gameOver()) {
      if (this.player1Score > this.player2Score) {
        return 1;
      } else if (this.player2Score > this.player1Score) {
        return 2;
      } else {
        return 3;
      }
    }
    return 0;
  },
  //retrieve question
  getQuestionAndOptions: function() {
    return {
      question: this.questions[this.currQnNo].question,
      options: this.questions[this.currQnNo].options
    };
  },
  getRightResponse: function() {
    return this.rightResponse[Math.floor(Math.random() * this.rightResponse.length)];
  },
  getWrongResponse: function() {
    return this.wrongResponse[Math.floor(Math.random() * this.wrongResponse.length)];
  },
};
$(document).ready(function() {
  var gameStart = true;
  var totalQns = 10;
  var buttons = $('button');

  var questionList = [{
    question: "Which superhero carries an indestructible shield?",
    options: ["The green lantern", "The Red Tornado", "Captain America", "Captain Flag"],
    answer: "Captain America"
  }, {
    question: "Which character is often romantically paired with Batman?",
    options: ["Miss America", "Catwoman", "Hawkgirl", "The Black Canary"],
    answer: "Catwoman"
  }, {
    question: "Which superhero started out as a petty criminal?",
    options: ["The Blue Knight", "Spiderman", "The Atom", "Plastic Man"],
    answer: "Plastic Man"
  }, {
    question: "Which superhero's alter ego is Raymond Palmer?",
    options: ["Hawkman", "The Tornado", "The Atom", "The Green Arrow"],
    answer: "The Atom"
  }, {
    question: "Which superhero is associated with the phrase, 'With great power comes great responsibility'?",
    options: ["Hell Boy", "Batman", "The Hulk", "Spiderman"],
    answer: "Spiderman"
  }, {
    question: "Which superhero is nicknamed the 'Scarlett Speedster'?",
    options: ["The Flash", "Speedball", "Stardust", "The Thing"],
    answer: "The Flash"
  }, {
    question: "Which superhero is dubbed the 'Man without Fear'?",
    options: ["The Flash", "Green Lantern", "Daredevil", "Wolverine"],
    answer: "Daredevil"
  }, {
    question: "Who is Batgirl's father (Barbara Gordon)?",
    options: ["The Chief of Police", "Batman's Butler", "The Governor", "The Mayor"],
    answer: "The Chief of Police"
  }, {
    question: "Which superhero gains his power from a ring?",
    options: ["Dazzler", "Storm", "The Hulk", "The Green Lantern"],
    answer: "The Green Lantern"
  }, {
    question: "Which superhero can manipulate the weather?",
    options: ["The Atom", "Storm", "The Tornado", "The Thing"],
    answer: "Storm"
  }, {
    question: "Which Island does Wonder Woman call home?",
    options: ["Amazonia", "Eden Isle", "Emerald Island", "Paradise Island"],
    answer: "Paradise Island"
  }, {
    question: "Where does the Green Arrow operate?",
    options: ["Chicago", "Atlanta", "Gotham", "Star City"],
    answer: "Star City"
  }, {
    question: "Which superhero was given a special serum to help the war effort?",
    options: ["Captain America", "The Hulk", "Spiderman", "Wolfman"],
    answer: "Captain America"
  }, {
    question: "Which superhero is also known as Ronin and Goliath?",
    options: ["Hawkeye", "Iron Man", "The Beast", "Cyclops"],
    answer: "Hawkeye"
  }];
  //create new game object
  var game = new TriviaGame(totalQns, questionList);
  //function which will trigger anytime a button is clicked
  function clickerEvent() {
    //generate a new question
    var currQn = game.currentQuestion();
    //retrieve the question at that index
    var question = game.getQuestionAndOptions().question;
    //retrieve the options for that question
    var options = game.getQuestionAndOptions().options;
    //get question number
    var qnNumber = totalQns - game.numberOfQuestions();
    //display the question
    $('.headerSection > h1').text(qnNumber + ". " + question);
    //display the options
    $('button').each(function(index) {
      $(this).text(options[index]);
    });
    updateScores();
    //display turn
    if (game.player1Turn) {
      //Update new player's turn
      $('.headerSection > h3').text("Player 1's turn");
      $('.headerSection > h3').attr("class", "player1");
    } else {
      //Update new player's turn
      $('.headerSection > h3').text("Player 2's turn");
      $('.headerSection > h3').attr("class", "player2");
    }
  }
  //Update player scores
  function updateScores() {
    $('.player1.score').text("Score: " + game.player1Score);
    $('.player2.score').text("Score: " + game.player2Score);
  }
  //Create customised alerts
  function alertBox(type, winner) {
    //common parameters for alert boxes
    var alertWidth = 400;
    var btnConfirmText = "Next";
    var allowClickable = false;

    switch (type) {
      case 0:
        var rightResponse = game.getRightResponse();
        swal({
          title: rightResponse,
          background: '#00FF7F',
          width: alertWidth,
          confirmButtonText: btnConfirmText,
          allowOutsideClick: allowClickable,
          allowEscapeKey: false
        }).then(function() {
          clickerEvent();
        });
        break;
      case 1:
        var wrongResponse = game.getWrongResponse();
        swal({
          title: wrongResponse,
          background: '#FF5454',
          confirmButtonText: btnConfirmText,
          width: alertWidth,
          allowOutsideClick: allowClickable,
          allowEscapeKey: false
        }).then(function() {
          clickerEvent();
        });
        break;
      case 2:
        var result = "";
        if (winner === 3) {
          result = "It's a draw!";
        } else {
          result = "Player " + winner + " is the winner!";
        }
        swal({
          title: result,
          background: '#FFDE29',
          width: alertWidth,
          confirmButtonText: 'Restart Game',
          allowOutsideClick: false
        }).then(function() {
          location.reload();
        });
        break;
    }
  }
  //click function on button click
  $('button').click(function() {
    if (!game.gameOver() && !gameStart) {
      //checks answer and display feedback
      if (game.playTurn($(this).val())) {
        alertBox(0);
      } else {
        alertBox(1);
      }
    } else if (gameStart) {
      //start generating questions
      clickerEvent();
      gameStart = false;
    } else {
      //play final round and determine winner
      game.playTurn($(this).val());
      updateScores();
      var winner = game.whoWon();
      alertBox(2, winner);
    }
  });
});
