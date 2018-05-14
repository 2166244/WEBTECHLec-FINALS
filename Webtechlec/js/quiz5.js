/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */

var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Restrictions on what validated clients are permitted to do are regularly not legitimately authorized. ",
		"options" : [
			{"a": "Broken Access Control", 
			 "b": "injection",
             "c": "Security Misconfiguration",
			}
			],
		"answer":"Broken Access Control",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "It is a prevention which enables the content security policy (CSP) is a resistance.",
		"options" : [
			{"a": "Injection",
             "b": "Insufficienet Logging and Monitoring",
             "c": "Cross-Site Scripting",
    }
    ],
		"answer":"Cross-Site Scripting",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "It can be utilized to perform an attack including a replay, infusion and benefit escalation attack. ",
		"options" : [
			{"a": "Broken Authentication",
             "b": "XML External Entities",
             "c": "Insecure Deserialization",
            }
			],
		"answer":"Insecure Deserialization",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Automated scanners are highly needed for identifying these defects",
		"options" : [
			{"a": "Insufficient Logging & Monitoring", 
			 "b": "Security Misconfiguration", 
			 "c": "Injection",
			],
		"answer":"Security Misconfiguration",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Example of prevention that removes unused conditions, superfluous highlights, segments, records and documentations. ",
		"options" : [
			{"a": "Components with Known Vulnerabilities", 
			 "b": "XML External Entities", 
			 "c": "Insecure Deserialization",
			],
		"answer":"Components with Known Vulnerabilities",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "True or False: XSS stands for Extreme-Site Scripting.",
		"options" : [
			{"a": "True", 
			 "b": "False", 
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Example of broken authentication – It implements the feeble secret work check",
		"options" : [
			{"a": "True", 
			 "b": "False",
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "True or False: XML External Entities has numerous XML processors assess outside elements ",
		"options" : [
			{"a": "True", 
			 "b": "False", 
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "True or False: Injection defect are NoSQL, OS, LDAP and SQL",
		"options" : [
			{"a": "True", 
			 "b": "False", 
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "True or False: Broken access control disables web client registry posting and guarantee document metadata",
		"options" : [
			{"a": "True", 
			 "b": "False", 
			}
			],
		"answer":"False",
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