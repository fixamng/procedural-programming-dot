arr1 = [1, 2, 3];
arr2 = [3, 4, 5];

const dot_product = (arr1, arr2) => {
  let result = 0;

  for (i = 0; i < arr1.length; i++) {
    for (i = 0; i < arr2.length; i++) {
      result += arr1[i] * arr2[i];
    }
  }
  if (result === 0) {
    return "Othagonal";
  } else {
    return `Not Othagonal, product is ${result}`;
  }
};

console.log(dot_product(arr1, arr2));
