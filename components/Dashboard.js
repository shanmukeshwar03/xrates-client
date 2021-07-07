import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handlefrom,
  handleto,
  handlefromExchange,
  handletoExchange,
} from 'redux/currency';

const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fromSymbol, setfromSymbol] = useState('EUR');
  const [toSymbol, settoSymbol] = useState('INR');

  const handlefromInput = (event) => {
    dispatch(handlefrom(event.target.value));
  };

  const handletoInput = (event) => {
    dispatch(handleto(event.target.value));
  };

  const handlefromSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setfromSymbol(state.options[selectedIndex]);
    dispatch(handlefromExchange(state.rates[state.options[selectedIndex]]));
  };

  const handletoSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    settoSymbol(state.options[selectedIndex]);
    dispatch(handletoExchange(state.rates[state.options[selectedIndex]]));
  };

  return (
    <div className="dashboard__container">
      <div className="dashboard__header">
        <h1>Currency Converter</h1>
        <h3>{state.timestamp}</h3>
      </div>
      <div className="dashboard__input__container">
        <div className="dashboard__div">
          <span>from</span>
          <select onChange={handlefromSelect} value={state.symbols[fromSymbol]}>
            {state.options.map((option) => {
              return <option key={option}>{state.symbols[option]}</option>;
            })}
          </select>
          <div>
            <span>{fromSymbol}</span>
            <input
              type="number"
              onChange={handlefromInput}
              value={state.fromInput}
            />
          </div>
        </div>
        <div className="dashboard__div">
          <span>to</span>
          <select onChange={handletoSelect} value={state.symbols[toSymbol]}>
            {state.options.map((option) => {
              return <option key={option}>{state.symbols[option]}</option>;
            })}
          </select>
          <div>
            <span>{toSymbol}</span>
            <input
              type="number"
              onChange={handletoInput}
              value={state.toInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
