/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/

function toNextChar(str){
    const arr = str.split('');
    const newArr = [];
    for(let i = 0 ; i < arr.length; i++){
        const index = str.charCodeAt(i) + 1;
        const convert = String.fromCharCode(index);
        newArr.push(convert);
    }
    return newArr.join('');
}

console.log(toNextChar('Hello'));
console.log(toNextChar('abc'));