function findShort(s){ 
    return s.split(" ").map(w=>w.length).sort((a,b)=>(a-b))[0];
  }