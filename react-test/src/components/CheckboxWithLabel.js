// 함수형 컴포넌트에서 state 사용하기 위해 가져옴
import {useState} from 'react';

// 함수현 컴포넌트 이름 CheckboxWithLabel
// props값으로 가져와서 사용 labelOn, labelOff 
export default function CheckboxWithLabel({labelOn, labelOff}) {
  // 체크 유무를 state에 저장해서 확인
  const [isChecked, setIsChecked] = useState(false);

  // onChange 함수가 실행되었을때, setIsChecked를 통해서
  // 값을 반전(부정(!)) 해서 넣음
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={onChange}
    />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}