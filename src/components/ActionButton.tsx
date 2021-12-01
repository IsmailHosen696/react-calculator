import { ActionType, useCalculate } from "../hooks/useCalculate";

export default function ActionButton({ actionBtn }: { actionBtn: string }) {
    const {
        dispatch,
    } = useCalculate();
    return (
        <button onClick={() => {
            if (actionBtn === 'AC') {
                dispatch({ type: ActionType.CLEAR_ALL });
            }
            else if (actionBtn === '=') {
                dispatch({ type: ActionType.CALCULATE_VALUE });
            }
            else if (actionBtn === 'C') {
                dispatch({ type: ActionType.DELTE_NUMBER });
            }
            return
        }}>
            {actionBtn}
        </button>
    )
}
