


let chance = "p1"
const playercard = document.getElementById("playercard")
const gamecard = document.getElementById("gamecard")
const x = document.getElementById("player1")
const y = document.getElementById("player2")

const player1wincount = document.getElementById("player1wincount")
const player2wincount = document.getElementById("player2wincount")
const drawcount = document.getElementById("drawcount")
const totalcount = document.getElementById("totalcount")


let p1count = 0, p2count = 0, dcount = 0, tcount = 0

let playername1, playername2
function startgame() {

    playername1 = document.getElementById("playername1").value
    playername2 = document.getElementById("playername2").value


    if (playername1 === "" || playername2 === "") {
        console.log("name requrired");
        document.getElementById("worning").innerHTML = ` <div class="alert alert-danger"> please Enter Name</div>`
        setTimeout(() => {
            document.getElementById("worning").innerHTML = ""
        }, 2000)


    } else {
        playercard.classList.add("d-none")
        gamecard.classList.remove("d-none")
        x.innerHTML = document.getElementById("playername1").value
        y.innerHTML = document.getElementById("playername2").value

        const data1 = localStorage.getItem("drawcount")
      drawcount.innerHTML= JSON.parse(data1)
        const data2 = localStorage.getItem("totalcount")
        totalcount.innerHTML=JSON.parse(data2)
        const data3 = localStorage.getItem("player1wincount")
        player1wincount.innerHTML=JSON.parse(data3)
        const data4 = localStorage.getItem("player2wincount")
        player2wincount.innerHTML=JSON.parse(data4)


        document.getElementById("output").innerHTML=` <div class="alert alert-dark text-center  animate__animated animate__backInDown ">☝☝☝☝☝☝ 👉👉Previous Tournaments Data 👈👈☝☝☝☝☝☝</div>`
        setTimeout(function () {
            document.getElementById("output").innerHTML = ""
        }, 4000)


    }
  
}


function game(id) {
    const box = document.getElementById(id)
    const a = document.getElementById("chancep1")
    const b = document.getElementById("chancep2")
    const m = document.getElementById("chancebg1")
    const p = document.getElementById("chancebg2")
    const isRed = box.classList.contains("bg-danger")
    const isGreen = box.classList.contains("bg-success")
    // console.log(isRed);
    //console.log();
    if (!isRed && !isGreen) {

        if (chance === "p1") {
            // document.getElementById("turn2").innerHTML = `<div class="alert alert-success"> its your turn </div>`
            // setTimeout(function () {
            //     document.getElementById("turn2").innerHTML = ""
            // }, 3000)
            
            box.classList.add("bg-danger")
            box.innerHTML = `<h1>X</h1>`
            a.classList.remove("progress")
            b.classList.add("progress")
            m.classList.remove("bg-danger")
            m.classList.remove("progress-bar-striped")
            m.classList.remove("progress-bar-animated")
            m.classList.add("alert")
            m.classList.add("alert-danger")
            p.classList.remove("alert")
            p.classList.remove("alert-success")
            p.classList.add("bg-success")
            p.classList.add("progress-bar-striped")
            p.classList.add("progress-bar-animated")
            

            chance = "p2"
        } else {
            // document.getElementById("turn2").innerHTML = `<div class="alert alert-danger"> its your turn </div>`
            // setTimeout(function () {
            //     document.getElementById("turn2").innerHTML = ""
            // }, 3000)
            
            box.classList.add("bg-success")
            box.innerHTML = `<h1>O</h1>`
            a.classList.add("progress")
            b.classList.remove("progress")
            p.classList.remove("bg-success")
            p.classList.remove("progress-bar-striped")
            p.classList.remove("progress-bar-animated")
            p.classList.add("alert")
            p.classList.add("alert-success")
            m.classList.remove("alert")
            m.classList.remove("alert-danger")
            m.classList.add("bg-danger")
            m.classList.add("progress-bar-striped")
            m.classList.add("progress-bar-animated")
            


            chance = "p1"
        }

    }

    if (!winner() && checkall()) {
        document.getElementById("output").innerHTML = `<div class="alert alert-warning animate__animated animate__heartBeat animate__infinite text-center">🥴🥴 DRAW MATCH 🥴🥴 </div>`

        setTimeout(function () {
            document.getElementById("output").innerHTML = ""
        }, 3000)
        setTimeout(function () {
            reserGame()

        }, 3000)
        dcount++
    }
    // totalwin()


}
function winner() {
    return (




        checkwimmer("b1", "b2", "b3", "bg-danger") ||
        checkwimmer("b4", "b5", "b6", "bg-danger") ||
        checkwimmer("b7", "b8", "b9", "bg-danger") ||
        checkwimmer("b1", "b4", "b7", "bg-danger") ||
        checkwimmer("b2", "b5", "b8", "bg-danger") ||
        checkwimmer("b3", "b6", "b9", "bg-danger") ||
        checkwimmer("b1", "b5", "b9", "bg-danger") ||
        checkwimmer("b3", "b5", "b7", "bg-danger") ||
        checkwimmer("b1", "b2", "b3", "bg-success") ||
        checkwimmer("b4", "b5", "b6", "bg-success") ||
        checkwimmer("b7", "b8", "b9", "bg-success") ||
        checkwimmer("b1", "b4", "b7", "bg-success") ||
        checkwimmer("b2", "b5", "b8", "bg-success") ||
        checkwimmer("b3", "b6", "b9", "bg-success") ||
        checkwimmer("b1", "b5", "b9", "bg-success") ||
        checkwimmer("b3", "b5", "b7", "bg-success")

    )





    // const isBOX1Green = document.getElementById("b1").classList.contains("bg-success")
    // const isBOX2Green = document.getElementById("b2").classList.contains("bg-success")
    // const isBOX3Green = document.getElementById("b3").classList.contains("bg-success")
    // if (isBOX1Green && isBOX2Green && isBOX3Green) {
    //     console.log("  is winner");
    // }


}


