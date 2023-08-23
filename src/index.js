module.exports = function towelSort (matrix) {
  let i = 0;
  if (matrix != undefined) {
    for (item of matrix) {
      i % 2 === 0 ? item = item : item = item.reverse();
      i++;
    }
    return matrix.flat();
  }
  else 
    return [];
}