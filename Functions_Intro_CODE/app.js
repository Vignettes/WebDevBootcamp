function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}


/* Below function is to create the same message 3 times in uppercase */

/* function rant(message) {
    for(let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}
 */
/* rant('beans'); */

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()


// define isSnakeEyes below:
/* 
function isSnakeEyes(numOne, numTwo) {
    if (numOne === 1 && numTwo === 1) {
        console.log("Snake Eyes!") }
        else (console.log("Not Snake Eyes!")) 
    }

isSnakeEyes(1,1);
isSnakeEyes(2,1); */

/* Return statement will end a functions execution AND specifies the value to be returned by that function */

