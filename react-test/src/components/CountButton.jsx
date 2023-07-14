import React from 'react'

// 버튼의 기능은 props값으로 가져올 예정
export default function CountButton({incrementFn, decrementFn}) {
  return (
    <div>
        <button onClick={incrementFn} data-testid='incrementBtn'>
            +
        </button>
        <button onClick={decrementFn} data-testid='decrementBtn'>
            -
        </button>
    </div>
  )
}