function checkwimmer(id1, id2, id3, color) {
    const totalwin = []
    const isBOX1 = document.getElementById(id1).classList.contains(color)
    const isBOX2 = document.getElementById(id2).classList.contains(color)
    const isBOX3 = document.getElementById(id3).classList.contains(color)
    const m = document.getElementById("playername1").value
    const n = document.getElementById("playername2").value

    if ((isBOX1 && isBOX2 && isBOX3)) {
        console.log(`${color} is winner`);
        color === "bg-danger" ? document.getElementById("output").innerHTML = `<div class="alert alert-danger  text-center  animate__animated animate__backInLeft"> 
             ${m} is winner 🎇🎇🤩🤩</div>` : document.getElementById("output").innerHTML = `<div class="alert alert-success  text-center  animate__animated animate__backInRight"> 
             ${n} is winner 💥💥🤑🤑</div>`



        setTimeout(function () {
            document.getElementById("output").innerHTML = ""
        }, 3000)
        setTimeout(function () {
            reserGame()

        }, 3000)
        color === "bg-danger" ? p1count++ : p2count++
        return true

    } return false

    
}
 
function reserGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).innerHTML = i

        document.getElementById(`b${i}`).classList.remove("bg-danger")
        document.getElementById(`b${i}`).classList.remove("bg-success")
  }
  tcount++
  console.log(tcount);
  
  localStorage.setItem("drawcount", JSON.stringify(dcount))
  localStorage.setItem("totalcount", JSON.stringify(tcount))
  localStorage.setItem("player1wincount", JSON.stringify(p1count))
  localStorage.setItem("player2wincount", JSON.stringify(p2count))
 
    stat()
}
function stat() {
    totalcount.innerHTML = tcount
    drawcount.innerHTML = dcount
    player1wincount.innerHTML = p1count
    player2wincount.innerHTML = p2count
}
function checkall() {
    let boxcount = 0
    for (let i = 1; i <= 9; i++) {


        const isRed = document.getElementById(`b${i}`).classList.contains("bg-danger")
        const isGreen = document.getElementById(`b${i}`).classList.contains("bg-success")
        if (isRed || isGreen) {
            boxcount++

        }

    }
    return boxcount === 9 ? true : false

}


// gsap.from(".circle", { scale: 0, repeat: -2, yoyo: true, duration: 0.9})


const cta = document.getElementById("cta")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const tl = gsap.timeline()
tl.from("#cta", {
    scale: 2,
    opacity: 0,
    duration: 0.5
})

tl.from(desc, {
    rotation: 360,
    scale: 2,
    opacity: 0,
    duration: 1
})
tl.from(title, {
    x: "-200vh",
    duration: 1
})
// function totalwin() {
//     let twin = 0
//     for (let i = 1; i <= 9; i++) {


//         const isRed = document.getElementById(`b${i}`).classList.contains("bg-danger")
//         const isGreen = document.getElementById(`b${i}`).classList.contains("bg-success")
//         if (isRed || isGreen) {
//             twin++
//             document.getElementById("player1wincount").innerHTML = twin
//         }

//     }


// }

