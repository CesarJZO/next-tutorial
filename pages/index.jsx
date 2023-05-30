import React from "react";
import Gauge from "../components/gauge";

const MyPage = () => {
  const value = 50;
  const min = 0;
  const max = 100;

  return (
    <div>
      <h1>My gauge</h1>
      <Gauge value={value} min={min} max={max} width={200} height={20} />
    </div>
  );
}

export default MyPage;
