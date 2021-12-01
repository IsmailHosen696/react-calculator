import ActionButton from './components/ActionButton';
import Button from './components/Button';
import OperatorsButton from './components/OperatorsButton';

function App() {
  return (
    <div className="calculator">
      <div className="calculator_body">
        <div className="display">
          <div className='last_number'>4545+ </div>
          <div className='new_number'>12</div>
        </div>
        <div className="button">
          <ActionButton actionBtn='Ac' />
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
