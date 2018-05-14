/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Where does Server-Side Javascript was first implemented?",
		"options" : [
			{"a": "Netscape 2.0", 
			 "b": "Netscape Wire",
             "c": "Netscape LiveWire",
             "d": "LiveWire 2.0"
			}
			],
		"answer":"Netscape LiveWire",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Where does Javascript traditionally run?",
		"options" : [
			{"a": "Browsers & Softwares",
             "b": "Browsers only.",
             "c": "Softwares only.",
             "d": "None of the above.",
}
			],
		"answer":"Browsers only.",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What function is used to display output of the source code?",
		"options" : [
			{"a": "Response.write", 
			 "b": "Response.display", 
			 "c": "Response.out",
             "d": "Response.println"}
			],
		"answer":"Response.write",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "What should be indicated in the script tag to execute server-side javascript?",
		"options" : [
			{"a": "run(server)", 
			 "b": "type='server.run'", 
			 "c": "runat='server'",
             "d": "run.server"}
			],
		"answer":"runat='server'",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "What is the codename given to the first Javascript engine?",
		"options" : [
			{"a": "Rhino", 
			 "b": "Jaxer", 
			 "c": "SpiderMonkey",
             "d": "JavaScript Engine 1.0"}
			],
		"answer":"SpiderMonkey",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Node.js is built on?",
		"options" : [
			{"a": "Mozilla's Rhino engine", 
			 "b": "Google's V8 JavaScript engine", 
			 "c": "Google's SpiderMonkey JavaScript Engine",
             "d": "JavaScript ",
			}
			],
		"answer":"Google's V8 JavaScript engine",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "How do you install modules in Node.js?",
		"options" : [
			{"a": "npm install name-of-the-module", 
			 "b": "npm download name-of-the-module", 
			 "c": "npm install name-of-the-module version",
             "d": "npm download name-of-the-module version",
			}
			],
		"answer":"npm install name-of-the-module",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "All of the following are module in Node.js except,",
		"options" : [
			{"a": "Cluster", 
			 "b": "Domain", 
			 "c": "HTTP",
             "d": "NIC",
			}
			],
		"answer":"NIC",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What function name do you use in creating a server in Node.js?",
		"options" : [
			{"a": "newServer();", 
			 "b": "createServer();", 
			 "c": "server();",
             "d": "buildServer();",
			}
			],
		"answer":"createServer();",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "What does NPM stands for?",
		"options" : [
			{"a": "Node.js Package Manager", 
			 "b": "Newly Node Performance Manager", 
			 "c": "Node Perfomance Maintenance",
             "d": "Node Package Manager",
			}
			],
		"answer":"Node Package Manager",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});