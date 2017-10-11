const questionSet = {
    q1: {
        question: "Does the patient see two separate images or one blurred image?",
        a1: true,
        n1: "q2", 
        a2: false,
        n2: null,
        previous: null
    },
    q2: {
        question: "Is the patient's diplopia present with each eye covered separately?",
        a1: true,
        n1: "q3", 
        a2: false,
        n2: "q4",
        previous: "q1"
    },
    q3: {
        question: "Still present when patient looks throung a pinhole?",
        a1: true,
        n1: "Cortical Abnormality", 
        a2: false,
        n2: null,
        previous: "q2"
    },
    q4: {
        question: "How are the two images separated??",
        a1: true,
        n1: "q5", 
        a2: false,
        n2: "q6",
        previous: "q2"
    },
    q5: {
        question: "Ask the patient to look to the side that makes the diplopia worse. Look at their eye alignment when they do this.",
        a1: true,
        n1: null, 
        a2: false,
        n2: null,
        previous: "q4"
    },
    q6: {
        question: "Are pupil sizes different (anisocoria) or is there ptosis present (lid drooping)?",
        a1: true,
        n1: null, 
        a2: false,
        n2: "q7",
        previous: "q4"
    },
    q7: {
        question: "Are there signs of thyroid eye disease? (proptosis/eye bulging or scleral baring)",
        a1: true,
        n1: null, 
        a2: false,
        n2: null,
        previous: "q6"
    }
}

var userInput;

function exam(currentQuestion) {
    // Populate Question Div
    var questionText = questionSet[currentQuestion].question;
    var question = document.getElementById("question");
    question.innerHTML = questionText;

    // Populate Answers
    var answer1 = document.getElementById("btn0");
    var answer1Text = questionSet.q1.a1;
    answer1.innerHTML = answer1Text;
    var answer2 = document.getElementById("btn1");
    var answer2Text = questionSet.q1.a2;
    answer2.innerHTML = answer2Text;

    $(".btn").on("click", function() {
        // If True is clicked
        if ($(this).attr("id") === "btn0") {
            $(".btn").off();
            exam(questionSet[currentQuestion].n1)
        } 
        // If False is clicked
        else {
            $(".btn").off();
            exam(questionSet[currentQuestion].n2)
        }
    });
}

exam("q1");