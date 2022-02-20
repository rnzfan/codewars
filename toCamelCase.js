let str = "the-stealth-warriorstr";

String.prototype.replaceAt = function (index, char) {
    let a = this.split("");
    a[index] = char;
    return a.join("");
  }

function toCamelCase(str) {
    let pattern = /[\-\_]/g;
    let match;

    while (match = pattern.exec(str)) {
        str = str.replaceAt(match.index+1, str[match.index+1].toUpperCase())
    }

    return str.replace(pattern, "");
  }

console.log(toCamelCase(str));
