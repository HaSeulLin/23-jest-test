// 따로 작성한 함수
function people (name, age) {
    // return {name, age, job:undefined}
    return {name, age}
}

// 오류를 일으키는 함수
function makeError (name) {
    if (!name) {
        throw new Error("오류가 발생했습니다");
    }
    console.log(name)
}

// 객체 안에 함수를 넣어 전달
const fn = {
    people,
    makeError
}

module.exports = fn;
