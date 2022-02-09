let usersFinished = 0
const dateOne = new Date()

function user1(){
    loop()
}
function user2(){
    loop2()
}
function user3(){
    loop3()
}

function loop(){
    let number = 0
    let firstTime = new Date()

    for (i = 0; i < 1000; i++) {
        number = number + 1
        if(number === 1000){
            usersFinished +=1
            initial(firstTime)
        }else{
            console.log(number)
        }
    }
}
function loop2(){
    let number = 0

    let firstTime = new Date()

    for (i = 0; i < 1000; i++) {
        number = number + 1
        if(number === 1000){
            usersFinished += 1
            initial(firstTime)
        }else{
            console.log(number)
        }
    }
}
function loop3(){
    let number = 0
    let firstTime = new Date()

    for (i = 0; i < 1000; i++) {
        number = number + 1
        if(number === 1000){
            usersFinished += 1
            initial(firstTime)
        }else{
            console.log(number)
        }
    }
}

function initial({e}){
    if(usersFinished === 3){
        const newTime = new Date()
        const subtractedTime = newTime - dateOne
        console.log(`Total Time: ${subtractedTime} millisecond/s`)

    }else{
        console.log(`ended in Time: ${e} millisecond/s`)   
    }
    
}

user1()
user2()
user3()