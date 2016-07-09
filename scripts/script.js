//Trivia Game parameters
var TriviaGame = function(totalQuestions) {
  this.player1Score = 0;
  this.player2Score = 0;
  this.totalQuestions = totalQuestions-1;
  this.player1Turn = true;
  this.currQnNo = -1;
  //question list
  this.questions = [{
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
    question: "Which superhero is associated with the phrase, 'With great power there must also come great responsibility'?",
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
    question: "Which superhero gains his power from a ring? ",
    options: ["Dazzler", "Storm", "The Hulk", "The Green Lantern"],
    answer: "The Green Lantern"
  }, {
    question: "Which superhero can manipulate the weather?",
    options: ["The Atom", "Storm", "The Tornado", "The Thing"],
    answer: "Storm"
  },{
    question: "Which Island does Wonder Woman call home?",
    options: ["Amazonia", "Eden Isle", "Emerald Island", "Paradise Island"],
    answer: "Paradise Island"
  },{
    question: "Where does the Green Arrow operate?",
    options: ["Chicago", "Atlanta", "Gotham", "Star City"],
    answer: "Star City"
  }];
};
//Trivia game functions
TriviaGame.prototype = {
  //returns number of questions in a game
  constructor: TriviaGame,
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
    if(this.currQnNo > -1){
      this.player1Turn = !this.player1Turn;
      console.log("Your choice: " + choice + ", correct answer: " + this.correctAnswer());
      if (choice == this.correctAnswer()) {
        if (this.player1Turn) {
          //using inverse adding of scores because player turn already swapped for next turn
          this.player2Score++;
        } else {
          //using inverse adding of scores because player turn already swapped for next turn
          this.player1Score++;
        }
        this.totalQuestions--;
        this.questions.splice(this.currQnNo, 1);
        return true;
      } else {
        this.totalQuestions--;
        this.questions.splice(this.currQnNo, 1);
        return false;
      }
    }else{
      return true;
    }
  },
  //checks if any more questions to be asked for game
  gameOver: function() {
    if (this.totalQuestions === 0) {
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
    } else {
      return 0;
    }
  }
};
$(document).ready(function() {
  var gameStart = true;
  var game = new TriviaGame(10);
  var buttons = $('button');

  function clickerEvent() {
    //generate a new question
    var currQn = game.currentQuestion();
    //retrieve the question at that index
    var question = game.questions[currQn].question;
    //retrieve the answer at that index
    var options = game.questions[currQn].options;
    var qnNumber = 10 - game.totalQuestions;
    //display the question
    $('.headerSection > h1').text(qnNumber + ". " + question);
    //display the options
    $('button').each(function(index) {
      $(this).text(options[index]);
    });
    //display turn
    if (game.player1Turn) {
      //Update previous player's score
      $('.player2.score').text("Score: " + game.player2Score);
      //Update new player's turn
      $('.headerSection > h3').text("Player 1's turn");
      $('.headerSection > h3').attr("class", "player1");
    } else {
      //Update previous player's score
      $('.player1.score').text("Score: " + game.player1Score);
      //Update new player's turn
      $('.headerSection > h3').text("Player 2's turn");
      $('.headerSection > h3').attr("class", "player2");
    }

  }

  $('button').click(function() {
    if (!game.gameOver() && !gameStart) {
      //checks answer and display feedback
      if (game.playTurn($(this).val())) {
        alert("You're right!");
      } else {
        alert("Sorry, not quite");
      }
      //Update displays
      clickerEvent();
    } else if(gameStart) {
      clickerEvent();
      gameStart = false;
    } else {
      var winner = game.whoWon();
      alert(winner);
      switch(winner){
        case 1:
          alert("Player 1 is the winner!");
          break;
        case 2:
          alert("Player 2 is the winner!");
          break;
        default:
          alert("It's a draw!");
      }
      location.reload();
    }
  });
});
