import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter'

it('Counter 컴포넌트 숫자 값 확인', () => {
    render(<Counter />)

    // 최초 값 (0) 확인
    const initialState = screen.queryByText('0');
    expect(initialState).toBeInTheDocument();
})

it('Counter 컴포넌트 증가버튼 확인', () => {
    render(<Counter />)

    const increment = screen.getByTestId('incrementBtn');

    fireEvent.click(increment);

    // 증가값 확인 (1)
    const incrementState = screen.getByText('1');
    expect(incrementState).toBeInTheDocument();
})

it('Counter 컴포넌트 감소버튼 확인', () => {
    render(<Counter />)

    const decrement = screen.getByTestId('decrementBtn');

    // 두 번 감소
    fireEvent.click(decrement);
    fireEvent.click(decrement);

    // 감소값 확인 (-2)
    const decrementState = screen.getByText('-2');
    expect(decrementState).toBeInTheDocument();
})