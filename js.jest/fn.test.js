const fn = require('./fn');

test('객체 people이 홍길동과 20을 가진다', ()=>{
    expect(fn.people('홍길동', 20)).toEqual({name:"홍길동",age:20})
})

// test('객체 people이 홍길동과 20을 가진다', ()=>{
//     expect(fn.people('홍길동', 20)).toBe({name:"홍길동",age:20})
// })
// 오류 난다!

test('객체 people이 홍길동과 20을 가진다', ()=>{
    expect(fn.people('홍길동', 20)).toStrictEqual({name:"홍길동",age:20})
})

// not을 사용해서 결과를 반대로 테스트 할 수 있다
// true / false 에서 사용하는 ! (not)
test('객체 people이 홍길동과 20을 가진다', ()=>{
    expect(fn.people('홍길동', 20)).not.toStrictEqual({name:"홍길동",age:202})
})

test('should first', ()=>{
    expect(fn.people("Jone",20)).toEqual({name:"Jone",age:20})
})

// 소수끼리의 계산에서 사용하는 매처 toBeCloseTo
test('0.1 + 0.2 toBe', ()=>{
    expect(0.1+0.2).toBe(0.3);
});
test('0.1 + 0.2 toBeCloseTo', ()=>{
    expect(0.1+0.2).toBeCloseTo(0.3);
});

// 문자열에서 정규표현식을 통해서 확인할 수 있다
// toMatch()
test('홍이라는 글자가 들어간다', ()=>{
    expect("홍길동").toMatch(/홍/);
})

// 배열 안의 값을 찾을 때 toContain 사용
test('배열 안에 숫자 1이 들어있다', () => {
    expect([1,2,3]).toContain(1);
});

// 오류 있는 함수 확인
test('name 값이 없을 때 오류', ()=>{
    expect(()=>fn.makeError()).toThrow(Error);
})