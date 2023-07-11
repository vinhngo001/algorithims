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
// Mọi nodes có đúng 1 node cha

// Thuộc tính nào giúp kế thừa margin từ thẻ cha của một phần tử? : inherit
// Thuộc tính CSS nào ảnh hưởng đến độ tròn của đường viền? : border-radius
// Về cơ bản, navigation bar là một danh sách các liên kết? : đúng
// Phương thức nào sau đây được dùng tạo value cho key của một Map? : set()
// Từ khóa nào được sử dụng để ném ra một ngoại lệ? : catch
// Ngữ cảnh thực thi global của JavaScript tạo ra 2 thứ cho chúng ta: global object, và từ khóa "this". Đúng hay sai: Đúng
// Quá trình chuyển đổi trạng thái của một đối tượng thành một chuỗi mà từ đó nó có thể được khôi phục lại được gọi là gì? serialization

/**
    1 == '1'; // true
    1 == [1]; // true
    1 == true; // true
    0 == ''; // true
    0 == '0'; // true
    0 == false; // true
 */