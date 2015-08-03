var tempQuizBuilder = require('../quiz');

function buildQuizFromQuizDescriptor(descriptor, id, hexStringSeed) {
    var quiz = {};
    quiz.seed = hexStringSeed;
    var s = parseInt(hexStringSeed, 16);
	var tmpQuiz = new tempQuizBuilder.Quiz(descriptor, { seed : s });

    var showQuestions = 1;
    var showKey = 1;
    var showJson = 1;


    quiz.title = descriptor.title;
    quiz.qd = id;
    quiz.questions = [];


	for (var i = 0; i < tmpQuiz.questions.length; i++) {
    	var q = { 
    		question : tmpQuiz.questions[i].question,
    		answer : tmpQuiz.questions[i].answer,
            format : tmpQuiz.questions[i].format
    	};
    	quiz.questions.push(q);

	}

	return quiz;

}


module.exports.build = buildQuizFromQuizDescriptor;

