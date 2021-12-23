

function sum(a, b) {
    return a + b
}

function calc(a, b, callback) {
    return callback(a, b)
}

console.log(calc(2, 6, sum))


function date(callback) {
    console.log(new Date)
    setTimeout(()=>{
        let date = new Date
        callback(date)
    }, 2000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)