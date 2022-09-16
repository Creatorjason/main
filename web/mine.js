const sha256 = require('crypto-js/sha256');

let fav_word = "Friendship_let"
let nonce = 0
function calHash(){
    return sha256(fav_word + String(nonce)).toString();
}


function mine(difficulty){
    while(calHash().substring(0, difficulty) !== Array(difficulty + 1).join("0")){
        nonce++
        console.log(calHash())
    }
}

// export default mine