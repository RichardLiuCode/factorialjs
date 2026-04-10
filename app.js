async function calc(input) {
    if (input < 0) {
        return "input must be larger or equal to 0";
    } else if (input != Math.round(input)) {
        return "input must be an integer";
    } else if (input > 20) {
        input = BigInt(input.toString());
        let result = 1n;
        let n = input;
        while (n > 1n) {
            result = result * n;
            n--;
        }
        return result;
    } else {

        let result = 1;
        let n = input;
        while (n > 1) {
            result = result * n;
            n--;
        }
        return result;
    }
}
module.exports = { calc };