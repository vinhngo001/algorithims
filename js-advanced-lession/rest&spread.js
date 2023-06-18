//...rest
//rest là các tham số còn lại khi truyền đối số vào lời gọi hàm mà số lượng đối số lớn hơn số lượng tham số trong định nghĩa hàm. ...rest luôn là tham số cuối cùng trong định nghĩa hàm
function log(a, ...numbers) {
    console.log(a);
    console.log(numbers);
}
log(1, 2, 3, 4, 5);
//1
//[ 2, 3, 4, 5 ]

//ví dụ
function concat(separator, ...strings) {
    return strings.join(separator);
}
concat('.', 'a', 'b', 'kkkk', 'd');//a.b.kkkk.d

//...spread
//rest thì gom các phần tử thành 1 array còn spread thì trải các phần từ trong array ra.
const a=[1,2,3];
const b=[0,...a,4];
console.log(b);//[ 0, 1, 2, 3, 4 ]
console.log(...a);//1 2 3


function sum(...numbers){ 
return numbers.reduce((sum,num)=>sum+num,0); //result: 6
}
sum(...a);//tương đương sum(1,2,3);
//-----------

const obj1={ 
  a:1,
  b:2,
  c:3,
  d:{e:88}
};
let obj2={ 
  ...obj1, //deep clone obj1
  z:222
};
console.log(obj1,obj2);
//{ a: 1, b: 2, c: 3, d: { e: 88 } } 
//{ a: 1, b: 2, c: 3, d: { e: 88 }, z: 222 }