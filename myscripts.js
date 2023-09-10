let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let dot = document.getElementById("dot");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let cross = document.getElementById("cross");
let slash = document.getElementById("slash");
let equal = document.getElementById("equal");

let clear = document.getElementById("clear");
let allClear = document.getElementById("allClear");

let output = document.getElementById("number");

one.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "1";
});

two.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "2";
});

three.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "3";
});

four.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "4";
});

five.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "5";
});

six.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "6";
});

seven.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "7";
});

eight.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "8";
});

nine.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "9";
});

zero.addEventListener("click", function (e) {
    let txt = output.value;
    output.value = txt + "0";
});

let dotcnt = false;

dot.addEventListener("click", function (e) {
    if (!dotcnt) {
        let txt = output.value;
        let lastchar = txt[txt.length - 1];
        if (txt == "" || lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            output.value = txt + "0.";
        }
        else {
            output.value = txt + ".";
        }
        dotcnt = true;
    }
});

let c = false;
let char;

function result(txt) {
    let numArray = txt.split(char);
    let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
    let ans;
    if (char == "+") {
        ans = nums[0] + nums[1];
    }
    else if (char == "-") {
        ans = nums[0] - nums[1];
    }
    else if (char == "*") {
        ans = nums[0] * nums[1];
    }
    else if (char == "/") {
        ans = nums[0] / nums[1];
    }
    return ans;
}

plus.addEventListener("click", function (e) {
    let txt = output.value;
    if (txt != "" && !c) {
        char = "+";
        output.value = txt + char;
        c = true;
    }
    else if (c) {
        let n = txt.length;
        let lastchar = txt[n - 1];
        if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            char = "+";
            txt = txt.substring(0, n - 1) + char;
            output.value = txt;
        }
        else {
            let numArray = txt.split(char);
            let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
            let ans = result(txt);
            char = "+";
            output.value = ans + char;
            c = true;
        }
    }
    dotcnt = false;
});

minus.addEventListener("click", function (e) {
    let txt = output.value;
    if (txt != "" && !c) {
        char = "-";
        output.value = txt + char;
        c = true;
    }
    else if (c) {
        let n = txt.length;
        let lastchar = txt[n - 1];
        if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            char = "-";
            txt = txt.substring(0, n - 1) + "-";
            output.value = txt;
        }
        else {
            let numArray = txt.split(char);
            let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
            let ans = result(txt);
            char = "-";
            output.value = ans + char;
            c = true;
        }
    }
    dotcnt = false;
});

cross.addEventListener("click", function (e) {
    let txt = output.value;
    if (txt != "" && !c) {
        char = "*";
        output.value = txt + char;
        c = true;
    }
    else if (c) {
        let n = txt.length;
        let lastchar = txt[n - 1];
        if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            char = "*";
            txt = txt.substring(0, n - 1) + char;
            output.value = txt;
        }
        else {
            let numArray = txt.split(char);
            let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
            let ans = result(txt);
            char = "*";
            output.value = ans + char;
            c = true;
        }
    }
    dotcnt = false;
});

slash.addEventListener("click", function (e) {
    let txt = output.value;
    if (txt != "" && !c) {
        char = "/";
        output.value = txt + char;
        c = true;
    }
    else if (c) {
        let n = txt.length;
        let lastchar = txt[n - 1];
        if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            char = "/";
            txt = txt.substring(0, n - 1) + char;
            output.value = txt;
        }
        else {
            let numArray = txt.split(char);
            let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
            let ans = result(txt);
            char = "/";
            output.value = ans + char;
            c = true;
        }
    }
    dotcnt = false;
});

equal.addEventListener("click", function (e) {
    let txt = output.value;
    let n = txt.length;
    let lastchar = txt[n - 1];
    if (c && lastchar != "+" && lastchar != "-" && lastchar != "*" && lastchar != "/") {
        let numArray = txt.split(char);
        let nums = new Array(parseFloat(numArray[0]), parseFloat(numArray[1]));
        let ans = result(txt);
        output.value = ans;
        char = "";
        c = false;
    }
    txt=output.value;
    if (txt.indexOf(".")==-1){
        dotcnt = false;
    }
});

clear.addEventListener("click", function (e) {
    let txt = output.value;
    let n = txt.length;
    let lastchar = txt[n - 1];
    if (lastchar == "+" || lastchar == "/" || lastchar == "-" || lastchar == "*") {
        char = "";
        c = false;
    }
    else if(lastchar=="."){
        dotcnt=false;
    }   
    output.value = txt.substring(0, txt.length - 1);
});

allClear.addEventListener("click", function (e) {
    char = "";
    c = false;
    dotcnt=false;
    output.value = "";
});

// output.addEventListener("keydown", function (e) {
//     console.log(e.charCodeAt);
//     // if (e.charCode < 42 || e.charCode > 57)
//     // {
//     //     e.preventDefault();
//     // }
// });