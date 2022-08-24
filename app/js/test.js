function Form1_answer(answer) {
    var elem = document.getElementById('answer1');
    elem.innerHTML = answer;
}

function Form2_answer(answer) {
    var elem = document.getElementById('answer2');
    elem.innerHTML = answer;
}

function Form3_answer(answer) {
    var elem = document.getElementById('answer3');
    elem.innerHTML = answer;
}

function Form4_answer(answer) {
    var elem = document.getElementById('answer4');
    elem.innerHTML = answer;
}

function Form5_answer(answer) {
    var elem = document.getElementById('answer5');
    elem.innerHTML = answer;
}

function Form6_answer(answer) {
    var elem = document.getElementById('answer6');
    elem.innerHTML = answer;
}

function Form7_answer(answer) {
    var elem = document.getElementById('answer7');
    elem.innerHTML = answer;
}

function Form8_answer(answer) {
    var elem = document.getElementById('answer8');
    elem.innerHTML = answer;
}

function Form9_answer(answer) {
    var elem = document.getElementById('answer9');
    elem.innerHTML = answer;
}

function Form10_answer(answer) {
    var elem = document.getElementById('answer10');
    elem.innerHTML = answer;
}

function Form11_answer(answer) {
    var elem = document.getElementById('answer11');
    elem.innerHTML = answer;
}

function Form12_answer(answer) {
    var elem = document.getElementById('answer12');
    elem.innerHTML = answer;
}

function Form13_answer(answer) {
    var elem = document.getElementById('answer13');
    elem.innerHTML = answer;
}

function Form14_answer(answer) {
    var elem = document.getElementById('answer14');
    elem.innerHTML = answer;
}

function Form15_answer(answer) {
    var elem = document.getElementById('answer15');
    elem.innerHTML = answer;
}

function Form16_answer(answer) {
    var elem = document.getElementById('answer16');
    elem.innerHTML = answer;
}

function Form17_answer(answer) {
    var elem = document.getElementById('answer17');
    elem.innerHTML = answer;
}

function Form18_answer(answer) {
    var elem = document.getElementById('answer18');
    elem.innerHTML = answer;
}

function Form19_answer(answer) {
    var elem = document.getElementById('answer19');
    elem.innerHTML = answer;
}

function Form20_answer(answer) {
    var elem = document.getElementById('answer20');
    elem.innerHTML = answer;
}

function Form21_answer(answer) {
    var elem = document.getElementById('answer21');
    elem.innerHTML = answer;
}

function Form22_answer(answer) {
    var elem = document.getElementById('answer22');
    elem.innerHTML = answer;
}

function Form23_answer(answer) {
    var elem = document.getElementById('answer23');
    elem.innerHTML = answer;
}

function Result() {
    var arr = [];
    for (var i = 1; i < 24; i++) {
        var res = "answer" + i;
        arr[i - 1] = document.getElementById(res).innerHTML;
    }
    for (var i = 0; i < 23; i++) {
        if (/^&nbsp;$/.test(arr[i])) {
            alert("Input is not valid! Fill all fields to get an answer!");
            return;
        }
    }
    var sum = 0;
    if (arr[0] == "9") sum++;
    if (arr[1] == "8") sum++;
    if (arr[2] == "5") sum++;
    if (arr[3] == "2") sum++;
    if (arr[4] == "1") sum++;
    if (arr[5] == "7") sum++;
    if (arr[6] == "4") sum++;
    if (arr[7] == "2") sum++;
    if (arr[8] == "2") sum++;
    if (arr[9] == "5") sum++;
    if (arr[10] == "6") sum++;
    if (arr[11] == "6") sum++;
    if (arr[12] == "4") sum++;
    if (arr[13] == "4") sum++;
    if (arr[14] == "7") sum++;
    if (arr[15] == "7") sum++;
    if (arr[16] == "9") sum++;
    if (arr[17] == "3") sum++;
    if (arr[18] == "1") sum++;
    if (arr[19] == "7") sum++;
    if (arr[20] == "2") sum++;
    if (arr[21] == "3") sum++;
    if (arr[22] == "1") sum++;

    if (sum >= 0 && sum <= 5) {
        alert("You clearly have a daltonism!")
    }
    if (sum >= 6 && sum <= 10) {
        alert("You probably have Deuteranomaly or Tritanomaly")
    }
    if (sum >= 11 && sum <= 16) {
        alert("You probably have Protanomaly or Tritanopia ")
    }
    if (sum >= 17 && sum <= 20) {
        alert("Your results are good, maybe you were not concentrated enough")
    }
    if (sum >= 21 && sum <= 23) {
        alert("You don`t have color blindess at all!")
    }
}