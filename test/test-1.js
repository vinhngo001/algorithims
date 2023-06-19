function reverse(str) {
    const newStr = str.split('');
    let result = '';
    for (let i = newStr.length - 1; i >= 0; i--){
        result+=newStr[i];
    }

    return result;
}

console.log(reverse("abc"));