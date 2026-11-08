// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here
function countdown(count) {
    console.log(count)
    if (count > 0) {
        setTimeout(() => {
            
            countdown(count - 1)
        }, 1000);
    } else {
        console.log("Time's up!")
    }

}
countdown(5)
