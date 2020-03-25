import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  if (count === 3) {
    return (
      <div className="App">
        <img src="https://3.bp.blogspot.com/-R5ZeHGZD0fM/WHG2J2c1t5I/AAAAAAABA_c/l72QBLocVXI9_Zu2pQgV1OKfe0FK-zPYgCLcB/s800/hengao.png" alt="変顔" />
        <div className="jokeText">さーーん</div>
      </div>
    );
  }
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{"押せ！".repeat(count + 1)}</button>
      {count > 0 && <div>{count}</div>}
    </div>
  );
}

export default App;
