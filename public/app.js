const questionSet = {
    q1: {
        question: "Does the patient see two separate images or one blurred image?",
        a1: "Two separate images",
        n1: "q2",
        a2: "One blurred image",
        n2: "Blurred Vision",
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
        question: "Still present when patient looks through a pinhole?",
        a1: "Yes",
        n1: "Cerebral polyopia",
        a2: "No",
        n2: "Media Opacity",
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
        n1: "Cranial Nerve Six Palsy",
        a2: "Eyes Diverge",
        n2: "Internuclear Ophthalmoplegia",
        previous: "q4"
    },
    q6: {
        question: "Are pupil sizes different (anisocoria) or is there ptosis present (lid drooping)?",
        a1: "Ptosis present",
        n1: "Cranial Nerve Three Palsy, Pupil-Involvement",
        a2: "Ptosis absent",
        n2: "q7",
        previous: "q4"
    },
    q7: {
        question: "Are there signs of thyroid eye disease? (proptosis/eye bulging or scleral baring)",
        a1: "Yes",
        n1: "Restrictive Myopathy secondary to Thyroid Orbitopathy",
        a2: "No",
        n2: "Cranial Nerve Four Palsy",
        previous: "q6"
    }
}
$(".btn").on("click", function() {
    // If True is clicked
    if ($(this).attr("id") === "btn0") {
        if (questionSet[questionNumber].n1.length > 2) {
            goToDiagnosis(questionSet[questionNumber].n1);
        } else {
            // Next Question
            exam(questionSet[questionNumber].n1)
        }
    }
    // If False is clicked
    else {
        // If Diagnosis is reached
        if (questionSet[questionNumber].n2.length > 2) {
            goToDiagnosis(questionSet[questionNumber].n2);
        } else {
            // Next Question
            exam(questionSet[questionNumber].n2)
        }
    }
    return;
});
var userInput;
var questionNumber = "q1";
function exam(currentQuestion) {
    questionNumber = currentQuestion;
    $("#backwards").remove();
    // Don't Display Backwards Icon on First Question
    if (questionNumber !== "q1") {
        var backwardButton = $("<div>").attr("id", "backwards");
        var icon = $("<i>").addClass("fa fa-2x fa-backward").attr("aria-hidden", "true");
        $("#buttons").prepend(backwardButton);
        $(backwardButton).append(icon);
        backwardButton.click(function() {
            exam(questionSet[questionNumber].previous);
            return;
        })
    }
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
function goToDiagnosis(diagnosisName) {
    $.get('/api/user_data').then(function(user) {
        console.log(user.email);
        var formattedName = diagnosisName.replace(" ", "%20");
    // If Diagnosis is reached
        $.get(`/api/diagnosis/${formattedName}`, function(data) {
            console.log(data);
            // Display Diagnoses
            $(".grid").empty();
            $(".grid").css({"height":"auto", "padding-bottom":"10px"});
            console.log(data.id);
            var info = $("<div>").attr("id", "info").css({"text-align":"left", "font-size":"1.2em"});
            var header = $("<h1>").attr("id", "header").css("color","black").text("Diagnosis");
            var diagnosis = $("<h2>").attr("id", "diagnosis").text("Result: ").css({"color":"#333", "font-size":"2.2em", "font-weight":"700"}).append($("<span>").text(data.diagnosis).css({"color":"#333", "font-weight":"100"}));
            var etiology = $("<h2>").attr("id", "etiology").text("Etiology: ").css({"color":"#333", "font-weight":"700"}).append($("<span>").text(data.etiology).css({"color":"#333", "font-weight":"100"}));
            var timeline = $("<h2>").attr("id", "timeline").text("Timeline: ").css({"color":"#333", "font-weight":"700"}).append($("<span>").attr("class","timelineText").text(data.timeline).css({"color":"#333", "font-weight":"100"}));
            var workup = $("<h2>").attr("id", "workup").text("Workup: ").css({"color":"#333", "font-weight":"700"}).append($("<span>").text(data.workup).css({"color":"#333", "font-weight":"100"}));
            $(".grid").append(info);
            $(info).append(diagnosis, etiology, timeline, workup);
            $(".grid").prepend(header);
            if (data.timeline === "Refer urgently.") {
                $(".timelineText").css("color","red");
                console.log("ahah");
            }
            else if (data.timeline === "Non-critical and non-urgent.") {
                $(".timelineText").css("color","green");
            } else {
                $(".timelineText").css("color","yellow");                
            }
            $.post(`/api/update`, {email: user.email, diagnosisId: data.id}).then(function(data) {});
        });
    }); 
}
$('#signoutBtn').on('click', function() {
    $.ajax('/logout', {
        type: "GET"
    }).then(function() {
        
    })
})
exam("q1");