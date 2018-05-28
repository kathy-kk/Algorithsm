const quickUnionUF = (n) => {
   const id = new Array(n).map((value, index) => {
     return index
   });
   const sz = new Array(n).fill(1);

   const root = (i) => {
     while(i != id[i]) {
       id[i] = id[id[i]];
       i = id[i];
      }
     return i
   } 
   const connected = (p, q) => {
      return root(p) == root(q);
   }
   const union = (p, q) => {
      const i = root(p);
      const j = root(q);
      if (i == j) return;
      if (sz[i] < sz[j]){
        id[i] = j;
        sz[j] += sz[i]
      }else{
        id[j] = i;
        sz[i] += sz[j];
      }
   }
}