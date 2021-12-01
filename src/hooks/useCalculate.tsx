import { createContext, useContext, useReducer } from "react"

export type initialstatetype = {
    prevNumber: string;
    operator: string;
    newNumber: string;
}
export const DashboardContext = createContext<{
    state: initialstatetype;
    dispatch: React.Dispatch<CalculatorActionType>;
} | null>(null);

export enum ActionType {
    Add_numbers = "add-number",
    Add_operaotr = "add-operator",
    CLEAR_ALL = "clear-display",
    CALCULATE_VALUE = "calculate-value",
    DELTE_NUMBER = "del-num"
}
type AddNumber = {
    type: ActionType.Add_numbers,
    payload: string
}
type AddOperator = {
    type: ActionType.Add_operaotr,
    payload: string
}
type ClearDisplay = {
    type: ActionType.CLEAR_ALL
}
type CalculateNumber = {
    type: ActionType.CALCULATE_VALUE
}
type DeleteNumber = {
    type: ActionType.DELTE_NUMBER
}
type CalculatorActionType = AddNumber
    | AddOperator
    | ClearDisplay
    | CalculateNumber
    | DeleteNumber;

export const reducer = (
    state: initialstatetype,
    action: CalculatorActionType
): initialstatetype => {
    switch (action.type) {
        case ActionType.Add_numbers:
            if (action.payload === '.' && state.newNumber.includes(".")) return state;
            return { ...state, newNumber: state.newNumber + action.payload };
        case ActionType.Add_operaotr:
            if (state.operator) return state;
            else if (!state.newNumber && !state.operator && action.payload === '-') {
                return { ...state, newNumber: state.newNumber + action.payload };
            }
            return { ...state, prevNumber: state.newNumber, newNumber: "", operator: state.operator + action.payload };
        case ActionType.CLEAR_ALL:
            return {
                prevNumber: "",
                operator: "",
                newNumber: ""
            };
        case ActionType.DELTE_NUMBER:
            if (state.prevNumber && !state.operator) {
                return { ...state, prevNumber: state.prevNumber.slice(0, -1) }
            } else if (!state.newNumber && state.prevNumber && state.operator) {
                return { ...state, operator: state.operator.slice(0, -1) }
            }
            else {
                return { ...state, newNumber: state.newNumber.slice(0, -1) }

            }
        case ActionType.CALCULATE_VALUE:
            if (state.operator === '+') {
                const result = Number(state.prevNumber) + Number(state.newNumber)
                return {
                    ...state,
                    operator: "",
                    prevNumber: "",
                    newNumber: result.toString()
                }
            }
            else if (state.operator === '-') {
                const result = Number(state.prevNumber) - Number(state.newNumber)
                return {
                    ...state,
                    operator: "",
                    prevNumber: "",
                    newNumber: result.toString()
                }
            }
            else if (state.operator === '÷') {
                const result = Number(state.prevNumber) / Number(state.newNumber)
                return {
                    ...state,
                    operator: "",
                    prevNumber: "",
                    newNumber: result.toString()
                }

            }
            else if (state.operator === 'x') {
                const result = Number(state.prevNumber) * Number(state.newNumber)
                return {
                    ...state,
                    operator: "",
                    prevNumber: "",
                    newNumber: result.toString()
                }
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export const DashboardProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(reducer, {
        prevNumber: "",
        operator: "",
        newNumber: ""
    } as initialstatetype);

    return (
        <DashboardContext.Provider value={{ state, dispatch }}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useCalculate() {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error("Context not working!");
    }
    return context;
}
