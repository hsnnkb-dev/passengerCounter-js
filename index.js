//document.getElementById("count-el").innerText = 10;

// 1.
// let myAge = 22;
// 2.
// console.log(myAge);

// 3.
// const humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// 4.
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = 100;
// console.log(bonusPoints);
// bonusPoints = 25;
// console.log(bonusPoints);
// bonusPoints = 70;
// console.log(bonusPoints);

let count = 0;
//console.log(count);
let saveEl = document.getElementById("save-el");

function increment() {
    //console.log("The button was clicked!")
    count += 1;
    document.getElementById("count-el").textContent = count;
}

// function decrement() {
//     //console.log("The button was clicked!")
//     count -= 1;
//     document.getElementById("count-el").textContent = count;
// }

function save() {
    countMessage = count + ", ";
    saveEl.textContent += countMessage;
    //console.log(count);
    resetCounter();
}

function resetCounter() {
    count = 0;
    document.getElementById("count-el").textContent = count;
}