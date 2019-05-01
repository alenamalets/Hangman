function wrongGuessCount(word, guesses) {
    let fail = 0;
    let notFail = 0;
    guesses.forEach(element => {
        word.includes(element) ? notFail++ : fail++;
    });
    return fail;
}

console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)


function showGuess(word, guesses) {
    let strGuess = guesses.join("");
    let arrWord = word.split('');
    let newArr = [];
    arrWord.map(element => {
        strGuess.includes(element) ? newArr.push(element) : newArr.push("_")
    })
    return newArr.join(" ");

}

console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')


function isWinner(word, guesses) {
    if (wrongGuessCount(word, guesses) < 6 && !showGuess(word, guesses).includes("_"))
        return true;
    else return false;
}

console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false);
console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true);

// to read from the console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function next(word, guesses) {
    // check if lost
    if (wrongGuessCount(word, guesses) === 5) {
        console.log("You've lost!");
        return null;
    } 
    if (isWinner(word, guesses)) {
        console.log("You've won!");
        return null;
    }
    // ask for the next letter
    rl.question('next letter? ', answer => {
        const letter = answer.trim()[0];
        console.log('letter:', letter);
        next(word, guesses.concat([ letter ]));
        // do something with answer
    })
}
next('hello', [])

