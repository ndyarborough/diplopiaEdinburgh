const blockTop = {
    q1: {
        question: "Does the patient see two separate images or one blurred image?",
        a1: true,
        a2: false
    }
}

const block1 = {
    q1: {
        question: "Is the patient's diplopia present with each eye covered separately?",
        a1: true,
        a2: false
    },
    q2: {
        question: "Is the diplopia still present when the patient looks through a pinhole?",
        a1: true,
        a2: false
    }
}
const block2 = {
    q1: {
        question: "How are the two images separated?",
        a1: true, //Horizontally
        a2: false //Vertically
    },
    q2: {
        question: "Ask the patient to look to the side that makes the diplopia worse. Look at their eye alignment when they do this.",
        a1: true, //Eyes converge (come together)
        a2: false //Eyes diverge (move apart)
    }
}
const block3 = {
    q1: {
        question: "Are pupil sizes different (anisocoria) or is there ptosis present (lid drooping)?",
        a1: true,
        a2: false
    },
    q2: {
        question: "Are there signs of thyroid eye disease? (proptosis/eye bulging or scleral baring)",
        a1: true,
        a2: false
    }
}

var userInput;

function exam() {

    // Everyone gets to question 1
    question1();
    // // If true     // If false
    // Question2a();  Question2b();
}

function question1() {
    // Populate Question Div
    var questionText = blockTop.q1.question;
    var question = document.getElementById("question");
    question.innerHTML = questionText;

    // Populate Answers
    var answer1 = document.getElementById("btn0");
    var answer1Text = blockTop.q1.a1;
    answer1.innerHTML = answer1Text;
    var answer2 = document.getElementById("btn1");
    var answer2Text = blockTop.q1.a2;
    answer2.innerHTML = answer2Text;

    $("#btn0").one("click", function() {
        userInput = this.innerHTML;
        runBlock1();
    });

    $("#btn1").one("click", function() {
        userInput = this.innerHTML;
        question.innerHTML = "Blurred Vision <br> See visual loss algorithm (figure 3.2)";
        $("#buttons").empty();
    });
}

function runBlock1() {
    // Populate Question Div
    var questionText = block1.q1.question;
    var question = document.getElementById("question");
    question.innerHTML = questionText;

    // Populate Answers
    var answer1 = document.getElementById("btn0");
    var answer1Text = block1.q1.a1;
    answer1.innerHTML = answer1Text;
    var answer2 = document.getElementById("btn1");
    var answer2Text = block1.q1.a2;
    answer2.innerHTML = answer2Text;
}





exam();