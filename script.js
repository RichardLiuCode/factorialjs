function getFactorial(input) {
    let result = 1;
    let n = input;
    while (n > 1) {
        result = result * n;
        n--
    }
    return result;
}
