const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalArr = transpose(letters);
    const verticalJoin = verticalArr.map(ls => ls.join(''));
    const backwards = backWardsArray(letters);
    const backwardsVert = backWardsArray(verticalArr);
    const backwardsHorizontalJoin = backwards.map(ls => ls.join(''));
    const backwardsVerticalJoin = backwardsVert.map(ls => ls.join(''));
  
    return check(horizontalJoin, word) || check(verticalJoin, word) || check(backwardsHorizontalJoin, word) || check(backwardsVerticalJoin, word)
  
  };
  
  const backWardsArray = (letters) =>{
    const backwards = letters.map(value => value.reverse());
    return backwards;
  };
  
  const check = (arr, word) =>{
    for (l of arr) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  const transpose = function(matrix) {
    // Put your solution here
    let newMatrix = [];
  
    const row = matrix[0].length;
    const column = matrix.length;
  
    for (let i = 0; i < row; i++) {
      const newRow = [];
      for (let j = 0; j < column; j++) {
        newRow.push(matrix[j][i]);
      }
      newMatrix.push(newRow);
    }
  
    return newMatrix;
  };
  
  module.exports = wordSearch;
  
