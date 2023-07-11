/**
    // Viết hàm nhận vào 2 số a, b
    // Trả về số gần 100 nhất
    // nearestTo100(89, 180) // 89
 */

function nearestTo100(num1, num2) {
    return Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;
}

console.log(nearestTo100(89, 189));
console.log(nearestTo100(10, 130)); 