function sum(a,b) {
    return a+b;
}

// Jest가 없을 경우 결과확인을 위해 우리가 작성한 코드
// (node sum) 터미널 콘솔창을 통해서 node 자바스크립트 파일이름으로 확인
// js 파일은 브라우저에서만 확인이 가능했으나,
// node를 통해 터미널에서도 가능
console.log(sum(1,3))

// node에서 모듈로 만들어서 내보내는 내용
module.exports = sum;

// es6 버전에서의 모듈
// export를 사용할 때 {} 객체로 담아서 전달
// export { sum };