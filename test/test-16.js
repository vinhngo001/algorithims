/* 
    Write a function that splits an array (first argument) into groups 
    the length of size(second argument) and returns them as a two-dimensional array.
    Example
    chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/

function chunkArrayInGroups(arr, n) {
    var temp = [], result = [], j = 1;
    for(let i = 0 ; i < arr.length; i++){
        if(j <= n){
            temp.push(arr[i]);
            j++;
        }
        if(j > n || i == arr.length - 1){
            j = 1;
            result.push(temp);
            temp = [];
        }
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));