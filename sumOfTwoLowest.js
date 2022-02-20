function sumTwoSmallestNumbers(numbers) {  
    const f = (a,b) => (a-b);
    return (numbers.sort(f)[0] + numbers.sort(f)[1])
  }