

//таймер настоящего времени

/*//const daysBlock = document.querySelector(".timer__days")
const hoursBlock = document.querySelector(".timer__hours")
const minutesBlock = document.querySelector(".timer__minutes")
const secondsBlock = document.querySelector(".timer__seconds")


const updateTimer = () => {
  const date = new Date ()


//const days = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()


//const fdays = days < 10 ? "0" + days : days
const fHours = hours < 10 ? "0" + hours : hours
const fminutes = minutes < 10 ? "0" + minutes : minutes
const fseconds = seconds < 10 ? "0" + seconds : seconds


//daysBlock.textContent = fdays
hoursBlock.textContent = fHours
minutesBlock.textContent = fminutes
secondsBlock.textContent = fseconds
}

//console.dir(date);
console.dir(hours);
console.dir(minutes);
console.dir(seconds);*/


/*updateTimer()
/*setInterval(() => {
    console.log("tick");
}, 1000)
*/
/*setInterval(updateTimer, 500)*/


//Таймер обратного отсчёта 

/*const daysBlock = document.querySelector(".timer__days")
const hoursBlock = document.querySelector(".timer__hours")
const minutesBlock = document.querySelector(".timer__minutes")
const secondsBlock = document.querySelector(".timer__seconds")


const updateTimer = () => {
  const date = new Date ()
const dateDeadline = new Date("1 september 2022").getTime()
const timeRemaining = (dateDeadline - date) / 1000


const days = Math.floor(timeRemaining / 60 /60/ 24)
const hours = Math.floor(timeRemaining / 60 /60)
const minutes = Math.floor((timeRemaining / 60) % 60)
const seconds = Math.floor(timeRemaining % 60)


const fdays = hours < 10 ? "0" + days : days
const fHours = hours < 10 ? "0" + hours : hours
const fminutes = minutes < 10 ? "0" + minutes : minutes
const fseconds = seconds < 10 ? "0" + seconds : seconds


daysBlock.textContent = fdays
hoursBlock.textContent = fHours
minutesBlock.textContent = fminutes
secondsBlock.textContent = fseconds

}

updateTimer()
/*setInterval(() => {
    console.log("tick");
}, 1000)
*/
//setInterval(updateTimer, 500)

/*const date = new Date().getTime()
const dateDeadline = new Date("1 september 2022").getTime()

console.log(date);
console.log(dateDeadline);
console.log(dateDeadline - date);*/


//остановка таймера на 00:00:00:00

const daysBlock = document.querySelector(".timer__days")
const hoursBlock = document.querySelector(".timer__hours")
const minutesBlock = document.querySelector(".timer__minutes")
const secondsBlock = document.querySelector(".timer__seconds")

let interval

//склонения для дней, часов, минут и секунд

const numwordsec = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

const numwordmin = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

const numwordhours = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

const numworddays = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}


// обратный отсчёт 
const updateTimer = () => {
  const date = new Date ()
const dateDeadline = new Date("27 april 2022").getTime()
const timeRemaining = (dateDeadline - date) / 1000


const days = Math.floor(timeRemaining / 60 /60/ 24)
const hours = Math.floor((timeRemaining / 60 /60)% 24)
const minutes = Math.floor((timeRemaining / 60) % 60)
const seconds = Math.floor(timeRemaining % 60)


const fdays = hours < 10 ? "0" + days : days
const fHours = hours < 10 ? "0" + hours : hours
const fminutes = minutes < 10 ? "0" + minutes : minutes
const fseconds = seconds < 10 ? "0" + seconds : seconds


daysBlock.textContent = fdays
hoursBlock.textContent = fHours
minutesBlock.textContent = fminutes
secondsBlock.textContent = fseconds


secondsBlock.nextElementSibling.textContent = numwordsec(seconds, ["секунда" ,"секунды" ,"секунд"])
minutesBlock.nextElementSibling.textContent = numwordmin(minutes, ["минута" ,"минуты" ,"минут"])
hoursBlock.nextElementSibling.textContent = numwordhours(hours, ["час" ,"часа" ,"часов"])
daysBlock.nextElementSibling.textContent = numworddays(days, ["день" ,"дня" ,"дней"])
//numword(1025, ["секунда" ,"секунды" ,"секунд"])
//numword2(22, ["минута" ,"минуты" ,"минут"]));
//numwordhours(23, ["час" ,"часа" ,"часов"]))
//numworddays(22, ["день" ,"дня" ,"дней"]))

if (timeRemaining <=0) {
    clearInterval(interval)
    daysBlock.textContent = "00"
    hoursBlock.textContent = "00"
    minutesBlock.textContent = "00"
    secondsBlock.textContent = "00"

    daysBlock.style.color = 'red';
    hoursBlock.style.color = 'red';
    minutesBlock.style.color = 'red';
    secondsBlock.style.color = 'red';
}

}

updateTimer()
/*setInterval(() => {
    console.log("tick");
}, 1000)
*/
interval = setInterval(updateTimer, 500)


//склонения для секунд

/*const numword = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

console.log(numword(1025, ["секунда" ,"секунды" ,"секунд"  ]));*/


//склонения для минут

/*const numword2 = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

console.log(numword2(22, ["минута" ,"минуты" ,"минут"]));*/


//склонения для часов

/*const numwordhours = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

console.log(numwordhours(23, ["час" ,"часа" ,"часов"]))*/


//склонения для дней

/*const numworddays = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10
    
    if (value > 10 & value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

console.log(numworddays(22, ["день" ,"дня" ,"дней"]))*/
