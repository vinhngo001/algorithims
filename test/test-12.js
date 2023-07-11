/*
    Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
    nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
    Example: 
    n = 20 // return 14
    n = 5 // return 8
*/

function difference(num){
    const result = Math.abs(num - 13);
    return num > 13 ? result * 2 : result;  
}

console.log(difference(19));
console.log(difference(3));
console.log(difference(1));
console.log(difference(20));