/** 
 * Viết hàm lấy extension của một file
 * Example
 * getExtensionFilename("abc.mp3") // "mp3"
*/

function getExtensionFilename(str){
    const arr = str.split('.');
    return arr[arr.length - 1].trim();
}

console.log(getExtensionFilename('anime.mp4'));
console.log(getExtensionFilename('tai-lieu-quan-trong.doc'));
console.log(getExtensionFilename('C:\Users\NamHandsome\Desktop\index.html'));