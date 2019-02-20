var randomnumber
var inpguesser = document.getElementById('inputguess')
var count
var output = document.getElementById("output")

function init() {
    randomnumber = Math.floor(Math.random() * 101)
    inpguesser.focus()
    document.getElementById("correct").style.display = 'none'
    count = 0
    output.innerHTML = "I'm thinking of a number between 0 and 100. "
    output.innerHTML += "Guess my number, and I'll tell if you are too high, too low, or correct"
    document.getElementById("ttt").innerHTML = randomnumber

}

function isInputNumber(evt) {

    var ch = String.fromCharCode(evt.which);

    if (!(/[a-zA-Z0-9]/.test(ch))) {
        evt.preventDefault();
    }
}

checkpass = () => {
    var pass = "123x44444" //ตัวอย่าง password

    if ((/[a-zA-Z0-9]{8,}/.test(pass))){
        alert("ตัวอักษรมากกว่า 8 ตัว และมีตัวหนังสือ")
    }else alert("ไม่เข้าเงืี่อนไข");
}

function entertosubmit() {
    var input = document.getElementById("inputguess");
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            checkguess()
        }
    });
}

function tryagain() {
    init()

}

function checkguess() {

    if (!inputguess.value == "" || inpguesser.value.match(numbers)) {
        count += 1
        if (randomnumber == inputguess.value) {
            // alert("Correct! "+time)
            showbutton()
            document.getElementById("inputguess").value = "";
            document.getElementById("output").innerHTML = count + " )Correct! "
        } else if (inpguesser.value < randomnumber) {
            //alert("Too Low")
            document.getElementById("inputguess").value = "";
            document.getElementById("output").innerHTML = count + " )Too Low"
        } else if (inpguesser.value > randomnumber) {
            //alert("Too High")
            document.getElementById("inputguess").value = "";
            document.getElementById("output").innerHTML = count + " )Too High"
        }
    } else alert("Insert Guess")
}

function showbutton() {
    document.getElementById("correct").style.display = 'block'
}