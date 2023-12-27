/*
selection of subject :-choose one subject
 1)computer 
 2)biology
*/
/*
Note
nt=nepali theory
np=nepali pratical
et=english theory
ep=english pratical
mt=math theory or social theory
mp=math pratical or social theory
pt=physics theory 
pp=physics pratical
ct=chemistry theory
cp=chemistry pratical
bt=computer theory or biology theory
bp=computer pratical or biology theory

ccht=computer or biology cradit hour of theory
cchp=computer or biology cradit hour of pratical
*/
var nt, np, et, ep, mt, mp, pt, pp, ct, cp, bt, bp;
var ccht, cchp;

function subjectSelect() {
    var selectBox = document.getElementById("optional");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;
    switch (selectValue) {
        case "COMPUTER":
            ccht = document.getElementById("com_ch_thy").innerHTML = 2.5;
            cchp = document.getElementById("com_ch_pra").innerHTML = 2.5;
            break;
        case "BIOLOGY":
            ccht = document.getElementById("com_ch_thy").innerHTML = 3.75;
            cchp = document.getElementById("com_ch_pra").innerHTML = 1.25;
            break;

        default:
            cchp = null;
            ccht = null;
    }
    return { ccht: ccht, cchp: cchp };
}

//object
const gradeValue = {
    "A+": 4.0,
    "A": 3.6,
    "B+": 3.2,
    "B": 2.8,
    "C+": 2.4,
    "C": 2.0,
    "D": 1.6,
    "NG": "NG"
}

// nepali theory
function nepaliGradeTheory() {
    //nt= nepali theory grade point obtained
    var selectBox = document.getElementById("nepalitheory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            nt = document.getElementById("nep_gp_thy").innerHTML = gradeValue[key];
            return nt;
        }
    }
}

//nepali pratical 
function nepaliGradePratical() {
    //np = nepali pratical grade point obtained
    var selectBox = document.getElementById("nepalipratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;
    for (const key in gradeValue) {
        if (key == selectValue) {
            np = document.getElementById("nep_gp_pra").innerHTML = gradeValue[key];
            return np;
        }
    }
}

//english theory
function englisgGradeTheory() {
    //et = english theory grade point obtained
    var selectBox = document.getElementById("englishtheory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;
    for (const key in gradeValue) {
        if (key == selectValue) {
            et = document.getElementById("eng_gp_thy").innerHTML = gradeValue[key];
            return et;
        }
    }
}

//english pratical
function englishGradePratical() {
    //ep = english pratical grade point obtained
    var selectBox = document.getElementById("englishpratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            ep = document.getElementById("eng_gp_pra").innerHTML = gradeValue[key];
            return ep;
        }
    }
}

//math theory
function mathGradeTheory() {
    //mt = math theory grade point obtained
    var selectBox = document.getElementById("maththeory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            mt = document.getElementById("math_gp_thy").innerHTML = gradeValue[key];
            return mt;
        }
    }

}

//math pratical 
function mathGradePratical() {
    //mp = math pratical grade point obtained
    var selectBox = document.getElementById("mathpratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            mp = document.getElementById("math_gp_pra").innerHTML = gradeValue[key];
            return mp;
        }
    }
}

//physics theory
function physicsGradeTheory() {
    //pt = physics theory grade point obtained
    var selectBox = document.getElementById("physicstheory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            pt = document.getElementById("phy_gp_thy").innerHTML = gradeValue[key];
            return pt;
        }
    }
}

//physics pratical
function physicsGradePratical() {
    //pp = physics pratical grade point obtained
    var selectBox = document.getElementById("physicspratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            pp = document.getElementById("phy_gp_pra").innerHTML = gradeValue[key];
            return pp;
        }
    }
}

//chemistry theory
function chemistryGradeTheory() {
    //ct = chemistry theory grade point obtained
    var selectBox = document.getElementById("chemistrytheory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            ct = document.getElementById("che_gp_thy").innerHTML = gradeValue[key];
            return ct;
        }
    }
}

//chemistry pratical
function chemistryGradePratical() {
    //cp = chemistry pratical grade point obtained
    var selectBox = document.getElementById("chemistrypratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            cp = document.getElementById("che_gp_pra").innerHTML = gradeValue[key];
            return cp;
        }
    }
}

