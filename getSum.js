function getSum(a, b) {
    if (a > b) {
        [a, b] = [b, a]; 
    }
    if (a==b) return a;

    let sum = 0;
    let temp = a;
    while (temp != b) {
        sum = sum + temp;
        temp++;
    }
    sum = sum + b;
    return sum;
}