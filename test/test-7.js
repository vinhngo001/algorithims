/**
    //Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
    //=============================
    //input : string
    //output : true or false
    //=============================
*/

// sol 1
function equal_pt(str) {
    const arr = str.split('');
    let quantity_t = 0;
    let quantity_p = 0;
    arr.forEach(el => {
        if (el === 't') {
            quantity_t += 1;
        }

        if (el === 'p') {
            quantity_p += 1;
        }
    });
    return quantity_p === quantity_t;
}

// sol 2
function equal_pt_2(str) {
    var count = 0, result = 0;
    if (str === "") {
        return true;
    }

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 't') count++;
        if (str.charAt(i) === 'p') result++;
    }
    return count === result;
}


console.log(equal_pt_2('paatpsts'));

console.log(equal_pt_2('aass'));

console.log(equal_pt_2('paatpss'));