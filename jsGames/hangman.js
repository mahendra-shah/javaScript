const input = require("readline-sync")

function hangman(word) {
    console.log('Welcome to Hangman Game!\n');
    stages = [
        "    +----+",
        "    |    |",
        "    O    |",
        "   /|\\   |",
        "   / \\   |",
        "         |",
        "---------------"
    ];
    let wrong = 0;
    let wList = word.split('');
    let board = "_".repeat(word.length).split('');
    let win = false;
    let hangman = ""
    while (wrong < (stages.length)) {
        let char = input.question('Please Hago kuch! : '+'\n')
        if (wList.includes(char)) {
            cind = wList.indexOf(char);
            board.splice(cind, 1, char)

        } else {
            hangman+=stages[wrong]+"\n"
            wrong+=1
            console.log(hangman);

        };
        console.log(board.join(' '));

        if (!board.includes('_')) {
            console.log('win!');
            console.log(board.join('-'));
            win = true
            break;

        };

    };
    if (!win) {
        console.log(hangman);
        console.log(`loose ;) [ ${word} ] tha word`);
    };

};

let word = 'Hello'
hangman(word)