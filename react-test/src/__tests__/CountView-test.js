// CountView의 내용을 테스트
import { render, screen } from "@testing-library/react";
import CountView from "../components/CountView";

// it을 통해서 test할 내용 작성
// props 값을 적었을 때, 그 값이 드러간 text를 가진 HTML 확인
it('CountView의 props값에 따른 화면의 글자 확인', () => {
    // 컴포넌트 실행
    render(<CountView count={5}/>)
    // 글자값이 있는지 가져옴 : html/null
    const initialState = screen.queryByText('현재 숫자: 5');
    // const initialState = screen.queryByText('현재 숫자:5');
    // 글자 틀리면 null
    // 안에 값이 있으면 truthy 참
    // 값이 없으면(null) 거짓
    expect(initialState).toBeTruthy();

    // 한번 더 랜더해서 내용 찾기
    render(<CountView count={0} />)
    const countState = screen.getByText('현재 숫자: 0');
    // 현재 가져온 html 엘리먼트가 Document에 있는지 확인
    // expect(countState).toBeTruthy();
    expect(countState).toBeInTheDocument();
})
