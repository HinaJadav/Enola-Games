let clicksound = new Audio("mixkit-select-click-1109 (mp3cut.net).mp3")
let winsound = new Audio("mixkit-video-game-win-2016.mp3")
let drawsound = new Audio("mixkit-negative-answer-lose-2032.mp3")


sum = 2

a = 0
b = 0
c = 0
d = 0
e = 0
f = 0
g = 0
h = 0
i = 0


document.getElementById('smallcont').addEventListener('click', function () {
    clicksound.play()
})

document.getElementById('btn0').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn0').innerText = 'X'
        document.getElementById('btn0').disabled = true
        a = a + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn0').innerText = '0'
        document.getElementById('btn0').disabled = true
        a = a + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn1').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn1').innerText = 'X'
        document.getElementById('btn1').disabled = true
        b = b + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn1').innerText = '0'
        document.getElementById('btn1').disabled = true
        b = b + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn2').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn2').innerText = 'X'
        document.getElementById('btn2').disabled = true
        c = c + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn2').innerText = '0'
        document.getElementById('btn2').disabled = true
        c = c + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn3').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn3').innerText = 'X'
        document.getElementById('btn3').disabled = true
        d = d + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn3').innerText = '0'
        document.getElementById('btn3').disabled = true
        d = d + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn4').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn4').innerText = 'X'
        document.getElementById('btn4').disabled = true
        e = e + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn4').innerText = '0'
        document.getElementById('btn4').disabled = true
        e = e + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn5').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn5').innerText = 'X'
        document.getElementById('btn5').disabled = true
        f = f + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn5').innerText = '0'
        document.getElementById('btn5').disabled = true
        f = f + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn6').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn6').innerText = 'X'
        document.getElementById('btn6').disabled = true
        g = g + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn6').innerText = '0'
        document.getElementById('btn6').disabled = true
        g = g + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn7').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn7').innerText = 'X'
        document.getElementById('btn7').disabled = true
        h = h + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn7').innerText = '0'
        document.getElementById('btn7').disabled = true
        h = h + 1
        check()
    }
    sum = sum + 1
})
document.getElementById('btn8').addEventListener('click', function () {

    if (sum % 2 == 0) {
        document.getElementById('btn8').innerText = 'X'
        document.getElementById('btn8').disabled = true
        i = i + 10
        check()
    }
    if (sum % 2 !== 0) {
        document.getElementById('btn8').innerText = '0'
        document.getElementById('btn8').disabled = true
        i = i + 1
        check()
    }
    sum = sum + 1
})



function check() {
    
    console.log('---------------------------')

    abc = a + b + c;
    def = d + e + f;
    ghi = g + h + i;
    adg = a + d + g;
    beh = b + e + h;
    cfi = c + f + i;
    aei = a + e + i;
    gec = g + e + c;

    total = a + b + c + d + e + f + g + h + i

    setTimeout(() => {
        if ((abc == 3) || (def == 3) || (ghi == 3) || (adg == 3) || (beh == 3) || (cfi == 3) || (aei == 3) || (gec == 3)) {
            winsound.play()
            alert('0 WON!!')
            location.reload()

        }

        if ((abc == 30) || (def == 30) || (ghi == 30) || (adg == 30) || (beh == 30) || (cfi == 30) || (aei == 30) || (gec == 30)) {
            winsound.play()
            alert('X WON!!')
            location.reload()

        }


        if ((total == 54) && (abc !== 30) && (def !== 30) && (ghi !== 30) && (adg !== 30) && (beh !== 30) && (cfi !== 30) && (aei !== 30) && (gec !== 30) && (abc !== 3) && (def !== 3) && (ghi !== 3) && (adg !== 3) && (beh !== 3) && (cfi !== 3) && (aei !== 3) && (gec !== 3)) {
            drawsound.play()
            //    setTimeout(()=>{
            alert('DRAW!!')
            location.reload()
            //    },100)

        }

        console.log(total)


    }, 10)

}

