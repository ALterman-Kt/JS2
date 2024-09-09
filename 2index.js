function isPrime(num){
    if ((num < 2) || (num > 1000)) {
        return "неверно!";
    } else {
        for (let i = 2; i < num; i++){ //делится на два
            if (num % i === 0) {
                return false;
            }
        }
        return true;//не делится
    }
}

let randNum = Math.floor(Math.random() * 2000);
let a = isPrime(randNum);
console.log("Number " + randNum + ' is Prime = ' + a);