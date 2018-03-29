const subsets = function(arr) {
  if (arr.length === 0) return [[]];
  let value = arr.pop();
  let sub = subsets(arr);
  let len = sub.length;
  for (var i = 0; i < len; i++) {
    let elem = sub[i].slice();
    elem.push(value);
    sub.push(elem);
  }
  return sub;
};

console.log(subsets([1,2,3]));

const permutation = arr => {
  if (arr.length === 0){
    return [[]];
  }
  let value = arr[0];
  let perm = permutation(arr.slice(1));
  let result = [];
  for (var i = 0; i < perm.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      let newPerm = perm[i].slice();
      newPerm.splice(j, 0, value);
      result.push(newPerm);
    }
  }
  return result;
};

console.log(permutation([1,2,3]));
console.log(permutation([1,2,3,4]));
