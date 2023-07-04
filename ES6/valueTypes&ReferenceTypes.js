//value types vs reference types
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);//true
//a1 và a2 sẽ lưu luôn giá trị vào biến
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);//false
//obj hay array là kiểu phức tạp nên nó sẽ lưu vào bộ nhớ và có biến tham chiếu đến nó
//{a:1} sẽ có obj1 tham chiếu đến nó tương tự như obj2

let a3 = a2; //value type
a3 = 2;
console.log(a2);// 1

let obj3 = obj2;//reference types
console.log(obj3 === obj2);//true
obj3.a = 4;
console.log(obj2);//{ a: 4 }
console.log(obj3 === obj2);//true


function log(x) {
    x.b = 5;
}
log(obj1);//truyền tham chiếu obj1
console.log(obj1);//{ a: 1, b: 5 }
//để khắc phục tình trạng chuyền tham chiếu mà ko muốn thay đổi mất giá trị ban đầu thì có thể dùng
//---- cách 1
//let newObj = JSON.parse(JSON.stringify(obj));
//----cách 2: newObj={...obj}
//ví dụ:
let newObj = { ...obj2 };
newObj.c = 333;
console.log(newObj);//{ a: 4, c: 333 }
console.log(obj2);//{ a: 4 }
//---cách 3
//copyObject = Object.assign({}, originObject)