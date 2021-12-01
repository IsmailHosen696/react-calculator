import ActionButton from './components/ActionButton';
import Button from './components/Button';
import OperatorsButton from './components/OperatorsButton';
import { useCalculate } from './hooks/useCalculate';

function App() {
  const { state } = useCalculate();
  return (
    <div className="calculator">
      <div className="calculator_body">
        <div className="display">
          <div className='last_number'>{state.prevNumber} {state.operator}</div>
          <div className='new_number'>{state.newNumber ? state.newNumber : 0}</div>
        </div>
        <div className="button">
          <ActionButton actionBtn='AC' />
          <ActionButton actionBtn='C' />
          <OperatorsButton operators='÷' />
          <Button digit='7' />
          <Button digit='8' />
          <Button digit='9' />
          <OperatorsButton operators='x' />
          <Button digit='4' />
          <Button digit='5' />
          <Button digit='6' />
          <OperatorsButton operators='+' />
          <Button digit='1' />
          <Button digit='2' />
          <Button digit='3' />
          <OperatorsButton operators='-' />
          <Button digit='0' />
          <Button digit='.' />
          <ActionButton actionBtn='=' />
        </div>
      </div>
    </div>
  );
}

export default App;
