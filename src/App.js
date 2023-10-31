import React, { useEffect, useState } from "react";

const App = () => {
  const [sum, setSum] = useState(0);

  const handleAdd = () => {
    setSum(sum + 1);
  };

  useEffect(() => {
    console.log("나는 렌더링 될 때마다 실행됩니다");
  });

  useEffect(() => {
    console.log("나는 마운트 될 때 한번만 실행됩니다");
  }, []);

  useEffect(() => {
    console.log("나는 sum이 변할 때만 실행됩니다");
  }, [sum]);

  return (
    <>
      <h1>UseEffect</h1>
      <div>
        값 증가: {sum}
        <button onClick={handleAdd}>1씩 더하기</button>
      </div>
    </>
  );
};

export default App;
