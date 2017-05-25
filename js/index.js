$(document).ready(function() {
    
    $(".inst").click(function() {
        $(".overlay").fadeIn(1000);
    });
    $(".close").click(function() {
        $(".game").fadeIn(1000);
    });
    $(".navbar-brand").click(function() {
        location.reload();
    });
    $(".newGame").click(function() {
        $(".game").fadeIn(1000);
    });
    $(".playAgain").hide();
    
    

    var nextQuestion = $(".next-question");
    nextQuestion.show();
    nextQuestion.click(function() {
    console.log($('input:radio:checked').val());
    });
    var userCorrectAnswer = 0;
    var questions = [
        {
            question: "How many legs does a dog have?",
            options: [" 2", " 3", " 4", " other"],
            answerIndex: 2
        },
        {
            question: "How many eyes does a spider have?",
            options: [" 6", " 8", " 10", " other"],
            answerIndex: 1
        },
        {
            question: "What are young wolves called?",
            options: [" kits", " cubs", " pups", " kids"],
            answerIndex: 2
        },
        {
            question: "Which of the following facts about Giraffe's isn't true?",
            options: [" A giraffe's heart weighs 50 lbs", " Giraffe's used to be called camelopards", " Newborn giraffes can run within hours of birth", " Giraffes have very long tongues"],
            answerIndex: 0
        },
        {
            question: "Which of the following facts about Koala bears isn't true?",
            options: [" Koalas have unique fingerprints", " Koalas are members of the bear family", " Koalas have 4 thumbs", " Koalas live in Australia"],
            answerIndex: 1
        }
    ];

    /*--- functions ---*/
    var loadQuestion = function (){
        $('.next-question').prop("disabled", true);
        $('.question-name').html(name + (qnum) +"/"+ total);
        $('.question').html(questions[count].question);
        for(var i=0; i<questions[count].options.length; i++) {
            $('.inputs').append('<input type="radio" name="question" value="'+questions[count].options[i]+'">'+questions[count].options[i]+'<br>')
        }
        //At this point, we have the radio buttons in the dom
        //We can assign events to them
        $('input[type=radio]').click(function() {
            $('.next-question').prop("disabled", false);
        })
    };


    /*--- First Question ---*/
    var name = "Question ";
    var qnum = 1;
    var count = 0;
    var total = questions.length;
    loadQuestion();



    /*--- When the Next Question Button is Hit ---*/
    nextQuestion.click(function() {
        var currentAnswer = questions[count].answerIndex;
        if ($("input[type='radio']")[currentAnswer].checked){
            userCorrectAnswer++;
        }
        $('.inputs').html("");
        qnum++;
        count++;
        if (qnum <= 4) {
            loadQuestion();
        } else if (qnum == 6) {
            $('.question-name').html("Your Score:");
            $('.question').html("You got " + userCorrectAnswer + " out of 5 questions correct!");
            $(".playAgain").show();
            nextQuestion.hide();
        } else if (qnum == 5){
            loadQuestion();
            $('.next-question').html("Get Score!");
        }
    });
    $(".playAgain").click(function (){
        count = 0;
        qnum = 1;
        userCorrectAnswer = 0;
        $('.inputs').html("");
        loadQuestion();
        $(".playAgain").toggle();
        nextQuestion.show().html("Next Question!");
    });
});

