const math = {
    pi: 3.1415926535, // returns pi with a few decimal digits
    e: 2.7182818284, // returns e with a few decimal digits
    abs(num) {
        if (num < 0)
            return -num;
        return num;
    },
    pow(num, power) {
        num = this.abs(num);
        let powNum = 1;
        for (let i = 0; i < power; i++)
            powNum = powNum * num;
        return powNum;
    },
    square(num){
        num = this.abs(num);
        return num*num;
    },
    sqrt(num){
        num = this.abs(num);
    },
}
const num = -5;

console.log(math.abs(num));
console.log(math.square(num));
console.log(math.pow(num, 3));
console.log(math.sqrt(num));