import { render, screen, fireEvent } from "@testing-library/react";
import CountButton from "../components/CountButton";
// npm test 주소를 적으면 원하는 파일만 test 가능
// npm test src/__tests__/CountButton-test.js

it("버튼이 있는지 확인", ()=>{
    // data-testid 통해서 확인 - 함수는 props로 전달하지 않음
    render(<CountButton />)

    // 작성한 엘리먼트가 존재하는지 확인
    // html 태그에 data-testid 이용해 getByTestId를 사용해 가져옴
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
})

// props 값에 함수를 넣었을 때 실행 여부
it('CountButton의 props 값으로 함수 확인', () => {
    // 직접 함수 작성 불가능
    // 임의 함수를 jest에서 받아와서 사용
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();

    // 임의로 받아온 함수 넣어주기
    render(<CountButton 
        decrementFn={decrementFn}
        incrementFn={incrementFn} />)
    // 임의로 받아온 함수가 이벤트에 따라서 실행되는지 확인
    // 함수와 이벤트와의 연결 여부 확인

    // 내용 확인 위해 버튼 엘리먼트를 가져옴
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    // fireEvent를 추가하고, fireEvent를 통해서 이벤트 발생
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);

    // 1. 이벤트가 발생되었는지 2. 함수 실행으로 확인 : toBeCalled();
    // toBeCalled() : 함수가 실행되었는지를 볼 수 있다
    expect(incrementFn).toBeCalled();
    expect(decrementFn).toBeCalled();
})