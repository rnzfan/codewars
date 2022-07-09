function domainName(url) {
  let regEx = /^(https?\:\/\/)?(www.)?([^.]*)/;
  return regEx.exec(url)[3];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.net/"));
console.log(domainName("google.com"));