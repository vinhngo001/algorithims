// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào

// sol 1
function findMax1() {
    const numbers = Array.from(arguments);
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        max = numbers[i] > max ? numbers[i] : max;
    }
    return max;
}
console.log(findMax1(-6, 5, 4));

function findMax2(a, b, c) {
    const numbers = [];
    numbers.push(a, b, c);
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        max = numbers[i] > max ? numbers[i] : max;
    }
    return max;
}
console.log(findMax2(-6, 5, 23));


function findMax3(a, b, c) {
    var max = a;
    if (b > max && c < max) {
        max = b;
    } else if (b > max && c > max && c < b) {
        max = b;
    } else if (c > max && b < max) {
        max = c;
    } else if (c > max && b > max && b < c) {
        max = c;
    } else {
        max = a;
    }
    return max;
}
console.log(findMax3(-11, 12, 4));
