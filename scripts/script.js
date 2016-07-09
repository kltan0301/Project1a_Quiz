//Declare game object and parameters
var triviaGame = function(){
  var player1score = 0;
  var player2score = 0;
  var totalQuestions = 10;
  var playerTurn = 1;
  //question list
  var questions = [{
    question: "Which superhero carries an indestructible shield?",
    options: ["The green lantern", "The Red Tornado", "Captain America", "Captain America"],
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
  }];
};


  //It should return an integer that is the number of questions in a game
  function numberOfQuestions() {
    return questions.length;
  }
  //It should return an integer that is the zero-based index of the current question in the quiz
  function currentQuestion() {
    Math.random()
  }
  //It should return an integer that is the zero-based index the correct answer for the currrent question
  function correctAnswer(){

  }
  //It should return an integer that is the number of choices for the current question
  function numberOfAnswers(){

  }
  // It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
  function playTurn(choice){

  }
  //It should return a true or false if the quiz is over.
  function isGameOver(){

  }
  //It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
  function whoWon(){

  }
  //It should restart the game so it can be played again.
  function restart(){

  }

$(document).ready(function() {
  alert("test");
});
