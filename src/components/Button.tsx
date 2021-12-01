import { ActionType, useCalculate } from "../hooks/useCalculate";

export default function Button({ digit }: { digit: string }) {
    const {
        dispatch,
    } = useCalculate();
    return (
        <button onClick={() => dispatch({ type: ActionType.Add_numbers, payload: digit })}>
            {digit}
        </button>
    )
}
