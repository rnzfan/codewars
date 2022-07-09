function validParentheses(parens) {
  let match;
  while (match = /\(\)/.exec(parens)) {
    parens = parens.replaceAt(match.index, "");
    parens = parens.replaceAt(match.index, "");
  }
  if (parens == "") {
    return true;
  } else return false;

}

String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
}

console.log(validParentheses("(())()"));
