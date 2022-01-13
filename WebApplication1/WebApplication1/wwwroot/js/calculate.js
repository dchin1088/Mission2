////document.getElementById("btnCalc").addEventListener("click", function () {
////    iOutput = parseFloat(document.getElementById("intAssignments").value) + parseFloat(document.getElementById("intGroupProject").value) +
////        parseFloat(document.getElementById("intQuizzes").value) + parseFloat(document.getElementById("intExams").value) +
////        parseFloat(document.getElementById("intIntex").value)

////    alert(iOutput);
//// })

/*function calculating percentage in the class based on syllabus*/

$("#btnCalc").click(function () {
    iOutput = parseFloat($("#intAssignments").val() * .55) +
        parseFloat($("#intGroupProject").val() * .05) +
        parseFloat($("#intQuizzes").val() * .1) +
        parseFloat($("#intExams").val() * .2) +
        parseFloat($("#intIntex").val() * .1)

/*Uses your percentage to assign a grade in the class   */ 

    if (iOutput >= 94) {
        sGrade = 'A';
    }
    else if (iOutput >= 90) {
        sGrade = 'A-';
    }
    else if (iOutput >= 87) {
        sGrade = 'B+';
    }
    else if (iOutput >= 84) {
        sGrade = 'B';
    }
    else if (iOutput >= 80) {
        sGrade = 'B-';
    }
    else if (iOutput >= 77) {
        sGrade = 'C+';
    }
    else if (iOutput >= 74) {
        sGrade = 'C';
    }
    else if (iOutput >= 70) {
        sGrade = 'C-';
    }
    else if (iOutput >= 67) {
        sGrade = 'D+';
    }
    else if (iOutput >= 64) {
        sGrade = 'D';
    }
    else if (iOutput >= 60) {
        sGrade = 'D-';
    }
    else {
        sGrade = 'E';
    }


    alert(iOutput + ' percent' + ' ' + sGrade + ' in the class');
})