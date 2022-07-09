function ipToNum(ip) {
  return ip.split(".").map(Number).reduce((previous, current) => previous*256 + current, 0);
}

console.log(ipToNum("0.1.1.3"));