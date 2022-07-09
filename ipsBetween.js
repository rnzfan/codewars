function ipsBetween(start, end) {
  let [_start, a, b, c, d] = /(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})/.exec(start);
  let [_end, e, f, g, h] = /(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})/.exec(end);
  return ( (h-d) + 256*(g-c) + 256*256*(f-b) + 256*256*256*(e-a) );

}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("10.0.0.10", "20.0.1.0"));