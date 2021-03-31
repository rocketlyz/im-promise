/**
 * 测试用例
 * 1. 多次调用then不改改变结果
 * 2. .then.catch链式调用
 */
const Promise = require('../src/index');

let p1 = new Promise((resolve) => {
    resolve(Math.random());
})

let p2 = new Promise((resolve, reject) => {
    reject(Math.random());
});

p1.then((res) => console.log('p1 success', res));
p1.then((res) => console.log('p1 success', res));

p2.then((res) => console.log('promise', res)).catch((error) => console.log('p2 error: ' + error));

console.log('script end');