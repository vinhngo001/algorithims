// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 

// sol 1
function startWith1(str){
    return str.split(0, 5).join('') === "Java" ? true : false;
}
console.log(startWith1('Java'))

// sol 2
function startWith2(str){
    return str.substring(0, 4) === 'Java' ? true : false;
}
console.log(startWith2('XJava'))

// sol 3
function startWith3(str){
    return str.startsWith('Java') ? true : false;
}
console.log(startWith3('Javascript'))