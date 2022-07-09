function persistence(num) {
    if (num.toString().length == 1) {
        return 0;
    }
    return 1 + (persistence(num.toString().split('').reduce((a,b)=>(a*b), 1)));

}

console.log(persistence(25));