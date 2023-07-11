/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findMaxDiff(arr) {
    if (arr.length < 2) {
        return 0;
    }
    let maxDiff = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j <= arr.length; j++) {
            let currentMaxDiff = Math.abs(arr[i] - arr[j]);
            maxDiff = maxDiff < currentMaxDiff ? currentMaxDiff : maxDiff;
        }
    }
    return maxDiff;
}

console.log(findMaxDiff([1, 2, 3, 8, 9]));

console.log(findMaxDiff([1, 2, 3, 18, 9]));

console.log(findMaxDiff([13, 2, 3, 8, 9]));