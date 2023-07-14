import React from 'react'

// 버튼의 기능은 props값으로 가져올 예정
export default function CountView({count}) {
  return (
    <div>
        <h1>현재 숫자: {count}</h1>
    </div>
  )
}
