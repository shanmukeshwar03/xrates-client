import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlefrom,
  handleto,
  handlefromExchange,
  handletoExchange,
} from "redux/currency";

const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fromSymbol, setfromSymbol] = useState("EUR");
  const [toSymbol, settoSymbol] = useState("INR");

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
    <div className="flex flex-col p-4 gap-4">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-gray-800 text-2xl">Currency Converter</h1>
        <span className="text-gray-700 text-sm">{`(${state.timestamp})`}</span>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <span className="text-gray-600">FROM</span>
          <select
            className="w-11/12 bg-transparent border-b border-b-gray-400 outline-none mb-3 py-1 text-gray-700"
            onChange={handlefromSelect}
            value={state.symbols[fromSymbol]}
          >
            {state.options.map((option) => {
              return <option key={option}>{state.symbols[option]}</option>;
            })}
          </select>
          <div className="flex gap-2 w-11/12 border-b border-b-gray-400 rounded-sm p-1">
            <span className="text-indigo-500">{fromSymbol}</span>
            <input
              className="w-full focus:outline-none text-gray-700"
              type="number"
              onChange={handlefromInput}
              value={state.fromInput}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600">TO</span>
          <select
            className="w-11/12 bg-transparent border-b border-b-gray-400 outline-none mb-3 py-1 text-gray-700"
            onChange={handletoSelect}
            value={state.symbols[toSymbol]}
          >
            {state.options.map((option) => {
              return <option key={option}>{state.symbols[option]}</option>;
            })}
          </select>
          <div className="flex gap-2 w-11/12 border-b border-b-gray-400 rounded-sm p-1">
            <span className="text-indigo-500">{toSymbol}</span>
            <input
              className="w-full focus:outline-none text-gray-700"
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
