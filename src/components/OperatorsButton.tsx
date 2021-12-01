import { ActionType, useCalculate } from "../hooks/useCalculate";

export default function OperatorsButton({ operators }: { operators: string }) {
    const {
        dispatch,
    } = useCalculate();
    return (
        <button onClick={() => dispatch({ type: ActionType.Add_operaotr, payload: operators })}>
            {operators}
        </button>
    )
}
