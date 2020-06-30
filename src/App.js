import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "./actions/statusAction";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const handleIn = () => {
    dispatch(setStatus("Hello"));
  };
  const handleOut = () => {
    dispatch(setStatus("GoodBye"));
  };
  return (
    <div className="App">
      <h1>{status}</h1>
      <button onClick={handleIn} style={{ width: "10em", height: "4em" }}>
        IN
      </button>
      <button onClick={handleOut} style={{ width: "10em", height: "4em" }}>
        OUT
      </button>
    </div>
  );
}

export default App;
