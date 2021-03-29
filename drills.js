/* 5. URLify a string
    A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

    Input: tauhida parveen

    Output: tauhida%20parveen

    Input: www.thinkful.com /tauh ida parv een

    Output: www.thinkful.com%20/tauh%20ida%20parv%20een

    Linear time O(n)
*/

const URLify = (str) => {
  return str.trim().replace(/\s/g, '%20');
};

URLify('tauhida parveen');

/* 6. Filtering an array
    Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

    Linear time O(n)
*/

const filterArray = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const item = arr.shift();
    if (item >= 5) arr.push(item);
  }
  return arr;
};

filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [5,6,7,8,9]

/* 7. Max sum in the array
    You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

    Input: [4, 6, -3, 5, -2, 1]
    Output: 12

    Linear time O(n)
*/

const maxSum = (arr) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let item of arr) {
    tempSum += item;
    maxSum = Math.max(maxSum, tempSum);
    if (tempSum < 0) tempSum = 0;
  }
  return maxSum;
};

maxSum([4, 6, -3, 5, -2, 1]);

/* 8. Merge arrays
    Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

    Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
    Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

    Linear time O(n)
*/

const mergeArrays = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a - b);
};

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

/* 9. Remove characters
    Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
    Output: 'Bttl f th Vwls: Hw vs. Grzny'

    Polynomial time O(n^k)
 */

const removeChar = (string, deli) => {
  let tempArr = [];
  let newString = [];
  let outputString = '';
  for (let i = 0; i < deli.length; i++) {
    tempArr.push(deli[i]);
  }
  for (let j = 0; j < string.length; j++) {
    let caught = false;
    tempArr.forEach((i, index) => {
      if (i === string[j]) {
        caught = true;
      }
      if (tempArr.length - 1 === index && caught === false)
        newString.push(string[j]);
    });
  }
  for (let k = 0; k < newString.length; k++) {
    outputString += newString[k];
  }
  return outputString;
};

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

/* 10. Products
    Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

    Input:[1, 3, 9, 4]
    Output:[108, 36, 12, 27]
 */

const products = (arr) => {
  let products = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let tempArray = arr.filter((j) => j !== arr[i]);
    temp = tempArray.reduce((acc, cur) => acc * cur);
    products.push(temp);
  }
  return products;
};

products([1, 3, 9, 4]);

/* 11. 2D array
    Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
 */

const TwoDArr = (array) => {
  const rows = [];
  const columns = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) rows.push(i);
  }
  for (let num in rows) {
    for (let j = 0; j < array[num].length; j++) {
      if (array[num][j] === 0 && !columns.includes(0)) {
        columns.push(j);
      }
    }
  }
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (columns.includes(x) || rows.includes(y)) {
        array[y][x] = 0;
      }
    }
  }
  return array;
};

let twoD = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

TwoDArr(twoD);

/* 12. Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

    Input: amazon, azonma
    Output: False

    Input: amazon, azonam
    Output: true
 */

const strRotation = (str1, str2) => {
  for (let i = 0; i < str2.length; i++) {
    str2 = str2.slice(1) + str2[0];
    if (str1 === str2) {
      return true;
    }
  }
  return false;
};

strRotation('amazon', 'azonma');
strRotation('amazon', 'azonam');
