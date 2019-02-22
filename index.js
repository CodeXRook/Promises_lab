const alwaysSuccessful = () => new Promise(resolve => setTimeout(resolve, 1000))
const alwaysFailure = () => new Promise((resolve, reject) => setTimeout(reject, 1000))
const randomNumber = () => new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random()*10)), 1000))
const sometimesSuccessful = () => randomNumber().then(k => k % 2 === 0 ? alwaysSuccessful() : alwaysFailure())

let alwaysSuccessful = new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000);
})
.then


let alwaysFailure = new Promise(funtion(resolve, reject){
    setTimeout(() => resolve(1), 1000);
})
.then