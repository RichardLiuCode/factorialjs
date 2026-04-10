async function getFactorial(input) {
    if (input < 0) {
        throw new Error("input must be larger or equal to 0");
    } else if (input != Math.round(input)) {
        throw new Error("input must be an integer");
    } else {
        const calculate = await new Promise(function (resolve, reject) {
            let result = 1;
            let n = input;
            while (n > 1) {
                result = result * n;
                n--;
            }
            resolve(result);
        });
        return calculate;
    }
}
module.esports = { getFactorial };