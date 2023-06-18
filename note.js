/**
 * Do trong Javascript thì chỉ có:
 * Kiểu Boolean có falsy value là false
 * Kiểu Number có falsy value là 0 và NaN
 * Kiểu String có falsy value là ''
 * Kiểu null là có falsy value null
 * Kiểu undefined có falsy value là undefined
*/

/**
 * 4 cach clone array
 * Object.assign
 * JSON.stringify => JSON.parse
 * [...]: spread operator
 * Array.slice
 */

//Hàm constructor giống như new Number và new Boolean đều là truthy value.
//Kiểu nguyên thủy bao gồm: boolean, null, undefined, bigint, number, string, and symbol

/**
 * Điều khác biệt giữa primitive với object là primitive không có bất kỳ thuộc tính hay phương thức nào. 
 * Tuy nhiên, bạn cần lưu ý rằng 'foo'.toUpperCase() ước tính là 'FOO' và không dẫn đến TypeError.
 * 
 */