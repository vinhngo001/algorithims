/*
Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'
**/

// sol 1
function omitCharAt(str, n) {
    const arr = str.split('')
    arr.splice(n, 1);
    return arr.join('');
}
console.log(omitCharAt("Hello Quang Dat", 8));

console.log(omitCharAt("Hello Quang Dat", 0));

// sol 2
/** 
function omitCharAt (s,n){
    var arr = []
    for(var i of s){
        arr.push(i);
    }
    var str = '';
    for(var j = 0; j < arr.length; j++){
        if(n > 0){
            if(j === n-1){
                arr.splice(n,1);
            }
        }else if(n === 0 && j===n){
            arr.splice(0,1);
        }
        str += arr[j];
    }
    return str;
}
*/

// sol 3
/**
 function omitCharAt(str,n) {
	var arr = str.split('');
	var s = "";
	for(var i = 0; i < arr.length; i++){
		if(i === n){
			arr.splice(i,1);
		}
		s+=arr[i];
	}
	return s
}
 */