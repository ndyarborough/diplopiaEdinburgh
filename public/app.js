$.get('api/diagnosis', function(data) {
    console.log(data);
});

$("#backwards").on("click", function() {
    if (questionSet[questionNumber] === "q1") {
        alert("Can't go any further!");
    } else {
        exam(questionSet[questionNumber].previous);
    }
    return;
});

$(".btn").on("click", function() {
    // If True is clicked
    if ($(this).attr("id") === "btn0") {
        if (questionSet[questionNumber].n1.length > 2) {
            alert("endpoint!");
            $.get("api/diagnosis", function(data) {
                alert(true);
            });
        } else {
            exam(questionSet[questionNumber].n1)
        }
    }
    // If False is clicked
    else {
        if (questionSet[questionNumber].n2.length > 2) {
            alert("endpoint!");
        } else {
            exam(questionSet[questionNumber].n2)
        }
    }
    return;
});

const questionSet = {
    q1: {
        question: "Does the patient see two separate images or one blurred image?",
        a1: "Two separate images",
        n1: "q2",
        a2: "One blurred image",
        n2: "Blurred Vision (See Visual Loss Algorithm)",
        previous: "none"
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
        n2: "Media Opacity, Usually Cataract",
        previous: "q2"
    },
    q4: {
        question: "How are the two images separated??",
        a1: "Vertically",
        n1: "q5",
        a2: "Horizontally",
        n2: "q6",
        previous: "q3"
    },
    q5: {
        question: "Ask the patient to look to the side that makes the diplopia worse. Look at their eye alignment when they do this.",
        a1: "Eyes Converge",
        n1: "CN VI Palsy",
        a2: "Eyes Diverge",
        n2: "Internuclear Opthalmoplegia",
        previous: "q4"
    },
    q6: {
        question: "Are pupil sizes different (anisocoria) or is there ptosis present (lid drooping)?",
        a1: "Ptosis present",
        n1: "CN III Palsy",
        a2: "Ptosis absent",
        n2: "q7",
        previous: "q4"
    },
    q7: {
        question: "Are there signs of thyroid eye disease? (proptosis/eye bulging or scleral baring)",
        a1: "Yes",
        n1: "Restrictive Myopathy",
        a2: "No",
        n2: "CN IV",
        previous: "q6"
    }
}

var userInput;
var questionNumber = "q1";

function exam(currentQuestion) {
    questionNumber = currentQuestion;

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
}

exam("q1");