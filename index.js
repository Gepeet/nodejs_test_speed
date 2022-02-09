let number = 0
let initialTime = 0
let firstTime = new Date()


for (i = 0; i < 100000; i++) {
    number = number + 1
    if(number === 100000){
        initial()
    }else{
        console.log(number)
    }
}

function initial(){
    console.log(`Time started : ${firstTime}`)
    const newTime = new Date()
    console.log(`Time ended : ${newTime}`)
    const subtractedTime = newTime - firstTime

    console.log(`Total Time: ${subtractedTime} millisecond/s`)
}
