/* 
    viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
    newString("1wyg5yhd45", 2) // "1w45"

    function newString(str, n){
    return str.substr(0, n) + str.substr(str.length-n,n);
    }

*/

function newString(str, n) {
    const first = str.substring(0, n);
    const second = str.substring(str.length - n);
    return `${first}${second}`;
}

console.log(newString('describle', 2));
console.log(newString('gsdrw4rfergf45gs', 3));