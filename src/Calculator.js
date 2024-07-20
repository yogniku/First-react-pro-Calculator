import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setError('num 1 cannot be empty.');
      setSuccess('');
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError('error');
      setSuccess('');
      return false;
    }

    setError('');
    return true;
  };

  const performOperation = (operation) => {
    if (!validateInputs()) {
      return;
    }

    let result;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero.');
          setSuccess('');
          return;
        }
        result = number1 / number2;
        break;
      default:
        result = 'Invalid operation';
    }

    setResult(result);
    setSuccess(`The result is ${result}`);
  };

  return (
    <div className='container'> 
      <input className='box'
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="num 1"
      /><br></br>
      <input className='box'
        type="text"
    
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="num 2"
      /><br></br>
      <div className='box'>
      <button onClick={() => performOperation('add')}>+</button>
      <button onClick={() => performOperation('subtract')}>-</button>
      <button onClick={() => performOperation('multiply')}>*</button>
      <button onClick={() => performOperation('divide')}>/</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      {result !== null && !error && <div>Result: {result}</div>}
    </div>

  );
};

export default Calculator;


