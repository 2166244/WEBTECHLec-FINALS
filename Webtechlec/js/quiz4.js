/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "One of the usable and dynamic tool which a developer can effectively use in developing, building, and creating content of a website.",
		"options" : [
			{"a": "Servlet", 
			 "b": "JSP",
             "c": "PHP",
             "d": "Node"
			}
			],
		"answer":"JSP",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Based on your answer in question no. 1, it is a combination of?",
		"options" : [
			{"a": "HTML and Javascript",
             "b": "Javascript and XML",
             "c": "HTML and XML",
             "d": "Javascript and PHP",
}
			],
		"answer":"HTML and XML",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "In what page does the Java code attached wherein it is also an essential way of writing a servlets?",
		"options" : [
			{"a": "HTML Pages",
             "b": "XML Pages",
             "c": "Javascript Pages",
             "d": "CSS Pages",
            }
			],
		"answer":"HTML Pages",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "JSP comments can be implemented in three ways except",
		"options" : [
			{"a": "Using the HTML comment format", 
			 "b": "Using the JSP comment format", 
			 "c": "Using the XML comment format",
             "d": "Scripting element comment attach to it"}
			],
		"answer":"Using the XML comment format",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "It is one of the JSP Directives use to control the properties of the JSP.",
		"options" : [
			{"a": "Page", 
			 "b": "Include", 
			 "c": "Taglib",
             "d": "Request"}
			],
		"answer":"SpiderMonkey",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Part of the Servlet Life Cycle where init() method is invoked",
		"options" : [
			{"a": "Initialization", 
			 "b": "Instantiation", 
			 "c": "Destruction",
             "d": "Request Handling",
			}
			],
		"answer":"Initialization",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Service() method is invoked in the third phase of the Servlet Life Cycle.",
		"options" : [
			{"a": "TRUE", 
			 "b": "FALSE",
			}
			],
		"answer":"TRUE",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Server-side java has a fundamental building block called,",
		"options" : [
			{"a": "JPS", 
			 "b": "Server", 
			 "c": "Servlets",
             "d": "JSP",
			}
			],
		"answer":"Servlets",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Odd one out.",
		"options" : [
			{"a": "HttpServletResponse", 
			 "b": "HttpServletRequest", 
			 "c": "Context Session",
             "d": "ServletContext",
			}
			],
		"answer":"Context Session",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "It is used by retrieving request files, headers, and parameters from the clients. ",
		"options" : [
			{"a": "Servlet Request", 
			 "b": "Servlet Response", 
			 "c": "HTTP Request",
             "d": "HTTP Response",
			}
			],
		"answer":"Servlet Request",
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