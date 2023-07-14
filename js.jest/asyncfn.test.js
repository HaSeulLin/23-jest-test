const asyncfn = require('./asyncfn');

test('setTimeout 확인', (done) => {
    // 1. 시간이 걸리는 함수 실행 asyncfn.fetchUser()
    // 2. 함수를 전달해 내용 확인 expect와 toEqual 전달
    // 3. done을 통해서 expect가 완료된 후에
    // 결과 확인할 수 있도록 기다릴 수 있다
    asyncfn.fetchUser("green", (user) => {
        expect(user).toEqual({
            id: "green",
            name: "Usergreen"
        });
        done();
    })
})

// Promise 값을 전달하는 함수 실행
// 1. then 사용
// 값을 가져올 때 return을 붙여서 사용
test('user Promise then', () => {
    return asyncfn.fetchUserPromise("2").then(
        // then을 통해서 함수를 이용해 값을 가져올 수 있다
        // user는 resolve 통해서 가져온 값
        (user) => {
            // then 안에서 가져온 값을 확인
            expect(user).toEqual({id:"2", name:"User2"})
        }
    )
})

// 2. async/await 사용
test('user Promise await', async () => {
    const user = await asyncfn.fetchUserPromise('3');
    expect(user).toEqual({id:"3",name:"User3"})
})