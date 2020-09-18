// Question constructor
function Question (text,choices,answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}

// Question prototype // check answer function
Question.prototype.checkAnswer = function(answer){
  return this.answer === answer;
}

// Quiz constructor
function Quiz(questions){
  this.questions=questions;
  this.score=0;
  this.questionIndex=0;
}

//Quiz prototype
Quiz.prototype.getQuestions = function (){
  return this.questions[this.questionIndex];
}

//Quiz is finish
Quiz.prototype.isFinish = function (){
  return this.questions.length === this.questionIndex;
}

//Quiz guess
Quiz.prototype.guess=function (answer){
  var question=this.getQuestions();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
}

var q1 = new Question ('What is the best programming language?',['c#','javaScript','asp.net','python'],'javaScript');
var q2 = new Question ('What is the most popular programming language?',['c#','visual basic','node.js','javaScript'],'javaScript');
var q3 = new Question ('What is the best modern programming language?',['c#','javaScript','asp.net','python'],'javaScript');
var questions = [q1,q2,q3];
// checking answer
// console.log(q1.checkAnswer('c#'));
// console.log(q1.checkAnswer('javaScript'));
// console.log(q2.checkAnswer('visual basic'));
// console.log(q2.checkAnswer('javaScript'));

// Start Quiz

var quiz = new Quiz(questions);

// console.log(quiz.isFinish());

// console.log(quiz.getQuestions());
// quiz.guess('javaScript');

// console.log(quiz.getQuestions());
// quiz.guess('javaScript');

// console.log(quiz.getQuestions());
// quiz.guess('javaScript');

// console.log(quiz.score); // 3. all questions are true
// console.log(quiz.isFinish());

loadQuestions();

function loadQuestions(){
  if(quiz.isFinish()){
    showScore();
  }
  else{
    var question = quiz.getQuestions();
    var choices = question.choices;

    document.querySelector('#question').textContent = question.text;

    for (var i=0;i < choices.length;i++){
      var element = document.querySelector('#choice'+i);
      element.innerHTML= choices[i];
      guess('btn'+i,choices[i]);
    }

    showProgress();
  }
}

function guess (id,guess){
  var btn = document.getElementById(id);
  btn.onclick = function (){
    quiz.guess(guess);
    loadQuestions();
  }
}

function showScore (){
  punkt = quiz.score*10;
  var html = `<h2>Score</h2><h4>${punkt}</h4>`;
  document.querySelector('.card-body').innerHTML=html;
}

function showProgress(){
  var totalQuestion = quiz.questions.length;
  var questionNumber = quiz.questionIndex+1;
  document.querySelector('#progress').innerHTML = 'Question '+questionNumber+' of '+totalQuestion;
}
