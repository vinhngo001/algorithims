var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
function docFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile(
            './data.json',
            { encoding: 'utf8' },
            function (err, data) {
                resolve(data);
            });
    }
    );
}
function getLink() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

async function run() {
    var result1 = await docFile();
    var result2 = await getLink().then(function (res) { return res.data; });
    return [result1, result2];
}
run().then(function (values) {
    console.log(values);
});

// --------------bài 2-------------
const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1.
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

// 2.
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function (url) {
            return axios.get(url);
        })
    );
    return results;
}
//điểm khác nhau: 1 là lấy dữ liệu của từng url một và theo thứ tự sau đó lưu vào 1 mảng mới, 2 dùng bất đồng bộ để lấy dữ liệu.

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
//cách 2 có tốc độ nhanh hơn cách 1
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchUrls(urls).then(() => console.log('Done'));
fetchUrlsParallel(urls).then(() => console.log('Done 2'));