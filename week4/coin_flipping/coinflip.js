function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// Asynchronous Function
function fiveHeads() {
    //Promise
    return new Promise( (resolve, reject) => {
        //Variables
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;

        //Attempts
        while(headsCount < 5 && maxAttempts >= attempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        
        //Resolve and Reject
        if (attempts <= maxAttempts) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject(`Attempts have exceeded ${maxAttempts} flips.`)
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
    
console.log( "When does this run now?" );