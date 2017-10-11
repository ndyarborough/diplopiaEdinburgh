const questionSet = {
    q1: {
        question: "Does the patient see two separate images or one blurred image?",
        a1: "Two separate images",
        n1: "q2", 
        a2: "One blurred image",
        n2: null,
        previous: null
    },
    q2: {
        question: "Is the patient's diplopia present with each eye covered separately?",
        a1: "Yes",
        n1: "q3", 
        a2: "No",
        n2: "q4",
        previous: "q1"
    },
    q3: {
        question: "Still present when patient looks throung a pinhole?",
        a1: "Yes",
        n1: "Cortical Abnormality", 
        a2: "No",
        n2: null,
        previous: "q2"
    },
    q4: {
        question: "How are the two images separated??",
        a1: "Vertically",
        n1: "q5", 
        a2: "Horizontally",
        n2: "q6",
        previous: "q2"
    },
    q5: {
        question: "Ask the patient to look to the side that makes the diplopia worse. Look at their eye alignment when they do this.",
        a1: "Eyes Converge",
        n1: null, 
        a2: "Eyes Diverge",
        n2: null,
        previous: "q4"
    },
    q6: {
        question: "Are pupil sizes different (anisocoria) or is there ptosis present (lid drooping)?",
        a1: "Ptosis present",
        n1: null, 
        a2: "Ptosis absent",
        n2: "q7",
        previous: "q4"
    },
    q7: {
        question: "Are there signs of thyroid eye disease? (proptosis/eye bulging or scleral baring)",
        a1: "Yes",
        n1: null, 
        a2: "No",
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
    var answer2 = document.getElementById("btn1");
    var answer1Text = questionSet[currentQuestion].a1;
    var answer2Text = questionSet[currentQuestion].a2;
    answer1.innerHTML = answer1Text;
    answer2.innerHTML = answer2Text;

    $(".previousQuestion").on("click", function() {
        $(".previousQuestion").off();
        exam(questionSet[currentQuestion].previous)
    })

    $(".btn").on("click", function() {
        // Ensures no duplicate click handlers
        $(".btn").off();
        // If True is clicked
        if ($(this).attr("id") === "btn0") {
            exam(questionSet[currentQuestion].n1)
        } 
        // If False is clicked
        else {
            exam(questionSet[currentQuestion].n2)
        }
    });
}

exam("q1");