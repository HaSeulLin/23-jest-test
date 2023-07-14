// 테스트를 하기위해서 testing-library에서 가져옴
// cleanup : 테스트가 끝나고 DOM 마운트 해제 및 정리
// fireEvent : 이벤트를 실행
// render : 컴포넌트를 실행
import {cleanup, fireEvent, render} from '@testing-library/react';
// 테스트할 컴포넌트 가져옴
import CheckboxWithLabel from '../components/CheckboxWithLabel';

// cleanup : 테스트가 끝나고 DOM 마운트 해제 및 정리
afterEach(cleanup);

// it : test와 동일한 역할
it('CheckboxWithLabel이 클릭 이후 글자가 바뀜', () => {
  // render를 통해서 먼저 컴포넌트 실행
  // props넣어서 진행
  // queryByLabelText : <label>엘리먼트를 텍스트를 통해서 찾음
  // getByLabelText : <label>엘리먼트를 텍스트를 통해 가져옴
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  // queryByLabelText(off)글자를 가진 엘리먼트 찾음
  // expect와 toBeTruthy() 확인 
  // off글자를 가진 엘리먼트를 찾고 그 값이 있는지 확인
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // off 글자를 가진 엘리먼트를 찾고, 
  // fireEvent를 통해 click 이벤트 실행
  fireEvent.click(getByLabelText(/off/i));

  // on글자를 가진 엘리먼트를 찾고 그 값이 있는지 확인
  // 클릭을 통해서 label의 텍스트값이 on으로 바뀌고 off는 없어지는것 확인
  expect(queryByLabelText(/off/i)).toBeFalsy();
});

// it을 통해서,CheckboxWithLabel컴포넌트에
// labelOn="선택" labelOff="취소" 이 값을 넣고 
// 처음에는 취소 텍스트를 가진 라벨이 있는지 확인하고
// 클릭한 후에 선택 텍스트를 가진 라벨이 있는지 확인하세요
it('CheckboxWithLabel 클릭확인', () => {
    const { getByLabelText, queryByLabelText } = render(
        <CheckboxWithLabel labelOn="선택" labelOff="취소"/>
    )
    expect(queryByLabelText(/취소/)).toBeTruthy
    
    fireEvent.click(getByLabelText(/취소/))

    expect(queryByLabelText(/선택/)).toBeTruthy
});