//computer or biology theory
function computerGradeTheory() {
    //bt = compurer or biology theory grade point obtained
    var selectBox = document.getElementById("computertheory");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            bt = document.getElementById("com_gp_thy").innerHTML = gradeValue[key];
            return bt;
        }
    }
}

//computer or biology pratical
function computerGradePratical() {
    //bp = n=computer and biology pratical grade point obtained
    var selectBox = document.getElementById("computerpratical");
    var selectValue = selectBox.options[selectBox.selectedIndex].value;

    for (const key in gradeValue) {
        if (key == selectValue) {
            bp = document.getElementById("com_gp_pra").innerHTML = gradeValue[key];
            return bp;
        }
    }
}

function gradeCalculate() {
    //value of grade point of all subject
    var ntValue = nepaliGradeTheory();
    var npValue = nepaliGradePratical();
    var etValue = englisgGradeTheory();
    var epValue = englishGradePratical();
    var mtValue = mathGradeTheory();
    var mpValue = mathGradePratical();
    var ptValue = physicsGradeTheory();
    var ppValue = physicsGradePratical();
    var ctValue = chemistryGradeTheory();
    var cpValue = chemistryGradePratical();
    var btValue = computerGradeTheory();
    var bpValue = computerGradePratical();

    // cradit hour of computer or biology
    var result = subjectSelect();
    var cchtValue = result.ccht;
    var cchpValue = result.cchp;

    //calculate final grade point of all subject

    var nepali = (((2.25 * ntValue) + (0.75 * npValue)) / 3).toFixed(2);
    document.getElementById("nfgp").innerHTML = nepali;

    var english = (((3 * etValue) + (1 * epValue)) / 4).toFixed(2);
    document.getElementById("efgp").innerHTML = english;

    var math = (((3.75 * mtValue) + (1.25 * mpValue)) / 5).toFixed(2);
    document.getElementById("mfgp").innerHTML = math;

    var physics = (((3.75 * ptValue) + (1.25 * ppValue)) / 5).toFixed(2);
    document.getElementById("pfgp").innerHTML = physics;

    var chemistry = (((3.75 * ctValue) + (1.25 * cpValue)) / 5).toFixed(2);
    document.getElementById("cfgp").innerHTML = chemistry;

    var computer = (((cchtValue * btValue) + (cchpValue * bpValue)) / 5).toFixed(2);
    document.getElementById("bfgp").innerHTML = computer;


    function calculateGrade(score) {
        let grade = '';

        if (score > 3.6 || score == 4) {
            grade = "A+";
        } else if (score > 3.2 || score == 3.6) {
            grade = "A";
        } else if (score > 2.8 || score == 3.2) {
            grade = "B+";
        } else if (score > 2.4 || score == 2.8) {
            grade = "B";
        } else if (score > 2 || score == 2.4) {
            grade = "C+";
        } else if (score > 1.6 || score == 2) {
            grade = "C";
        } else if (score > 1.2 || score == 1.6) {
            grade = "D";
        } else {
            grade = "NG";
        }
        return grade;
    }

    let nepaliGrade = calculateGrade(nepali);
    document.getElementById("nfg").innerHTML = nepaliGrade;

    let englishGrade = calculateGrade(english);
    document.getElementById("efg").innerHTML = englishGrade;

    let mathGrade = calculateGrade(math);
    document.getElementById("mfg").innerHTML = mathGrade;

    let physicsGrade = calculateGrade(physics);
    document.getElementById("pfg").innerHTML = physicsGrade;

    let chemistryGrade = calculateGrade(chemistry);
    document.getElementById("cfg").innerHTML = chemistryGrade;

    let computerGrade = calculateGrade(computer);
    document.getElementById("bfg").innerHTML = computerGrade;

    //calculate cradit hour and final grade point
    var nep, eng, mat, phy, che, com;
    nep = nepali * 3;
    eng = english * 4;
    mat = math * 5;
    phy = physics * 5;
    che = chemistry * 5;
    com = computer * 5;

    var sum = (nep + eng + mat + phy + che + com);
    var gpa = (sum / 27).toFixed(2);

        document.getElementById("gpa").innerHTML = gpa;
}
// Ensure your code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Call abc1 when the button is clicked
    document.getElementById("calculateButton").addEventListener("click", gradeCalculate);
});