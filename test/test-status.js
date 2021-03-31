/**
 * 测试用例
 * 1. 状态为非PENDING之后不可变更
 */
 const Promise = require('../src');

const p1 = new Promise((resolve, reject) => {
    resolve(1);
    reject(5);
})

const p2 = new Promise((resolve, reject) => {
    reject(8);
    reject(12);
})

p1.then((res) => console.log('success: ' + res)).catch((error) => console.log('error: ' + error));
p2.then((res) => console.log('success: ' + res)).catch((error) => console.log('error: ' + error));