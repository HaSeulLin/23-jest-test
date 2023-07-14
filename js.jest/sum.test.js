// es6에서 값을 받아오는 import 
// import { sum } from './sum';

// node에서 값을 받아오는 require
const sum = require('./sum');

test('1+2는 3이다', ()=>{
    expect(sum(1,2)).toBe(3);
});


// test()를 사용해서, 1+6이 7일 때 pass인지 확인

test('1+6은 7이다', ()=>{
    expect(sum(1,6)).toBe(7);
})
