
let list = (numCards) => {
    var newList = []
    var i = 0;
    while (i < numCards){
        newList.push(i);
        i++;
    }
    return newList
}

function shuffle(l, numPerformed){
    for (var shuffles = 0; shuffles < numPerformed; shuffles++){
        var heads = 0;
        var tails = 0;
        var toss = [];
        for (var card = 0; card < l.length; card++){
            var x = Math.floor(Math.random() * 2);
            toss.push(x);
            if (x == 0){
                heads++;
            }else{
                tails++;
            }
        }
        var left = []; 
        var right = []; 
        for (var i = 0; i < l.length; i++){
            i < heads ? left.push(i) : right.push(i);
        }

        var shuffled = [];
        for (var card = 0; card < numCards; card++){
            if (toss[card] == 0){
                shuffled.push(left.shift());
            }else if (toss[card] == 1){
                shuffled.push(right.shift());
            }
        }
        l = shuffled;
    }
    return l
}

function test_order(i,j,l){ 
    let n = 0;
    let trials = 5;
    for (let count = 0; count < trials; count++) { 
        let arrayDeepCopy = [...l];
        shuffle(arrayDeepCopy);
                console.log(arrayDeepCopy)
        if (arrayDeepCopy.indexOf(i) < arrayDeepCopy.indexOf(j)) n++;
        
    }
    var prob = n/trials;
    return  prob;
}

//Argument Inputs
let numCards = parseInt(prompt("Enter number of cards in deck: "))
let l = list(numCards)
let numPerformed = parseInt(prompt("Enter number of shuffles to perform on deck: "));
let i = parseInt(prompt("i: "))
let j = parseInt(prompt("j: "))

//Execution
console.log(test_order(i,j,l))