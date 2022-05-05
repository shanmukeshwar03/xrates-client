import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [input, setinput] = useState("");
  const state = useSelector((state) => state);

  return (
    <div className="flex flex-col m-4 w-full max-w-xl p-4">
      <div className="flex gap-2 items-center mb-4">
        <h1 className="text-xl text-gray-800 font-medium">Exhange Rates</h1>
        <h3 className="text-sm text-gray-500">(Base : {state.base})</h3>
      </div>
      <div className="flex border border-gray-300 p-2 rounded-md gap-2">
        <svg
          className="stroke-slate-300"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
        </svg>
        <input
          className="text-gray-800 focus:outline-none w-full"
          value={input}
          placeholder="Search currency"
          onChange={(e) => setinput(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        {state.options.map((option, key) => {
          if (!input || option.includes(input.toUpperCase())) {
            return (
              <div className="flex w-full justify-between p-2 my-1" key={key}>
                <span className="text-gray-800">{option}</span>
                <span className="text-gray-700">{state.rates[option]}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
