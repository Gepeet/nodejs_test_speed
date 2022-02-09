let counter = 0
const dateOne = new Date()

const interval = setInterval(loop1, 1)

function loop1(){
    counter += 1
    if(counter < 100){
        loop()
    }else{
        clearInterval(interval)
    }
}

function loop(){
    let number = 0

    for (i = 0; i < 1000; i++) {
        number = number + 1
        if(number === 1000){
            initial()
        }else{
            console.log(number)
        }
    }
}

function initial(){
        const newTime = new Date()
        const subtractedTime = newTime - dateOne
        console.log(`Total Time: ${subtractedTime} millisecond/s`)
}
