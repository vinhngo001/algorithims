// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"


// sol 1
function newString1(str, n) {
    const arr = str.split('');
    const firstStr = arr.slice(0,n).join('');
    const reverseArr = arr.reverse();
    const lastStr = reverseArr.slice(0, n).reverse().join(''); // [4, 5]
    return `${firstStr}${lastStr}`;

}
console.log(newString1('1wyg5yhd45', 2));

// sol 2
function newString2(str, n){
	var str1 = str.substring(0,n);
	var str2 = str.substring(str.length-n, str.length);
	var s = str1+str2;
	return s;
}

console.log(newString2('1wyg5yhd45', 2));