const quickFindUF = (n) => {
  const id = new Array(n).map((value, index) => {
    return index
  });
  const connected = (p, q) => {
    return id[p] == id[q]
  }
}