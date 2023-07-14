import { useState } from 'react';
import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import CountButton from './components/CountButton';
import CountView from './components/CountView';

function App() {
  const [count, setCount] = useState(0);

  // 증가하는 값 함수
  const incrementFn = () => {
    setCount(count+1);
  }

  // 감소하는 값 함수
  const decrementFn = () => {
    setCount(count-1);
  }

  return (
    <div className="App">
      {/** Test를 사용하지 않았을때, 화면에 바로 출력해서 확인 */}
      <CheckboxWithLabel labelOn="On" labelOff="Off"/>

      {/**작성한 내용을 화면에 출력해서 확인 */}
      <CountView count={count}/>

      <CountButton incrementFn={incrementFn} decrementFn={decrementFn}/>
    </div>
  );
}

export default App;
