/**
 * viết hàm first trả về giá trị đầu tiên của mảng, 
 * nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
 * (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
 * Tham số:
 * - array: mảng gốc
 * - n: số phần tử trả về
 */

function first(arr, n) {
    if (!n) {
        return arr.slice(0, 1);
    }

    if (n && n < 0) {
        return [];
    }

    return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));