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
 */

/**
 * const numbers = [1, 2, 3];
 * numbers[10] = 11;
 * console.log(numbers);
 * 
 * Trong Javascript thì khi bạn set một giá trị có index vượt quá độ dài của mảng, JavaScript sẽ tạo ra một thứ gọi là 'empty'.
 * Chúng thực sự có giá trị undefined, nhưng bạn sẽ thấy như là: [1, 2, 3, 7 x empty, 11]
 * tùy thuộc vào nơi bạn chạy nó (nó khác nhau đối với các trình duyệt, node, v.v.)
 */

// Trong JavaScript, undefined , null , 0 , NaN , "" sẽ chuyển thành false .
/**
 * Có 4 cách để tạo một đối tượng date như sau:
 * // Tạo đối tượng date ứng với thời gian hiện tại
 * new Date()
 * // Tạo đối tượng date ứng với đối số truyền vào
 * new Date(milliseconds)
 * new Date(date string)
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 */