//========== call function
//func.call(this,param1,param2,...);
//call nhận các đối số truyền vào là đối số đầu tiên là this trong hàm gọi hàm call, các đối số tiếp theo là các tham số truyền vào hàm gọi hàm call.

function greet(color) {
    console.log(`hi! ${this.name}. I am ${this.age}. I love color ${color}`);
}
const cat = {
    name: 'tom',
    age: '10'
};
greet.call(cat, 'blue');//hi! tom. I am 10. I love color blue

//=======apply
//func.apply(this, [param1, param2, ....]);
//cách dùng apply tương tự call, chỉ khác là call truyền các đối số vào lúc gọi, còn apply truyền mảng các đối số.
function sums() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}
function average() {
    const x = sums.apply(null, arguments);
    return x / arguments.length;
}
average(1, 2, 3, 6);//3