function splitStrings(str) {
    let evenStr = '';
    if (str.length%2 == 1) {
        evenStr = str.padEnd(str.length+1, '_');
    } else {
        evenStr = str;
    }
    let array = [];
    while (evenStr.length) {
        array.push(evenStr[0]+evenStr[1]);
        evenStr = evenStr.slice(2);
    }

    return array;
}

console.log(splitStrings("abcefti"));